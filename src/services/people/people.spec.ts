import { SWAPI_URL } from "../constants";

import { getPeople, getPerson } from "./people";

const successResponse = {
  count: 1,
  results: [{
    name: "fakeName",
    height: "fakeHeight",
    hair_color: "fakeHairColor",
    eye_color: "fakeEyeColor",
    birth_year: "fakeBirthYear",
    gender: "fakeGender",
    homeworld: "fakeHomeworld",
    films: ["fakeFilm1"],
    url: "fakeUrl",
  }],
};

const errorResponse = {
  count: 0,
  people: [],
};

const warnMock = jest.fn();
global.console.warn = warnMock;

describe("people", () => {
  const fetchSpy = jest.spyOn(global, "fetch");

  describe("getPeople", () => {
    it("returns all people data when the request is successful", async () => {
      fetchSpy.mockImplementation(jest.fn(() => Promise.resolve({ json: () => Promise.resolve(successResponse), }),) as jest.Mock);
      const response = await getPeople();
      expect(fetchSpy).toBeCalledWith(`${SWAPI_URL}/people`);
      expect(response).toEqual(successResponse);
    });

    it("returns default data when the request is NOT successful", async () => {
      fetchSpy.mockImplementationOnce(() => Promise.reject("API is down"));
      const response = await getPeople();
      expect(fetchSpy).toBeCalledWith(`${SWAPI_URL}/people`);
      expect(response).toEqual(errorResponse);
      expect(warnMock).toHaveBeenCalledWith("Error: API is down");
    });
  });

  describe("getPerson", () => {
    it("returns single person data when the request is successful", async () => {
      fetchSpy.mockImplementation(jest.fn(() => Promise.resolve({ json: () => Promise.resolve(successResponse.results), }),) as jest.Mock);
      const response = await getPerson({ url: `${SWAPI_URL}/people/1` });
      expect(response).toEqual(successResponse.results);
    });

    it("returns default data when the request is NOT successful", async () => {
      fetchSpy.mockImplementationOnce(() => Promise.reject("API is down"));
      const response = await getPerson({ url: `${SWAPI_URL}/people/1` });
      expect(response).toEqual({});
      expect(warnMock).toHaveBeenCalledWith("Error: API is down");
    });
  });
});
