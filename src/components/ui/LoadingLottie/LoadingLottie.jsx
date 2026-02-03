import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "./assets/LoadingLottie_x2.json";

const LoadingLottie = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Lottie
        animationData={loadingAnimation}
        loop
        autoplay
        style={{ width: 140, height: 140 }} // 크기를 살짝 키워도 좋겠네요!
      />
      <p className="mt-2 text-lg font-semibold text-orange-500">
        맛있는 데이터를 불러오는 중... 👨‍🍳
      </p>
    </div>
  );
};

export default LoadingLottie;
