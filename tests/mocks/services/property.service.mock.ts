import PropertyService from "../../../src/services/property.service";
import { propertyRepositoryMock } from "../repositories/property.repository.mock";

class PropertyServiceMock extends PropertyService {};

export const propertyServiceMock = new PropertyServiceMock(propertyRepositoryMock);