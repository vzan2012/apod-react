import { Form, Row, Col } from "react-bootstrap";
const DatePicker = () => {
  return (
    <Form>
      <Form.Group
        as={Row}
        className="mb-3"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label column sm="2">
          Select Date
        </Form.Label>
        <Col sm="10">
          <Form.Control type="date" placeholder="Select Date" />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default DatePicker;
