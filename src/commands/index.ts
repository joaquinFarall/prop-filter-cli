import { Command } from "commander";
import registerAddCommand from "./add.command";
import registerGetCommand from "./get.command";
import registerUpdateCommand from "./update.command";
import registerDeleteCommand from "./delete.command";

export default function registerCommands(program: Command) {
  registerAddCommand(program);
  registerGetCommand(program);
  registerUpdateCommand(program);
  registerDeleteCommand(program);
}
