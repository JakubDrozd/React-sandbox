import App from "./App";
import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

it("should tick after one second to new value", () => {
  jest.useFakeTimers();
  render(<App></App>);
  const timer = screen.getByTestId("timer");
  expect(timer.innerHTML).toBe("0");
  act(() => {
    jest.advanceTimersByTime(1000);
  });
});
