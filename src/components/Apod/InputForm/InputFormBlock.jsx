import { Button, Container, Row, Col } from "react-bootstrap";
import { useRef, useState } from "react";

import DatePickerBlock from "../../UI/DatePicker/DatePickerBlock";
import CustomAlertBlock from "../../UI/CustomAlert/CustomAlertBlock";
import { useQuery } from "@tanstack/react-query";
import { fetchAPIData } from "../../../util/http";

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
  const { isError, error } = useQuery({
    queryKey: ["apiData"],
    queryFn: () =>
      fetchAPIData({
        fetchURL,
        controller: controller.signal,
        sendDataToParent,
      }),
  });
  /**
   * Show Data Handler
   */
  const onShowData = async () => {
    // Return the data
    const updatedAPIURL = `${fetchURL}&date=${dateFieldRef.current.value}`;
    fetchAPIData({
      fetchURL: updatedAPIURL,
      controller: controller.signal,
      sendDataToParent,
    });
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
    <>
      <Container className="mt-3 mb-3">
        <Row xs={12}>
          <Col xs={12} lg={12}>
            <Row xs={12}>
              <Col xs={12} lg={7}>
                <DatePickerBlock
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

      {/* Show ErrorStatus via Custom Alert Component */}
      {isError && (
        <CustomAlertBlock ckey="danger" variant="danger">
          <strong>Error: </strong>
          {error.message}
        </CustomAlertBlock>
      )}
    </>
  );
};

// const InputFormBlock = block(InputForm);
const InputFormBlock = InputForm;

export default InputFormBlock;
