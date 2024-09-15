import React, { useState } from "react";
import "./TopSliderCard.style.css";
import { useNavigate } from "react-router-dom";
import { PiBookmarkSimpleThin, PiBookmarkSimpleFill } from "react-icons/pi";

const TopSliderCard = ({ recipeitem, key }) => {
  const navigate = useNavigate();
  const [bookmarkStates, setBookmarkStates] = useState({});

  const beBookmarked = bookmarkStates[key] || false;

  const godetail = () => {
    navigate(`/recipes/${recipeitem?.RCP_NM}`);
  };

  // 토글
  const handleToggleBookmark = (event) => {
    event.stopPropagation();
    setBookmarkStates((prevStates) => {
      const newState = { ...prevStates };
      newState[key] = !newState[key];
      return newState;
    });
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
          {beBookmarked ? (
            <PiBookmarkSimpleFill
              className="bookmark-icon-card"
              size="3rem"
              color="#ffffff"
              onClick={handleToggleBookmark}
            />
          ) : (
            <PiBookmarkSimpleThin
              className="bookmark-icon-card"
              size="3rem"
              color="#ffffff"
              onClick={handleToggleBookmark}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSliderCard;
