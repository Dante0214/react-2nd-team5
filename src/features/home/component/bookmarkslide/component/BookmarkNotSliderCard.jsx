import React from "react";
import { useNavigate } from "react-router-dom";
import "./Bookmarkcomponent.Style.css";

const BookmarkNotSliderCard = (guestBookmarks, key) => {
  const navigate = useNavigate();
  const godetail = () => {
    navigate(`/recipes/${guestBookmarks?.guestBookmarks?.RCP_NM}`);
  };

  return (
    <div className="bookmarknotslidercard_container">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="slidercard_url_notslidercard">
              <img
                className="card_img_booknotslidercard w-full h-48 object-cover cursor-pointer"
                src={guestBookmarks?.guestBookmarks?.ATT_FILE_NO_MAIN}
                alt={guestBookmarks?.guestBookmarks?.RCP_NM}
                onClick={godetail}
              />
              <div className="p-4">
                <div className="card-body-content">
                  <div
                    className="slidercard_rcp_nm cursor-pointer"
                    onClick={godetail}
                  >
                    <div className="not_bookmark_recipeitem text-sm text-gray-600">
                      # {guestBookmarks?.guestBookmarks?.RCP_WAY2}
                    </div>
                    <div className="not_bookmark_nm text-lg font-semibold">
                      {guestBookmarks?.guestBookmarks?.RCP_NM}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkNotSliderCard;
