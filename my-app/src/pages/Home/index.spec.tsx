import { render, screen } from "@testing-library/react";
import Home from "./index";
import React from "react";

describe("Home", () => {
  it("should render Home component correctly", () => {
    render(<Home />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});