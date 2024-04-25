import { block } from "million";
import { Row, Col, Container } from "react-bootstrap";

const PictureDayCard = ({ dataResponse }) => {
  const { title, date, url, media_type, explanation } = dataResponse;

  /**
   * Check the data media type is image or video
   *
   * @param {*} media_type
   * @returns {*}
   */
  const checkMediaType = (media_type) => {
    if (media_type === "image") {
      return <img src={url} title={title} className="img-fluid d-img" />;
    } else {
      return (
        <iframe
          className="ytvideo"
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      );
    }
  };

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
          {checkMediaType(media_type)}
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
