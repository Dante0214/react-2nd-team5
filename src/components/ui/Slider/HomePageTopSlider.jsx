import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from "react";
import TopSliderCard from "../card/TopSliderCard";

const HomePageTopSlider = ({ data, responsiveTop }) => {
  // data가 배열이 아닌 경우 빈 배열로 설정
  const sliderData = Array.isArray(data) ? data : [];

  // centerMode 제어위해 추가한 부분
  const [centerMode, setCenterMode] = useState(false);

  useEffect(() => {
    const updateCenterMode = () => {
      if (window.innerWidth < 520) {
        setCenterMode(false); // 모바일에서는 centerMode 비활성화
      } else {
        setCenterMode(true); // 태블릿, PC에서는 centerMode 활성화
      }
    };

    updateCenterMode();
    window.addEventListener("resize", updateCenterMode);

    return () => {
      window.removeEventListener("resize", updateCenterMode);
    };
  }, []);

  return (
    <div className="home-page-top-slider">
      {/* sliderData가 존재하고 비어 있지 않은 경우에만 Carousel 렌더링 */}
      {sliderData.length > 0 ? (
        <Carousel
          infinite={true}
          itemClass="carousel-container2-item"
          containerClass="carousel-container2"
          centerMode={centerMode} // 반응형으로 centerMode 제어
          responsive={responsiveTop}
          autoPlay={true} // 자동 재생 활성화
          autoPlaySpeed={4500}
          showDots={true}
          ssr={true}
          renderDotsOutside={true}
        >
          {sliderData.map((recipeitem, index) => (
            <TopSliderCard recipeitem={recipeitem} key={index} />
          ))}
        </Carousel>
      ) : (
        // 데이터가 없을 때 표시할 내용 (필요에 따라 변경)
        <p>데이터 없음</p>
      )}
    </div>
  );
};

export default HomePageTopSlider;
