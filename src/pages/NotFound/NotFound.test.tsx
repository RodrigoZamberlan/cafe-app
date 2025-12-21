import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { isRouteErrorResponse } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  isRouteErrorResponse: jest.fn(),
  Link: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("NotFound", () => {

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render the heading with the status and message", () => {
    const mockError = {
      status: 404,
      statusText: "Not Found",
      data: "Page does not exist",
    };

    isRouteErrorResponse(mockError);

    render(<NotFound />);
    expect(screen.getByText(mockError.status)).toBeInTheDocument();
  });
});
