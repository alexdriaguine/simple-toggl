import { CommandModule } from "yargs";
import { setSettings } from "../settings";

type SetTokenArgs = {
  token: string;
};

export const setTokenCommand: CommandModule<{}, SetTokenArgs> = {
  command: "set-token [token]",
  describe: "set a toggl token to use for authentication",
  builder: {
    token: {
      type: "string",
      describe: "A toggl token for API access",
      demandOption: true,
    },
  },
  handler: ({ token }) => setSettings({ token }),
};
