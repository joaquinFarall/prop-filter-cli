export enum OptionalOptions {
  ID = '-i, --id [id]',
  SQUARE_FOOTAGE = '-sf, --squareFootage [squareFootage]',
  LIGHTING = '-l, --lighting [lighting]',
  PRICE = '-p, --price [price]',
  ROOMS = '-r, --rooms [rooms]',
  BATHROOMS = '-b, --bathrooms [bathrooms]',
  LOCATION = '-lo, --location [location]',
  DESCRIPTION = '-d, --description [description]',
  AMMENITIES = '-a, --ammenities [ammenities...]'
};

export enum RequiredOptions {
  ID = '-i, --id <id>',
  SQUARE_FOOTAGE = '-sf, --squareFootage <squareFootage>',
  LIGHTING = '-l, --lighting <lighting>',
  PRICE = '-p, --price <price>',
  ROOMS = '-r, --rooms <rooms>',
  BATHROOMS = '-b, --bathrooms <bathrooms>',
  LOCATION = '-lo, --location <location>',
  DESCRIPTION = '-d, --description <description>',
  AMMENITIES = '-a, --ammenities <ammenities...>'
};

export enum FilterOptions {
  EQUAL = '--eq <fields...>',
  LESS_THAN = '--lt <fields...>',
  GREATER_THAN = '--gt <fields...>',
  INCLUDE = '--include <value>',
  MATCH = '--match <text>',
  DISTANCE = '--distance <lat,lon,maxDistance>'
};