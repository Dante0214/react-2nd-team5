import React from "react";
import { useRecipeDataQuery } from "../../../../hooks/useRecipeData";
import { topCarouselResponsive } from "../../../../config/carousel";
import HomePageTopSlider from "../../../../components/ui/Slider/HomePageTopSlider";

const TopSlide = () => {
  const { data, isError, error } = useRecipeDataQuery();
  if (isError) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error.message}
      </div>
    );
  }

  return (
    <HomePageTopSlider data={data} responsiveTop={topCarouselResponsive} />
  );
};

export default TopSlide;
