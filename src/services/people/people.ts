import { SWAPI_URL } from "../constants";

export interface GetPersonRequestParams {
  personNumber: number;
}

export interface PersonRequestResult {
  name?: string;
  height?: string;
  hair_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: string[];
  url?: string;
}

interface GetPeopleRequestResult {
  count: number;
  people: PersonRequestResult[];
  next?: string;
};

export async function getPeople(): Promise<GetPeopleRequestResult> {
  try {
    const url = `${SWAPI_URL}/people`;

    const data = await fetch(url);
    const result = await data.json();
    return result;
  } catch (e) {
    console.warn(`Error: ${e}`);
    return {
      count: 0,
      people: [],
    };
  }
};

export async function getPerson({ personNumber }: GetPersonRequestParams): Promise<PersonRequestResult> {
  try {
    const url = `${SWAPI_URL}/people/${personNumber}`;

    const data = await fetch(url);
    const result = await data.json();
    return result;
  } catch (e) {
    console.warn(`Error: ${e}`);
    return {};
  }
};

