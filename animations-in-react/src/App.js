import React from "react";
import { Header } from "shared-components/header";
import { LoadableLottie } from "shared-components/loadable-lottie";
// import Lottie from "lottie-react";
// import dancingBox from "./lotties/dancing-box.json";

function App() {
  return (
    <div className="container">
     <Header />
      <div style={{width: "250px"}}>
      {/* Before Optimising */}
      {/* <Lottie animationData={dancingBox} loop={true} /> */}
      
      {/* After Optimising */}
      <LoadableLottie animationName="dancing" animationOptions={{loop: true}}/>
      </div>
    </div>
  );
}

export default App;
