#!/usr/bin/env node
import yargs from "yargs";
import {
  currentCommand,
  startCommand,
  stopCommand,
  setTokenCommand,
  setPidCommand,
  dayCommand,
} from "./commands";

yargs
  .scriptName("toggl")
  .usage("$0 <cmd> [args]")
  .command(currentCommand)
  .command(dayCommand)
  .command(startCommand)
  .command(stopCommand)
  .command(setTokenCommand)
  .command(setPidCommand)
  .help().argv;
