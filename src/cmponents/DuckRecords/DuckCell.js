const DuckCell = (props) => {
  return (
    <tbody key={props.id}>
      <tr>
        <td>{props.id}</td>
        <td>{props.address}</td>
        <td>{props.city}</td>
        <td>{props.state}</td>
        <td>{props.country}</td>
        <td>{props.postcode}</td>

        <td>{props.food}</td>
        <td>{props.foodVol}</td>
        <td>{props.foodUnit}</td>

        <td>{props.duckNum}</td>
        <td>{props.recordDatetime}</td>
      </tr>
    </tbody>
  );
};
export default DuckCell;
