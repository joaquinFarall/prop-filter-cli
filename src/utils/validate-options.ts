import { Lighting } from "../models";

export function validateArgs(options: any) {
  const {
    squareFootage,
    lighting,
    price,
    rooms,
    bathrooms,
    location,
  } = options;
  if (!Number(squareFootage)) throw new Error("squareFootage should be a number");
  if (!Number(price)) throw new Error("price should be a number");
  if (!Number(rooms)) throw new Error("rooms should be a number");
  if (!Number(bathrooms)) throw new Error("bathrooms should be a number");
  if (!(Object.values(Lighting).includes(lighting))) throw new Error(`lighting should be one of ${Object.values(Lighting).join(', ')}`);
  if (!(/^\d+(\.\d+)?,\d+(\.\d+)?$/.test(location))) throw new Error("location format should be a n,m where both n and m are numbers");
}