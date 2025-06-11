import React from "react";
import { useRecipeDataQuery } from "../../../../hooks/useRecipeData";
import { Alert } from "bootstrap";
import { responsive } from "../../../../constants/responsive";
import HomepageSlider from "../../../../common/Slider/HomepageSlider";
import LoadingLottie from "../../../../common/LoadingLottie/LoadingLottie";
import "./MenuSlide.style.css";
const MenuSlide = () => {
  const { data, isError, error, isLoading } = useRecipeDataQuery();
  if (isLoading) {
    return <LoadingLottie sectionHeight={"600px"} />;
  }
  if (isError) {
    return <Alert varient="danger">{error.message}</Alert>;
  }

  console.log(data);
  return (
    <div className="menuslide_title_container_main">
      <div className="menuslide_title_container">
        <div className="menuslide_title">뭘 좋아할지 몰라서 다 준비했어요!</div>
      </div>
      <HomepageSlider data={data} responsive={responsive} />
    </div>
  );
};

export default MenuSlide;
