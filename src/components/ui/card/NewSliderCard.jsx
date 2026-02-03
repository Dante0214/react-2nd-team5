import React from "react";
import { useNavigate } from "react-router-dom";
// import "./NewSliderCard.style.css"; // Tailwind 변환 - 참조용 원본 유지
import { PiBookmarkSimpleThin, PiBookmarkSimpleFill } from "react-icons/pi";
import { useBookmark } from "../../../hooks/useBookmark";

const NewSliderCard = ({ recipeitem }) => {
  const { isBookmarked, toggleBookmark } = useBookmark();
  const navigate = useNavigate();

  const getShortName = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const godetail = () => {
    navigate(`/recipes/${recipeitem?.RCP_NM.replace(/\s+/g, "")}`);
  };

  return (
    <div className="w-auto h-[300px] mb-[5px] rounded-[25px] cursor-pointer transition-all duration-500 hover:scale-105 md:w-[310px] md:h-[450px] md:mb-0 md:hover:scale-101">
      <div className="flex flex-col h-full">
        <div className="w-auto h-[300px] cursor-pointer transition-all duration-500 rounded-[25px] relative group md:w-[310px] md:h-full">
          {/* 이미지 섹션 */}
          <div
            style={{
              backgroundImage: `url(${recipeitem?.ATT_FILE_NO_MAIN})`,
            }}
            className="w-full h-[240px] rounded-t-[25px] bg-cover bg-center cursor-pointer md:w-[310px] md:h-[350px]"
            onClick={godetail}
          />

          {/* 컨텐츠 섹션 */}
          <div className="p-4 w-auto flex justify-center md:w-full">
            <div className="flex justify-between items-center w-[175px] md:w-[250px]">
              <div
                className="font-['Pretendard'] font-normal cursor-pointer flex flex-col"
                onClick={godetail}
              >
                {/* 태그 */}
                <div className="text-[12px] text-gray-600 md:text-[20px]">
                  # {recipeitem?.RCP_WAY2}
                </div>
                {/* 제목 */}
                <div className="text-[16px] font-semibold leading-none md:text-[22px] md:font-bold md:leading-[1.6]">
                  {getShortName(recipeitem?.RCP_NM, 13)}
                </div>
              </div>

              {/* 북마크 아이콘 */}
              <div className="md:flex md:items-end">
                {isBookmarked(recipeitem) ? (
                  <PiBookmarkSimpleFill
                    className="cursor-pointer text-[2.4rem]"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(recipeitem);
                    }}
                  />
                ) : (
                  <PiBookmarkSimpleThin
                    className="cursor-pointer text-[2.4rem]"
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
      </div>
    </div>
  );
};

export default NewSliderCard;
