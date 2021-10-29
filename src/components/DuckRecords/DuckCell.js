const DuckCell = (props) => {
  const datetime = props.recordDatetime.substring(0, 19).replace("T", " ");
  return (
    <tbody key={props.id}>
      <tr>
        <td>{props.id}</td>
        <td>{datetime}</td>
        <td>{props.duckNum}</td>

        <td>{props.food}</td>
        <td>{props.foodVol}</td>
        <td>{props.foodUnit}</td>

        <td>{props.address}</td>
        <td>{props.city}</td>
        <td>{props.state}</td>
        <td>{props.country}</td>
        <td>{props.postcode}</td>
      </tr>
    </tbody>
  );
};
export default DuckCell;
