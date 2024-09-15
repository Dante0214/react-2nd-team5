import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

import NewSliderCard from "../card/NewSliderCard";
import "./HomepageSlider.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpoon } from "@fortawesome/free-solid-svg-icons";

const HomepageSlider = ({ data, responsive }) => {
  // data가 배열이 아닌 경우 빈 배열로 설정
  const sliderData = Array.isArray(data) ? data : [];

  return (
    <div>
      {/* sliderData가 존재하고 비어 있지 않은 경우에만 Carousel 렌더링 */}
      {sliderData.length > 0 ? (
        <Carousel
          infinite={true}
          centerMode={true}
          itemClass="recipe-slider p-1"
          containerClass="carousel-container2"
          responsive={responsive}
          autoPlay={true} // 자동 재생 활성화
          autoPlaySpeed={3000}
        >
          {sliderData.map((recipeitem, index) => (
            <NewSliderCard recipeitem={recipeitem} key={index} />
          ))}
        </Carousel>
      ) : (
        // 데이터가 없을 때 표시할 내용 (필요에 따라 변경)
        <p>데이터 없음</p>
      )}
    </div>
  );
};

export default HomepageSlider;
