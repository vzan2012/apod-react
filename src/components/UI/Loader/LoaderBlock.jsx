import { block } from "million";
import { Container, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Container style={{ minHeight: "560px", textAlign: "center" }}>
      <Spinner animation="border" />
    </Container>
  );
};

const LoaderBlock = block(Loader);
export default LoaderBlock;
