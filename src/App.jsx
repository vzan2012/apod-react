import "./App.scss";

import { Suspense, lazy, useState } from "react";
import FooterBlock from "./components/Layout/Footer/FooterBlock";
import HeaderBlock from "./components/Layout/Header/HeaderBlock";
import LoaderBlock from "./components/UI/Loader/LoaderBlock";

const InputFormBlock = lazy(() =>
  import("./components/Apod/InputForm/InputFormBlock")
);

const PictureDayCardBlock = lazy(() =>
  import("./components/UI/PictureDayCard/PictureDayCardBlock")
);

const App = () => {
  const [pictureDayData, setPictureDayData] = useState({});
  const fetchPictureDayData = (data) => {
    setPictureDayData((prevState) => ({ ...prevState, ...data }));
  };

  return (
    <>
      <HeaderBlock />
      {/* DatePicker - Form Input  */}
      <Suspense fallback={<LoaderBlock />}>
        <InputFormBlock sendDataToParent={fetchPictureDayData} />
      </Suspense>

      {/* Conditional Render - show loader if the data is empty */}
      {Object.keys(pictureDayData).length !== 0 ? (
        <Suspense fallback={<LoaderBlock />}>
          <PictureDayCardBlock dataResponse={pictureDayData} />
        </Suspense>
      ) : (
        <LoaderBlock />
      )}

      <FooterBlock />
    </>
  );
};

export default App;
