import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import Container from "react-bootstrap/Container";

import DataForm from "./cmponents/DataForm/DataForm";
import DuckTable from "./cmponents/DuckRecords/DuckTable";
import MainNavigation from "./cmponents/Navigation/MainNavgation";

function App() {
  const [ducks, setDucks] = useState([]);

  useEffect(() => {
    fetchDataHandler();
  }, []);

  async function fetchDataHandler() {
    const response = await fetch("http://localhost:5000/ducks");
    const data = await response.json();
    setDucks(data.rows);
  }
  return (
    <>
      <MainNavigation />
      <Container>
        <Switch>
          <Route path="/" exact={true}>
            <DataForm />
          </Route>
          <Route path="/ducks">
            <DuckTable ducks={ducks} />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
