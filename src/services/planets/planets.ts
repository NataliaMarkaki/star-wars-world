export interface GetPlanetRequestParams {
  url: string;
}

export interface PlanetRequestResult {
  name?: string;
}

export async function getPlanet({ url }: GetPlanetRequestParams): Promise<PlanetRequestResult> {
  try {
    const data = await fetch(url);
    const result = await data.json();
    return result;
  } catch (e) {
    console.warn(`Error: ${e}`);
    return {};
  }
};
