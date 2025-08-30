import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home Page", () => {
  it("should render the Home Page heading", () => {
    render(<Home />);
    expect(screen.getByText("Find the best Coffee for you")).toBeInTheDocument();
  });
});
