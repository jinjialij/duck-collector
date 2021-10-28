import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import DataForm from "./DataForm";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Test DuckForm components", () => {
  test("renders check if there is a button", () => {
    render(<DataForm />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders check if there is option element", () => {
    render(<DataForm />);
    const optionElement = screen.queryAllByRole("option").toLocaleString();
    expect(optionElement).toBe(
      `[object HTMLOptionElement],[object HTMLOptionElement],[object HTMLOptionElement],[object HTMLOptionElement]`,
      { exact: false }
    );
  });
});
