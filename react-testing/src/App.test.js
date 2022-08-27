import App from "./App";
import React from "react";
import { render } from "@testing-library/react";

describe("App component", () => {
  it("renders correct heading", () => {
    const { getByRole } = render(<App />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
