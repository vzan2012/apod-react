// import React from 'react'

import { Button, Container, Row, Col } from "react-bootstrap";
import DatePicker from "../../UI/DatePicker/DatePicker";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const fetchURL =
  import.meta.env.VITE_API_KEY !== ""
    ? `https://api.nasa.gov/planetary/apod?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    : "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

const InputForm = ({ sendDataToParent }) => {
  const controller = new AbortController();
  const dateFieldRef = useRef("");
  const maxDateLimit = new Date().toISOString().split("T")[0];

  const [showDataBtnStatus, setShowDataBtnStatus] = useState(false);

  // Fetch API Data from URL
  const fetchAPIData = (givenURL, controller) => {
    axios
      .get(givenURL, {
        signal: controller.signal,
      })
      .then((response) => sendDataToParent(response.data));
  };

  useEffect(() => {
    fetchAPIData(fetchURL, controller);

    return () => {};
  }, []);

  /**
   * Show Data Handler
   */
  const onShowData = async () => {
    // Return the data
    const updatedAPIURL = `${fetchURL}&date=${dateFieldRef.current.value}`;
    fetchAPIData(updatedAPIURL, controller);
  };

  /**
   * Cancel Button Handler
   */
  const onCancel = () => {
    // Cancel the request
    controller.abort();

    // Reset the input value
    dateFieldRef.current.value = "";

    // Disable the Show Data Button Status
    setShowDataBtnStatus(false);
  };

  /**
   * DatePicker Change Handler
   */
  const onChangeDatePicker = () => {
    if (dateFieldRef.current.value) {
      setShowDataBtnStatus(true);
    }
  };
  return (
    <Container className="mt-3 mb-3">
      <Row xs={12}>
        <Col xs={12} lg={12}>
          <Row xs={12}>
            <Col xs={12} lg={7}>
              <DatePicker
                ref={dateFieldRef}
                onChange={onChangeDatePicker}
                max={maxDateLimit}
              />
            </Col>
            <Col xs={12} lg={5}>
              <Button
                id="btn-show-data"
                variant="primary"
                type="button"
                className="me-2"
                onClick={onShowData}
                disabled={!showDataBtnStatus}
              >
                Show Data
              </Button>
              <Button
                id="btnCancel"
                variant="dark"
                type="button"
                onClick={onCancel}
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default InputForm;
