import { Arguments, BuilderCallback, CommandModule } from "yargs";
import { setSettings } from "../settings";

type SetTokenArgs = {
  projectId: string;
};

export const setPidCommand: CommandModule<{}, SetTokenArgs> = {
  command: "set-pid [projectId]",
  describe: "set a default project id for your toggling",
  builder: {
    projectId: {
      type: "string",
      describe: "A project id to set on your tasks, not required",
      demandOption: true,
    },
  },
  handler: ({ projectId }) => setSettings({ projectId }),
};
