import { CommandModule } from "yargs";
import ora from "ora";
import { togglService } from "../toggl-service";
import { formatDuration, getDurationFromStart } from "../duration";

export const currentCommand: CommandModule = {
  command: "$0",
  describe: "Get current entry",

  handler: async () => {
    const spinner = ora("Fetching current entry..\n").start();
    const { data, error } = await togglService.current();

    if (error) {
      spinner.fail(error.message);
      return;
    }

    if (!data) {
      spinner.fail("No task running. Start one with toggl start <description>");
      return;
    }

    spinner.succeed(`Current task`);

    const duration = getDurationFromStart(data.start, new Date());
    console.log("-".repeat(40));
    console.log(`Description   : ${data.description}`);
    console.log(`Duration      : ${formatDuration(duration)}`);
  },
};
