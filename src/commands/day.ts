import { CommandModule } from "yargs";
import ora from "ora";
import { togglService } from "../toggl-service";
import { formatDuration, getDurationFromStart } from "../duration";

export const dayCommand: CommandModule = {
  command: "day",
  describe: "gets a list of todays entries",
  handler: async () => {
    const spinner = ora("Loading todays entries..\n").start();

    const start = new Date();
    const end = new Date();

    start.setHours(0, 0, 0);
    end.setHours(23, 59, 59);

    const { data = [], error } = await togglService.entries({
      start_date: start.toISOString(),
      end_date: end.toISOString(),
    });

    if (error) {
      spinner.fail(error.message);
      return;
    }

    if (data.length === 0) {
      spinner.fail("No entries found for today");
      return;
    }

    spinner.succeed("Todays entries");

    let total = 0;

    data.forEach((entry) => {
      const duration =
        entry.duration > 0
          ? entry.duration
          : getDurationFromStart(entry.start, new Date());

      total += duration;

      console.log(
        `${formatDuration(duration)}: ${
          entry.description ?? "<no description>"
        }`
      );
    });
    console.log("-".repeat(40));

    console.log(`Total: ${formatDuration(total)}`);
  },
};
