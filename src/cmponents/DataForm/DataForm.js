import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const DataForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Form className="justify-content-md-center" onSubmit={submitHandler}>
      <Form.Group className="mb-3 mt-3" xs={12} as={Col} md="5">
        <Form.Label>Date and time</Form.Label>
        <Form.Control type="datetime-local" required />
      </Form.Group>
      <Form.Group className="mb-5" as={Col} md="3">
        <Form.Label>Number of Ducks You feed</Form.Label>
        <Form.Control type="number" required />
      </Form.Group>

      <Row className="mb-5">
        <Form.Group as={Col} md="4">
          <Form.Label>Food</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Volume</Form.Label>
          <Form.Control type="number" required />
        </Form.Group>
        <Form.Group as={Col} md="1">
          <Form.Label>Unit</Form.Label>
          <Form.Select aria-label="unit">
            <option value="g">G</option>
            <option value="kg">KG</option>
            <option value="ton">Ton</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Form.Group as={Col} md="8" className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} md="3">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>State/Province</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
      </Row>
      <Form.Group as={Col} md="3">
        <Form.Label>Postal code/Zip</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>
      <div className="mt-4 mb-3 text-center">
        <Button type="submit">Submit form</Button>
      </div>
    </Form>
  );
};

export default DataForm;
