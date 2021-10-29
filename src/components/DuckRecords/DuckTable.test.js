import DuckTable from "./DuckTable";
import { render, unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";
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
  test("renders with dummy data", () => {
    const DUMMY_DATA = [
      {
        id: 1,
        address: "123 sss str",
        city: "halifax",
        country: "ca",
        duck_num: 12,
        food: "corn",
        food_unit: "g",
        food_volume: 50,
        postcode: "abccda",
        record_datetime: "2021-10-27T22:16",
        state: "ns",
      },
    ];
    act(() => {
      render(
        <MemoryRouter>
          <DuckTable ducks={DUMMY_DATA} />
        </MemoryRouter>,
        container
      );
    });
    expect(container.textContent).toContain(
      "Date and TimeDuck NumberFoodFood VolumeFood UintAddressCityState/ProvinceCountryPost/Zip code",
      { exact: false }
    );
  });
});
