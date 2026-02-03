import React from "react";
import { useRecipeDataQuery } from "../../../../hooks/useRecipeData";
import { carouselResponsive } from "../../../../config/carousel";
import HomepageSlider from "../../../../components/ui/Slider/HomepageSlider";

const MenuSlide = () => {
  const { data, isError, error } = useRecipeDataQuery();
  if (isError) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error.message}
      </div>
    );
  }

  return (
    <div className="mt-[50px] mb-[75px] p-[10px] md:mt-[80px] md:mb-[100px] md:p-0">
      <div className="flex justify-center mt-[10px] mb-[15px] md:mt-[30px] md:mb-[15px]">
        <div className="mt-[15px] text-[30px] font-bold md:mt-[50px] md:text-[36px]">
          뭘 좋아할지 몰라서 다 준비했어요!
        </div>
      </div>
      <HomepageSlider data={data} responsive={carouselResponsive} />
    </div>
  );
};

export default MenuSlide;
