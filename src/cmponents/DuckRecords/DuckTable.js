import Table from "react-bootstrap/Table";
import DuckCell from "./DuckCell";

const DuckTable = (props) => {
  return (
    <Table striped bordered responsive="sm" className="mt-3 text-center">
      <thead>
        <tr>
          <th>#</th>
          <th>Address</th>
          <th>City</th>
          <th>State/Province</th>
          <th>Country</th>
          <th>Post/Zip code</th>
          <th>Food</th>
          <th>Uint</th>
          <th>Volume</th>
          <th>Numbers Of Feed Duck</th>
          <th>Date and Time</th>
        </tr>
      </thead>
      {props.ducks.length > 0 &&
        props.ducks.map((el) => (
          <DuckCell
            key={el.id}
            id={el.id}
            address={el.address}
            city={el.city}
            state={el.state}
            country={el.country}
            postcode={el.postcode}
            food={el.food}
            foodVol={el.foodVol}
            foodUnit={el.foodUnit}
            duckNum={el.duckNum}
            recordDatetime={el.recordDatetime}
          />
        ))}
    </Table>
  );
};

export default DuckTable;
