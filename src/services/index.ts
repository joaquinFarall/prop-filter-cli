import { propertyRepositoy } from "../repositories";
import PropertyService from "./property.service";

const propertyService = new PropertyService(propertyRepositoy);

export { propertyService };