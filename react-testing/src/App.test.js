import App from "./App";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactDOM from "react-dom/client";

it("should increment a counter", () => {
  render(<App></App>);
  const button = screen.getByTestId("button");
  for (let i = 0; i < 3; i++) {
    userEvent.click(button);
  }
  expect(button.innerHTML).toBe("3");
});
