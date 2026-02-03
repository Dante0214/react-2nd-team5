import React from "react";
import { PuffLoader } from "react-spinners";

const LoadingLottie = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <PuffLoader color="#ed0c0c" size={100} />
    </div>
  );
};

export default LoadingLottie;
