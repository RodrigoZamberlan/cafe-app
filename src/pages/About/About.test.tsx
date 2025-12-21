import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About", () => {
  it("should render the page with text", () => {
    render(<About />);
    expect(screen.findByText("This is About.tsx"));
  });
});
