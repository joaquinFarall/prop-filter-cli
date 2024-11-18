import { Connection, Model } from "mongoose";
import { Property, PropertyCreate, PropertySchema } from "../models";

class PropertyRepository {
  private model: Model<Property>;

  constructor(private readonly connection: Connection) {
    this.model = this.connection.model('Property', PropertySchema, "properties");
  }

  create(property: PropertyCreate): Promise<Property> {
    return this.model.create(property);
  }

  get(filters: Record<string, any>): Promise<Property[]> {
    return this.model.find(filters);
  }

  update(id: string, property: Partial<PropertyCreate>) {
    return this.model.updateOne({_id: id}, property);
  }

  delete(id: string) {
    return this.model.deleteOne({_id: id});
  }
}

export default PropertyRepository;