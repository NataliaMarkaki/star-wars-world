import { cleanup, render, screen, waitFor } from "@testing-library/react";

import Character from "./Character";

jest.mock('../../services/films/films', () => ({
  getFilms: () => ({ films: ['FakeFilm1'] })
}));
jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    state: {
      name: 'fakeName',
      hair_color: 'fakeHairColor',
      eye_color: 'fakeEyeColor',
      gender: 'fakeGender',
      homeworld: 'fakeHomeworld',
      films: '/some/api',
      id: 123,
    }
  })
}));

describe("Character", () => {
  afterEach(cleanup);

  it("renders a character page with all data shown correctly", async () => {
    render(
      <Character />
    );

    expect(screen.getByText("fakeName")).toBeTruthy();
    expect(screen.getByText("fakeHairColor")).toBeTruthy();
    expect(screen.getByText("fakeEyeColor")).toBeTruthy();
    expect(screen.getByText("fakeGender")).toBeTruthy();
    expect(screen.getByText("fakeHomeworld")).toBeTruthy();
    await waitFor(() => { expect(screen.getByText("FakeFilm1")).toBeTruthy() });
  });
});
