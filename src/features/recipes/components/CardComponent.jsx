import React from "react";
import { useNavigate } from "react-router-dom";
import { PiBookmarkSimpleThin, PiBookmarkSimpleFill } from "react-icons/pi";

const CardComponent = ({ recipe, handleBookMark, isBookmarked }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/recipes/${recipe.RCP_NM.replace(/\s+/g, "")}`);
  };
  return (
    <div className="h-[31rem] cursor-pointer rounded-[20px] bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        className="w-full h-[20rem] object-cover cursor-pointer rounded-t-[20px]"
        src={recipe.ATT_FILE_NO_MAIN}
        alt={recipe.RCP_NM}
        onClick={handleCardClick}
      />
      <div className="p-4">
        <div className="text-[18px] text-[#ed0c0c] font-semibold">
          #{recipe.RCP_PAT2} #{recipe?.RCP_WAY2}
        </div>
        <div className="flex items-center justify-between mt-2">
          <div
            className="flex-1 cursor-pointer font-bold text-[26px] md:text-[23px] items-center flex"
            onClick={handleCardClick}
          >
            {recipe.RCP_NM}
          </div>
          <div className="flex items-center justify-center">
            {isBookmarked ? (
              <PiBookmarkSimpleFill
                className="cursor-pointer text-[#616161] text-[4rem]"
                onClick={handleBookMark}
              />
            ) : (
              <PiBookmarkSimpleThin
                className="cursor-pointer text-[#616161] text-[4rem]"
                onClick={handleBookMark}
              />
            )}
          </div>
        </div>
        <div className="py-1 mt-2">
          <div
            className="whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer text-gray-500"
            onClick={handleCardClick}
          >
            {recipe.RCP_NA_TIP}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
