import { Command } from "commander";
import { Commands, OptionalOptions, RequiredOptions } from "../models";
import { propertyService } from "../services";
import logger from "../utils/logger";
import { validateArgs } from "../utils/validate-options";

export default function registerUpdateCommand(program: Command) {
  program
    .command(Commands.UPDATE)
    .description('Update a property by id')
    .option(RequiredOptions.ID)
    .option(OptionalOptions.SQUARE_FOOTAGE)
    .option(OptionalOptions.LIGHTING)
    .option(OptionalOptions.PRICE)
    .option(OptionalOptions.ROOMS)
    .option(OptionalOptions.BATHROOMS)
    .option(OptionalOptions.LOCATION)
    .option(OptionalOptions.DESCRIPTION)
    .option(OptionalOptions.AMMENITIES)
    .action(updateAction);
}

async function updateAction(options: any) {
  try {
    validateArgs(options);
    const { id } = options;
    const property = {
      squareFootage: options.squareFootage ? +options.squareFootage : undefined,
      lighting: options.lighting,
      price: options.price ? +options.price : undefined,
      rooms: options.rooms ? +options.rooms : undefined,
      bathrooms: options.bathrooms ? +options.bathrooms : undefined,
      location: options.location ? {
        type: 'Point',
        coordinates: options.location.split(",").map((l: string) => +l)
      } : undefined,
      description: options.description,
      ammenities: options.ammenities ? options.ammenities.reduce((acc: Record<string, boolean>, key: string) => {
        acc[key] = true;
        return acc;
      }) : undefined
    };
    const updatedProperty = await propertyService.updateProperty(options.id, property);
    logger.info(`Property ${id} updated successfully`);
  } catch (error) {
    logger.error("Error while updating the property", error);
  }
}
