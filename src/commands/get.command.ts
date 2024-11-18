import { Command } from "commander";
import { Commands, FilterOptions, OptionalOptions } from "../models";
import { propertyService } from "../services";
import logger from "../utils/logger";

export default function registerGetCommand(program: Command) {
  program
    .command(Commands.GET)
    .description('Get properties based on the received options')
    .option(FilterOptions.EQUAL, 'Filter by multiple fields equal to values, e.g., --eq price=500000 rooms=4')
    .option(FilterOptions.LESS_THAN, 'Filter by multiple fields less than values, e.g., --lt price=600000 rooms=5')
    .option(FilterOptions.GREATER_THAN, 'Filter by multiple fields greater than values, e.g., --gt price=400000 rooms=3')
    .option(FilterOptions.INCLUDE, 'Filter by inclusion (e.g., --include garage)')
    .option(FilterOptions.MATCH, 'Filter descriptions that include a specific text')
    .option(FilterOptions.DISTANCE, 'Filter by distance from a location, e.g., --distance 40.730610,-73.935242,5000')
    .action(getAction);
}

async function getAction(options: any) {
  try {
    const filters: Record<string, any> = {};

    if (options.eq) {
      options.eq.forEach((pair: string) => {
        const [field, value] = pair.split('=');
        if (field && value) filters[field] = Number(value) ? +value : value;
      });
    }

    if (options.lt) {
      options.lt.forEach((pair: string) => {
        const [field, value] = pair.split('=');
        if (field && value) filters[field] = { $lt: Number(value) };
      });
    }

    if (options.gt) {
      options.gt.forEach((pair: string) => {
        const [field, value] = pair.split('=');
        if (field && value) filters[field] = { $gt: Number(value) };
      });
    }

    if (options.include) {
      filters.amenities = { $elemMatch: { [options.include]: true } };
    }

    if (options.match) {
      filters.description = { $regex: options.match, $options: 'i' };
    }

    if (options.distance) {
      const [lat, lon, maxDistance] = options.distance.split(',').map(Number);
      filters.location = {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [lon, lat],
          },
          $maxDistance: maxDistance,
        },
      };
    }

    const properties = await propertyService.getProperties(filters);
    properties.map(({_id, squareFootage, lighting, price, rooms, bathrooms, location, description, ammenities}) => ({
      _id, squareFootage, lighting, price, rooms, bathrooms, location: location.coordinates, description, ammenities
    })).forEach((prop) => console.log(prop));
  } catch (error) {
    logger.error('Error while getting properties', error);
  }
};
