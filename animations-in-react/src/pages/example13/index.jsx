import React from "react";
import { Fragment } from "react";
import { LoadableLottie } from "shared-components/loadable-lottie";
// import Lottie from "lottie-react";
// import dancingBox from "./lotties/dancing-box.json";

const Example13 = () => {
  return (
    <Fragment>
      <h1 className="page-title"> Animations using Lottie Files </h1>
      <div className="wrapper d-flex justify-content-center mt-5">
        <div style={{ width: "250px" }}>
          {/* Before Optimising */}
          {/* <Lottie animationData={dancingBox} loop={true} /> */}

          {/* After Optimising */}
          <LoadableLottie
            animationName="dancing"
            animationOptions={{ loop: true }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Example13;
