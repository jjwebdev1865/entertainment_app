import { render, screen } from "@testing-library/react";
import AboutMe from "./index";
import React from "react";

describe("AboutMe", () => {
  it("should render AboutMe component correctly", () => {
    render(<AboutMe />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});