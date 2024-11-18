import { Schema, Types } from "mongoose";
import { Lighting } from "../enums";

export interface Property {
  _id: Types.ObjectId;
  squareFootage: number,
	lighting: Lighting,
	price: number,
	rooms: number,
	bathrooms: number,
  location: {
    type: string;
    coordinates: [number, number];
  },
  description: string,
  ammenities: Record<string, boolean>
}

export interface PropertyCreate extends Omit<Property, '_id'> {};

export const PropertySchema = new Schema<Property>(
  {
    squareFootage: { type: Number, required: true },
    lighting: { type: String, required: true, enum: Object.values(Lighting) },
    price: { type: Number, required: true },
    rooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    location: {
      type: { type: String, enum: ['Point'], required: true },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    description: { type: String, required: true },
    ammenities: { type: Object, required: true }
  },
  {
    timestamps: true,
    versionKey: false,
  } 
);

PropertySchema.index({ location: '2dsphere' });
