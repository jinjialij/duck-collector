import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "./App";

describe("Test app components", () => {
  test("renders to check if Duck Data Form exists", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const duckFormLink = screen.getByText("Duck Data Form");
    expect(duckFormLink).toBeInTheDocument();
  });

  test("renders to check if router New Duck Data link exists", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const duckFormLink = screen.getByText("Add New Duck Data");
    expect(duckFormLink).toBeInTheDocument();
  });

  test("renders to check if All Duck data link router exists", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const duckDataLink = screen.getByText("All Duck Data");
    expect(duckDataLink).toBeInTheDocument();
  });
});
