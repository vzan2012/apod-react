import "./App.scss";

import { useState } from "react";
import FooterBlock from "./components/Layout/Footer/FooterBlock";
import HeaderBlock from "./components/Layout/Header/HeaderBlock";
import PictureDayCardBlock from "./components/UI/PictureDayCard/PictureDayCardBlock";
import InputFormBlock from "./components/Apod/InputForm/InputFormBlock";
import LoaderBlock from "./components/UI/Loader/LoaderBlock";

const App = () => {
  const [pictureDayData, setPictureDayData] = useState({});
  const fetchPictureDayData = (data) => {
    setPictureDayData((prevState) => ({ ...prevState, ...data }));
  };

  return (
    <>
      <HeaderBlock />
      <InputFormBlock sendDataToParent={fetchPictureDayData} />

      {/* Conditional Render - show loader if the data is empty */}
      {Object.keys(pictureDayData).length !== 0 ? (
        <PictureDayCardBlock dataResponse={pictureDayData} />
      ) : (
        <LoaderBlock />
      )}

      <FooterBlock />
    </>
  );
};

export default App;
