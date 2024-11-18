import { propertyCreate, propertyId, propertyList, propertyUpdate } from "../mocks/property.mock";
import { propertyRepositoryMock } from "../mocks/repositories/property.repository.mock";
import { propertyServiceMock } from "../mocks/services/property.service.mock";

describe("Property Service", () => {
  describe("createProperty", () => {
    test("Successful operation", async () => {
      // Arrange
      propertyRepositoryMock.create.mockResolvedValue(propertyList[0]);
      // Act
      const result = await propertyServiceMock.createProperty(propertyCreate);
      // Assert
      expect(propertyRepositoryMock.create).toHaveBeenCalledTimes(1);
      expect(result).toBe(propertyList[0]);
    });
  });

  describe("getProperties", () => {
    test("Successful operation", async () => {
      // Arrange
      propertyRepositoryMock.get.mockResolvedValue(propertyList);
      // Act
      const result = await propertyServiceMock.getProperties({});
      // Assert
      expect(propertyRepositoryMock.get).toHaveBeenCalledTimes(1);
      expect(result).toBeInstanceOf(Array);
      result.forEach((res, i) => {
        expect(res).toBe(propertyList[i]);
      })
    });
  });

  describe("updateProperty", () => {
    test("Successful operation", async () => {
      // Act
      const result = await propertyServiceMock.updateProperty(propertyId, propertyUpdate);
      // Assert
      expect(propertyRepositoryMock.update).toHaveBeenCalledTimes(1);
    });
  });

  describe("deleteProperty", () => {
    test("Successful operation", async () => {
      // Act
      const result = await propertyServiceMock.deleteProperty(propertyId);
      // Assert
      expect(propertyRepositoryMock.delete).toHaveBeenCalledTimes(1);
    });
  });
});
