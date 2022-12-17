export interface GetFilmsRequestParams {
  urls: string[];
}

interface GetFilmsRequestResponse {
  title: string;
}

export interface FilmsRequestResult {
  films?: string[];
}

async function getFilm(url: string): Promise<string | null> {
  try {
    const data = await fetch(url);
    const result: GetFilmsRequestResponse = await data.json();
    return result.title;
  } catch (e) {
    console.warn(`Error: ${e}`);
    return null
  }
}

export async function getFilms({ urls }: GetFilmsRequestParams): Promise<FilmsRequestResult> {
  const films = await Promise.all(urls.map(async (url: string) => {
    const filmName = await getFilm(url);
    return filmName;
  }));
  return { films: (films.filter(film => film) as string[]) };
};
