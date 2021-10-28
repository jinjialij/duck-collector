import Table from "react-bootstrap/Table";
import DuckCell from "./DuckCell";

const DuckTable = (props) => {
  return (
    <>
      <h1 className="mt-5 mb-3 text-center">Duck Data</h1>
      <Table striped bordered responsive="lg" className="mt-3 text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Date and Time</th>
            <th>Duck Number</th>
            <th>Food</th>
            <th>Food Volume</th>
            <th>Food Uint</th>
            <th>Address</th>
            <th>City</th>
            <th>State/Province</th>
            <th>Country</th>
            <th>Post/Zip code</th>
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
              foodVol={el.food_volume}
              foodUnit={el.food_unit}
              duckNum={el.duck_num}
              recordDatetime={el.record_datetime}
            />
          ))}
      </Table>
    </>
  );
};

export default DuckTable;
