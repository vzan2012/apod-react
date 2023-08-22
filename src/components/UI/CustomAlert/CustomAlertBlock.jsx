import { block } from "million";
import { forwardRef } from "react";
import { Alert } from "react-bootstrap";

const CustomAlert = (props, ref) => {
  const { key, variant, children } = props;
  return (
    <Alert ref={ref} key={key} variant={variant}>
      {children}
    </Alert>
  );
};

const CustomAlertBlock = forwardRef(block(CustomAlert));

export default CustomAlertBlock;
