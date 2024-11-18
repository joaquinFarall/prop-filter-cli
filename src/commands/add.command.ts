import { Command } from "commander";
import { propertyService } from "../services";
import logger from "../utils/logger";
import { validateArgs } from "../utils/validate-options";
import { Commands, OptionalOptions, RequiredOptions } from "../models";

export default function registerAddCommand(program: Command) {
  program
    .command(Commands.ADD)
    .description('Create new property')
    .option(RequiredOptions.SQUARE_FOOTAGE)
    .option(RequiredOptions.LIGHTING)
    .option(RequiredOptions.PRICE)
    .option(RequiredOptions.ROOMS)
    .option(RequiredOptions.BATHROOMS)
    .option(RequiredOptions.LOCATION)
    .option(OptionalOptions.DESCRIPTION)
    .option(OptionalOptions.AMMENITIES)
    .action(addAction);
}

async function addAction(options: any) {
  try {
    validateArgs(options);
    const ammenities: Record<string, boolean> = {};
    if (options.ammenities) {
      options.ammenities.forEach((a: string) => {
        ammenities[a] = true;
      })
    }
    const property = {
      squareFootage: +options.squareFootage,
      lighting: options.lighting,
      price: +options.price,
      rooms: +options.rooms,
      bathrooms: +options.bathrooms,
      location: {
        type: 'Point',
        coordinates: options.location.split(",").map((l: string) => +l)
      },
      description: options.description,
      ammenities
    };
    const { _id } = await propertyService.createProperty(property);
    logger.info(`Property ${_id} created successfully`);
  } catch (error) {
    logger.error("Error while creating the property", error);
  }
}
