import "./App.css";
import DataForm from "./cmponents/DataForm/DataForm";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Container>
        <h1 className="mb-3 text-center">Duck Data form</h1>
        <DataForm />
      </Container>
    </>
  );
}

export default App;
