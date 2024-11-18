import { Command } from "commander";
import { Commands, Lighting, RequiredOptions } from "../models";
import { propertyService } from "../services";
import logger from "../utils/logger";

export default function registerDeleteCommand(program: Command) {
  program
    .command(Commands.DELETE)
    .description('Delete a property by id')
    .option(RequiredOptions.ID)
    .action(deleteAction);
}

async function deleteAction(options: any) {
  try {
    const { id } = options;
    await propertyService.deleteProperty(id);
    logger.info(`Property ${id} deleted successfully`);
  } catch (error) {
    logger.error('Error while deleting the property', error);
  }
}
