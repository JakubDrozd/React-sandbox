import App from "./App";
import React from "react";
import { render, screen } from "@testing-library/react";

it("should tick after one second to new value", () => {
  render(<App></App>);
  const timer = screen.getByTestId("timer");
  expect(timer.innerHTML).toBe("0");
  setTimeout(() => {
    expect(timer.innerHTML).toBe("1");
  });
});
