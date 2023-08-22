import { block } from "million";
import { forwardRef } from "react";
import { Form, Row, Col } from "react-bootstrap";

const DatePicker = ({ onChange, max }, ref) => {
  return (
    <Form>
      <Form.Group
        as={Row}
        className="mb-3"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label column sm="8" className="text-end fw-bolder">
          Select Date
        </Form.Label>
        <Col sm="4">
          <Form.Control
            type="date"
            placeholder="Select Date"
            ref={ref}
            max={max}
            onChange={onChange}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};
const DatePickerBlock = forwardRef(block(DatePicker));
export default DatePickerBlock;
