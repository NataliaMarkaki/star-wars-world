import { cleanup, render, screen, waitFor } from "@testing-library/react";

import Home from "./Home";

jest.mock('../../services/people/people', () => ({
  getPeopleList: () => ([{
    name: 'fakeName',
    hair_color: 'fakeHairColor',
    eye_color: 'fakeEyeColor',
    gender: 'fakeGender',
    homeworld: 'fakeHomeworld',
    films: '/some/api',
  }])
}));
jest.mock('react-router-dom');

describe("Home", () => {
  afterEach(cleanup);

  it("renders a home page with all data shown correctly", async () => {
    render(
      <Home />
    );

    await waitFor(() => { expect(screen.getByTestId("card-wrapper-0")).toBeTruthy() });
    await waitFor(() => { expect(screen.getByTestId("card-description-0")).toBeTruthy() });
    await waitFor(() => { expect(screen.getByTestId("card-name-0")).toBeTruthy() });
    await waitFor(() => { expect(screen.getByTestId("card-gender-0")).toBeTruthy() });
    await waitFor(() => { expect(screen.getByTestId("card-home-0")).toBeTruthy() });
  });
});
