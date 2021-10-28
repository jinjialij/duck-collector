import DuckTable from "./DuckTable";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

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

describe("Test DuckTable components", () => {
  test("renders with or without a name", () => {
    const DUMMY_DATA = [
      {
        id: 1,
        address: "123 sss str",
        city: "halifax",
        country: "ca",
        duckNum: 12,
        food: "corn",
        foodUnit: "g",
        foodVol: 50,
        postcode: "abccda",
        recordDatetime: "2021-10-27T22:16",
        state: "ns",
      },
    ];
    act(() => {
      render(<DuckTable ducks={DUMMY_DATA} />, container);
    });
    expect(container.textContent).toBe(
      "#AddressCityState/ProvinceCountryPost/Zip codeFoodUintVolumeNumbers Of Feed DuckDate and Time1123 sss strhalifaxnscaabccdacorn50g122021-10-27T22:16",
      { exact: false }
    );
  });
});
