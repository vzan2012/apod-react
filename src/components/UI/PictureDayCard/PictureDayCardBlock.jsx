import { block } from "million";
import { Row, Col, Container } from "react-bootstrap";

const PictureDayCard = ({ dataResponse }) => {
  const { title, date, url, explanation } = dataResponse;
  return (
    <Container>
      <Row>
        <Col xs={12} className="titlewrapper">
          <h1 className="titleContent">{title}</h1>
        </Col>
        <Col xs={12} className="datewrapper mb-3">
          <span>
            <strong>Date: </strong>
            {date}
          </span>
        </Col>
        <Col xs={12} className="media-section mb-3">
          <img src={url} title={title} className="img-fluid d-img" />
        </Col>
        <Col xs={12} className="explanation mb-3">
          <p>{explanation}</p>
        </Col>
      </Row>
    </Container>
  );
};

const PictureDayCardBlock = block(PictureDayCard);

export default PictureDayCardBlock;
