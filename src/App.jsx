import "./App.scss";

import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import InputForm from "./components/Apod/InputForm/InputForm";
import PictureDayCard from "./components/UI/PictureDayCard/PictureDayCard";
import { useState } from "react";

const App = () => {
  const [pictureDayData, setPictureDayData] = useState({});
  const fetchPictureDayData = (data) => {
    setPictureDayData((prevState) => ({ ...prevState, ...data }));
  };

  return (
    <>
      <Header />
      <InputForm sendDataToParent={fetchPictureDayData} />

      <PictureDayCard dataResponse={pictureDayData} />
      <Footer />
    </>
  );
};

export default App;
