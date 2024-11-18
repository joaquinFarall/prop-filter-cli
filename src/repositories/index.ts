import { mongoConnection } from "../config/databases"
import PropertyRepository from "./property.repository"

const propertyRepositoy = new PropertyRepository(mongoConnection);

export { propertyRepositoy };