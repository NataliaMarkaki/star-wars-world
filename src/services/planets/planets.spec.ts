import { SWAPI_URL } from "../constants";

import { getPlanet } from "./planets";

const successResponse = {
  name: "fakeName",
};

const errorResponse = {};

const warnMock = jest.fn();
global.console.warn = warnMock;

describe("planets", () => {
  const fetchSpy = jest.spyOn(global, "fetch");

  describe("getPlanet", () => {
    it("returns planet data when the request is successful", async () => {
      fetchSpy.mockImplementation(jest.fn(() => Promise.resolve({ json: () => Promise.resolve(successResponse), }),) as jest.Mock);
      const response = await getPlanet({ url: `${SWAPI_URL}/planets` });
      expect(response).toEqual(successResponse);
    });

    it("returns default data when the request is NOT successful", async () => {
      fetchSpy.mockImplementationOnce(() => Promise.reject("API is down"));
      const response = await getPlanet({ url: `${SWAPI_URL}/planets` });
      expect(response).toEqual(errorResponse);
      expect(warnMock).toHaveBeenCalledWith("Error: API is down");
    });
  });
});
