import { block } from "million";
import { forwardRef } from "react";
import { Alert, Container, Row } from "react-bootstrap";

const CustomAlert = (props, ref) => {
  const { key, variant, children } = props;
  return (
    <Container className="mt-3 mb-3">
      <Row xs={12}>
        <Alert
          ref={ref}
          key={key}
          variant={variant}
          style={{ margin: "0 auto" }}
        >
          {children}
        </Alert>
      </Row>
    </Container>
  );
};

const CustomAlertBlock = forwardRef(block(CustomAlert));

export default CustomAlertBlock;
