async function createLocation(location) {
  try {
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

    return data;
  } catch (err) {
    console.log(err);
  }
}

async function createDuck(duck, locationId) {
  try {
    const url = "http://localhost:5000/ducks/newduck";
    duck.locationId = locationId;
    const reqbody = JSON.stringify(duck);
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: reqbody,
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export { createLocation, createDuck };
