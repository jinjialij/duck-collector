import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test app components", () => {
  test("renders to check if Duck Data Form exists", () => {
    render(<App />);
    const thElement = screen.getByText("Duck Data Form");
    expect(thElement).toBeInTheDocument();
  });

  test("renders to check if Duck Table exists", () => {
    render(<App />);
    const thElement = screen.getByText("Duck Data");
    expect(thElement).toBeInTheDocument();
  });
});
