import "./App.scss";

import { useState } from "react";
import FooterBlock from "./components/Layout/Footer/FooterBlock";
import HeaderBlock from "./components/Layout/Header/HeaderBlock";
import PictureDayCardBlock from "./components/UI/PictureDayCard/PictureDayCardBlock";
import InputFormBlock from "./components/Apod/InputForm/InputFormBlock";

const App = () => {
  const [pictureDayData, setPictureDayData] = useState({});
  const fetchPictureDayData = (data) => {
    setPictureDayData((prevState) => ({ ...prevState, ...data }));
  };

  return (
    <>
      <HeaderBlock />
      <InputFormBlock sendDataToParent={fetchPictureDayData} />

      <PictureDayCardBlock dataResponse={pictureDayData} />
      <FooterBlock />
    </>
  );
};

export default App;
