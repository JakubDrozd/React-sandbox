import App from "./App";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactDOM from "react-dom/client";

it("should render 1", () => {
  render(<App></App>);
  expect(screen.queryByTestId("ctr").innerHTML).toBe("1");
});
