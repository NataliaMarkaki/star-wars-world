import { cleanup, render, screen } from "@testing-library/react";

import Card from "./Card";

describe("Card", () => {
  afterEach(cleanup);

  it("renders a card component with all data shown correctly", () => {
    render(
      <Card
        name="fakeName" gender="fakeGender" planet="fakePlanet" id={123}
      />
    );

    expect(screen.getByTestId("card-wrapper-123")).toBeTruthy();
    expect(screen.getByTestId("card-description-123")).toBeTruthy();
    expect(screen.getByTestId("card-name-123")).toBeTruthy();
    expect(screen.getByTestId("card-gender-123")).toBeTruthy();
    expect(screen.getByTestId("card-home-123")).toBeTruthy();
  });
});
