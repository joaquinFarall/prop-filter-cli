import { Property, PropertyCreate } from "../models";
import PropertyRepository from "../repositories/property.repository";
import logger from "../utils/logger";

class PropertyService {
  constructor(private readonly propertyRepository: PropertyRepository) {}

  createProperty(property: PropertyCreate): Promise<Property> {
    try {
      return this.propertyRepository.create(property);
    } catch (error) {
      logger.error("Error at PropertyService.createProperty ->", error);
      throw error;
    }
  }

  getProperties(filters: Record<string, any>): Promise<Property[]> {
    try {
      return this.propertyRepository.get(filters);
    } catch (error) {
      logger.error("Error at PropertyService.getProperties ->", error);
      throw error;
    }
  }

  updateProperty(id: string, property: Partial<PropertyCreate>) {
    try {
      return this.propertyRepository.update(id, property);
    } catch (error) {
      logger.error("Error at PropertyService.updateProperty ->", error);
      throw error;
    }
  }

  deleteProperty(id: string) {
    try {
      return this.propertyRepository.delete(id);
    } catch (error) {
      logger.error("Error at PropertyService.deleteProperty ->", error);
      throw error;
    }
  }
}

export default PropertyService;