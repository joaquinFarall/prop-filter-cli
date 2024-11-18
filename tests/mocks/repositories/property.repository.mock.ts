import PropertyRepository from "../../../src/repositories/property.repository";

const mongoConnectionMock = { model: () => null } as never;

class PropertyRepositoryMock extends PropertyRepository {
  get = jest.fn();

  create = jest.fn();

  update = jest.fn();

  delete = jest.fn();
}

export const propertyRepositoryMock = new PropertyRepositoryMock(mongoConnectionMock);