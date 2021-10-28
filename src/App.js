import { Route, Switch } from "react-router-dom";

import "./App.css";
import DataForm from "./cmponents/DataForm/DataForm";
import DuckTable from "./cmponents/DuckRecords/DuckTable";
import Container from "react-bootstrap/Container";
import MainNavigation from "./cmponents/Navigation/MainNavgation";

function App() {
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
    {
      id: 2,
      address: "567 ddd str",
      city: "toronto",
      country: "ca",
      duckNum: 120,
      food: "corn",
      foodUnit: "g",
      foodVol: 500,
      postcode: "1yykue",
      recordDatetime: "2021-10-28T10:16",
      state: "on",
    },
  ];
  return (
    <>
      <MainNavigation />
      <Container>
        <Switch>
          <Route path="/" exact={true}>
            <DataForm />
          </Route>
          <Route path="/ducks">
            <DuckTable ducks={DUMMY_DATA} />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
