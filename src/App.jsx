import "./App.scss";

import { Col, Container, Row } from "react-bootstrap";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import DatePicker from "./components/UI/DatePicker/DatePicker";

const App = () => {
  return (
    <>
      <Header />
      <Container className="mt-3 mb-3">
        <Row xs={12}>
          <Col xs={12} lg={12}>
            <DatePicker />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default App;
