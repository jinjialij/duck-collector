import DuckTable from "./DuckTable";

import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";

const DuckRecords = (props) => {
  return (
    <div className="container-fluid">
      {!props.isLoading && (
        <>
          <h1 className="mt-3 mb-3 text-center">Duck Data</h1>{" "}
          <DuckTable ducks={props.ducks} />
        </>
      )}
      {props.isLoading && (
        <Container className="mt-5 d-flex justify-content-center text-center">
          <Spinner
            animation="border"
            role="status"
            className="justify-content-center"
          >
            <span className="visually-hidden text-center">Loading...</span>
          </Spinner>
        </Container>
      )}
    </div>
  );
};
export default DuckRecords;
