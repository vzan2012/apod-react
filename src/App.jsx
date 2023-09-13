import "./App.scss";

import { Suspense, lazy, useState } from "react";
import FooterBlock from "./components/Layout/Footer/FooterBlock";
import HeaderBlock from "./components/Layout/Header/HeaderBlock";
import LoaderBlock from "./components/UI/Loader/LoaderBlock";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { block } from "million";

const InputFormBlock = lazy(() =>
  import("./components/Apod/InputForm/InputFormBlock")
);

const PictureDayCardBlock = lazy(() =>
  import("./components/UI/PictureDayCard/PictureDayCardBlock")
);

const queryClient = new QueryClient();

const AppBlock = () => {
  let blockContent;
  const [pictureDayData, setPictureDayData] = useState({});
  const fetchPictureDayData = (data) => {
    setPictureDayData((prevState) => ({ ...prevState, ...data }));
  };

  if (Object.keys(pictureDayData).length !== 0) {
    blockContent = (
      <Suspense fallback={<LoaderBlock />}>
        <PictureDayCardBlock dataResponse={pictureDayData} />
      </Suspense>
    );
  } else {
    blockContent = <LoaderBlock />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <HeaderBlock />
      {/* DatePicker - Form Input  */}
      <Suspense fallback={<LoaderBlock />}>
        <InputFormBlock sendDataToParent={fetchPictureDayData} />
      </Suspense>

      {/* Conditional Render - show loader if the data is empty */}
      {blockContent}

      <FooterBlock />
    </QueryClientProvider>
  );
};

const App = block(AppBlock);

export default App;
