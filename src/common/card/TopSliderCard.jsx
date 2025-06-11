import React, { useState } from "react";
import "./TopSliderCard.style.css";
import { useNavigate } from "react-router-dom";
import { PiBookmarkSimpleThin, PiBookmarkSimpleFill } from "react-icons/pi";
import { useBookmark } from "../../hooks/useBookmark";

const TopSliderCard = ({ recipeitem }) => {
  const { isBookmarked, toggleBookmark } = useBookmark();
  const navigate = useNavigate();

  const godetail = () => {
    navigate(`/recipes/${recipeitem?.RCP_NM}`);
  };

  return (
    <div className="top-slider-card">
      <div
        style={{
          backgroundImage: `url(${recipeitem?.ATT_FILE_NO_MK})`,
        }}
        className="top-item-card"
        onClick={godetail}
      >
        <div className="top-item-card-overlay"></div>
        <div className="top-item-card-contents">
          <div className="top-item-card-text">
            <div className="top-item-card-tag">#{recipeitem?.RCP_PAT2} </div>
            <div className="top-item-card-des">{recipeitem?.RCP_NM}</div>
          </div>
          {isBookmarked(recipeitem) ? (
            <PiBookmarkSimpleFill
              className="bookmark-icon-card"
              size="3rem"
              color="#ffffff"
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmark(recipeitem);
              }}
            />
          ) : (
            <PiBookmarkSimpleThin
              className="bookmark-icon-card"
              size="3rem"
              color="#ffffff"
              onClick={(e) => {
                e.stopPropagation();
                toggleBookmark(recipeitem);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSliderCard;
