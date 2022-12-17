import { cleanup, render, screen } from "@testing-library/react";

import Card from "./Card";

jest.mock('react-router-dom');

describe("Card", () => {
  afterEach(cleanup);

  it("renders a card component with all data shown correctly", () => {
    render(
      <Card
        name="fakeName" gender="fakeGender" id={123}
      />
    );

    expect(screen.getByTestId("card-wrapper-123")).toBeTruthy();
    expect(screen.getByTestId("card-description-123")).toBeTruthy();
    expect(screen.getByTestId("card-name-123")).toBeTruthy();
    expect(screen.getByTestId("card-gender-123")).toBeTruthy();
    expect(screen.getByTestId("card-home-123")).toBeTruthy();
  });
});
