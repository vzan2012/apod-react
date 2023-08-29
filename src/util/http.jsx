import axios from "axios";

// Fetch API Data from URL
export const fetchAPIData = ({ fetchURL, controller, sendDataToParent }) => {
  return axios
    .get(fetchURL, {
      signal: controller,
    })
    .then((response) => {
      sendDataToParent(response.data);

      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
