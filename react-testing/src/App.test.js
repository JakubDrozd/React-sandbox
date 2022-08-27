import App from "./App";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  it("render magnificent monkeys", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("render radical rhinos after button click", () => {
    render(<App></App>);
    const button = screen.getByRole("button", { name: "Click me" });
    userEvent.click(button);
    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
