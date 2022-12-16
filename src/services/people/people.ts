import { SWAPI_URL } from "../constants";
import { getPlanet } from "../planets/planets";

export interface GetPersonRequestParams {
  url: string;
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

export interface GetPeopleRequestResult {
  count: number;
  results: PersonRequestResult[];
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
      results: [],
    };
  }
};

export async function getPerson({ url }: GetPersonRequestParams): Promise<PersonRequestResult> {
  try {
    const data = await fetch(url);
    const result = await data.json();
    return result;
  } catch (e) {
    console.warn(`Error: ${e}`);
    return {};
  }
};

export async function getPeopleList() {
  const people = await getPeople();
  const peopleWithWorld = await Promise.all(people.results.map(async (person: PersonRequestResult) => {
    const planet = await getPlanet({ url: person.homeworld as string });
    return {
      ...person,
      homeworld: planet.name,
    }
  }));

  return peopleWithWorld;
}
