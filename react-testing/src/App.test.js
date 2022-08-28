import App from "./App";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should render 1", () => {
  const el = document.createElement("div");
  el.render(<App></App>);
  expect(el.innerHTML).toBe(<App></App>);
});
