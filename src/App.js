import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import { createLocation, createDuck } from "./service/duckService";

import "./App.css";
import Container from "react-bootstrap/Container";

import DataForm from "./components/DataForm/DataForm";
import DuckRecords from "./components/DuckRecords/DuckRecords";
import MainNavigation from "./components/Navigation/MainNavgation";
import Formpage from "./components/DataForm/Formpage";

function App() {
  const [ducks, setDucks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchDataHandler();
  }, []);

  async function fetchDataHandler() {
    setIsLoading(true);
    const response = await fetch("http://localhost:5000/ducks");
    const data = await response.json();
    setDucks(data.rows);
    setIsLoading(false);
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
    try {
      const locationId = await createLocation(location);
      //post duck to db after retrive locationId
      if (locationId) {
        const duckId = await createDuck(duck, locationId);
        duck.id = duckId;
        setDucks((prev) => {
          return [...prev, duck];
        });
        alert("Submit successfully, Thank you!");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to submit form");
    }
  }

  return (
    <>
      <MainNavigation />
      <Container>
        <Switch>
          <Route path="/" exact={true}>
            <Formpage>
              <DataForm onAddDuckData={addDataHandler} />
            </Formpage>
          </Route>
          <Route path="/ducks">
            <DuckRecords ducks={ducks} isLoading={isLoading} />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
