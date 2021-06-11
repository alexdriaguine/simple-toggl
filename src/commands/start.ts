import { Arguments, CommandModule } from "yargs";
import ora from "ora";
import { togglService } from "../toggl-service";

type StartArgs = {
  description: string;
};

export const startCommand: CommandModule<{}, StartArgs> = {
  command: "start [description]",
  describe: "Start a new toggl task",
  builder: {
    description: {
      describe: "Description of what you're working on",
      type: "string",
      demandOption: true,
    },
  },
  handler: async (args: Arguments<StartArgs>) => {
    const spinner = ora("Starting toggl..\n").start();
    const current = await togglService.current();

    if (current.error) {
      spinner.fail(current.error.message);
      return;
    }

    if (current?.data?.id) {
      spinner.text = "Found a task, stopping it first";
      const stopped = await togglService.stop(current.data.id);
      if (stopped.error) {
        spinner.fail(stopped.error.message);
        return;
      }
    }

    const newTask = await togglService.start(args.description);
    if (newTask.error) {
      spinner.fail(newTask.error.message);
      return;
    }
    spinner.succeed(`Task started. Name: ${newTask.data?.description}`);
  },
};
