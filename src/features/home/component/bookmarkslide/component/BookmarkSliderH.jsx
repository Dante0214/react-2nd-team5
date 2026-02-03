import React from "react";
import BookmarkCardList from "./BookmarkCardList";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselResponsive } from "../../../../../config/carousel";
import NoFindPage from "../../../../../components/ui/NoFindPage/NoFindPage";
import BookmarkNotSliderCard from "./BookmarkNotSliderCard";
import "./Bookmarkcomponent.Style.css";

const BookmarkSliderH = ({ guestBookmarks }) => {
  const hasData = Array.isArray(guestBookmarks) && guestBookmarks.length > 0;

  return (
    <div>
      {hasData ? (
        guestBookmarks.length > 4 ? (
          <Carousel
            infinite={true}
            centerMode={true}
            itemClass="recipe-slider p-1"
            containerClass="carousel-container2"
            responsive={carouselResponsive}
          >
            {guestBookmarks.map((guestmark, index) => (
              <BookmarkCardList guestBookmarks={guestmark} key={index} />
            ))}
          </Carousel>
        ) : (
          <div className="bookmark-card-container card_list max-w-7xl mx-auto px-4 flex gap-4">
            {guestBookmarks.map((guestmark, index) => (
              <BookmarkNotSliderCard guestBookmarks={guestmark} key={index} />
            ))}
          </div>
        )
      ) : (
        <p>
          <NoFindPage />
        </p>
      )}
    </div>
  );
};

export default BookmarkSliderH;
