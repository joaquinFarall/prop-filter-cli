import { randomUUID } from "crypto";
import { Lighting, PropertyCreate } from "../../src/models";

export const propertyCreate: PropertyCreate = {
  squareFootage: 50,
  lighting: Lighting.MEDIUM,
  price: 150000,
  rooms: 3,
  bathrooms: 1,
  location: {
    type: 'Point',
    coordinates: [20.234, -45.456]
  },
  description: "**Property description**",
  ammenities: { garage: true, backyard: true }
};

export const propertyId = randomUUID();

export const propertyUpdate = {
  price: 200000,
  description: "**Update property description**",
  ammenities: { garage: true, backyard: true, pool: true }
};

export const propertyList = [
  {
    _id: randomUUID(),
    squareFootage: 50,
    lighting: Lighting.MEDIUM,
    price: 150000,
    rooms: 3,
    bathrooms: 1,
    location: {
      type: 'Point',
      coordinates: [20.234, -45.456]
    },
    description: "**Property description**",
    ammenities: { garage: true, backyard: true }
  },
  {
    _id: randomUUID(),
    squareFootage: 200,
    lighting: Lighting.HIGH,
    price: 350000,
    rooms: 4,
    bathrooms: 2,
    location: {
      type: 'Point',
      coordinates: [67.432, 25.789]
    },
    description: "**Property description**",
    ammenities: { garage: true, backyard: true, pool: true, attic: true }
  },
  {
    _id: randomUUID(),
    squareFootage: 30,
    lighting: Lighting.LOW,
    price: 40000,
    rooms: 1,
    bathrooms: 1,
    location: {
      type: 'Point',
      coordinates: [10.132, -55.246]
    },
    description: "**Property description**",
    ammenities: {}
  }
];