import React from "react";
import loadable from "@loadable/component";

const Lottie = loadable(() => import("lottie-react"));

const availableAnimations = {
  dancing: loadable.lib(() => import("lotties/dancing-box.json")),
};

export const LoadableLottie = ({animationName, animationOptions}) => {
  const {loop} = animationOptions;
  const AnimationData = availableAnimations[animationName];
  return (
    <AnimationData>
      {(data) => <Lottie animationData={data.default ?? data} loop={loop} />}
    </AnimationData>
  );
};
