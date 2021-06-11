import ora from "ora";
import { CommandModule } from "yargs";
import { togglService } from "../toggl-service";

export const stopCommand: CommandModule = {
  command: "stop",
  describe: "stops the current task",
  handler: async () => {
    const spinner = ora("Stopping toggl..\n").start();
    const current = await togglService.current();

    if (!current.data?.id) {
      spinner.warn("No running task found..");
      return;
    }

    const stopped = await togglService.stop(current.data.id);
    spinner.succeed("Stoped task with name: " + stopped.data?.description);
  },
};
