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

  async function createLocation(location) {
    const url = "http://localhost:5000/ducks/location";
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(location),
    });
    const data = await response.json();
    console.log(data);
    return data;
  }

  async function createDuck(duck, locationId) {
    const url = "http://localhost:5000/ducks/newduck";
    duck.locationId = locationId;
    const reqbody = JSON.stringify(duck);
    console.log(reqbody);
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: reqbody,
    });

    const data = await response.json();
    console.log(data);
    return data;
  }

  async function addDataHandler(duck) {
    //post location to db
    const location = {
      address: duck.address,
      city: duck.city,
      state: duck.state,
      country: duck.country,
      postcode: duck.postcode,
    };
    const locationId = await createLocation(location);

    //post duck to db after retrive locationId
    if (locationId) {
      const duckId = await createDuck(duck, locationId);
      duck.id = duckId;
    }

    setDucks((prev) => {
      return [...prev, duck];
    });
  }

  return (
    <>
      <MainNavigation />
      <Container>
        <Switch>
          <Route path="/" exact={true}>
            <DataForm onAddDuckData={addDataHandler} />
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
