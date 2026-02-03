import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./TopSliderCard.style.css"; // Tailwind 변환 - 참조용 원본 유지
import { PiBookmarkSimpleThin, PiBookmarkSimpleFill } from "react-icons/pi";
import { useBookmark } from "../../../hooks/useBookmark";

const TopSliderCard = ({ recipeitem }) => {
  const { isBookmarked, toggleBookmark } = useBookmark();
  const navigate = useNavigate();

  const godetail = () => {
    navigate(`/recipes/${recipeitem?.RCP_NM.replace(/\s+/g, "")}`);
  };

  return (
    <div className="px-[10px]">
      <div
        style={{
          backgroundImage: `url(${recipeitem?.ATT_FILE_NO_MK})`,
        }}
        className="bg-center bg-cover w-full h-[430px] rounded-[25px] overflow-hidden cursor-pointer relative flex items-end md:h-[450px] md:min-h-[460px]"
        onClick={godetail}
      >
        <div className="text-[0] absolute w-full h-[50%] bottom-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-transparent"></div>
        <div className="w-full p-[30px] flex justify-between items-end gap-[20px] relative z-10">
          <div className="text-white">
            <div className="text-[18px] font-semibold text-white md:text-[20px]">
              #{recipeitem?.RCP_PAT2}{" "}
            </div>
            <div className="text-[28px] font-bold text-white leading-[1.2] md:text-[30px]">
              {recipeitem?.RCP_NM}
            </div>
          </div>
          <div className="w-[52px] h-[52px]">
            {isBookmarked(recipeitem) ? (
              <PiBookmarkSimpleFill
                className="w-full h-full text-white cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBookmark(recipeitem);
                }}
              />
            ) : (
              <PiBookmarkSimpleThin
                className="w-full h-full text-white cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBookmark(recipeitem);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSliderCard;
