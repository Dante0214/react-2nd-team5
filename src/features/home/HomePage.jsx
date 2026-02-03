import React, { useRef, useState, useCallback } from "react";
import MenuSlide from "./component/menuslide/MenuSlide";
import { IoSearch } from "react-icons/io5";
import TopSlide from "./component/TopSlide/TopSlide";
import { useNavigate } from "react-router-dom";
import BookmarkInfo from "./component/bookmarkslide/BookmarkInfo";
import RandomRecipe from "./component/RandomRecipe/RandomRecipe";
import { CiCircleChevUp } from "react-icons/ci";
import { useRecipeDataQuery } from "../../hooks/useRecipeData";
import LoadingLottie from "../../components/ui/LoadingLottie/LoadingLottie";

const HomePage = () => {
  const { isLoading } = useRecipeDataQuery();
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const topRef = useRef(null);

  const searchByKeyword = useCallback(
    (e) => {
      e.preventDefault();
      navigate(`recipes?q=${keyword}`);
      setKeyword("");
    },
    [keyword, navigate],
  );

  const scrollToTop = useCallback(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingLottie />
      </div>
    );
  }

  return (
    <div className="font-['Pretendard']" ref={topRef}>
      {/* Top Search Area */}
      <div className="min-h-[180px] md:min-h-[360px] flex justify-center items-center relative">
        <div className="text-[0] absolute w-full h-full -z-10 md:bg-[url('/src/common/assets/bg_img01.jpg')] md:bg-no-repeat md:bg-center md:bg-cover" />

        <div className="w-4/5 max-w-[650px] flex flex-col md:flex-row justify-between items-center p-0 gap-5 md:gap-0 md:-mt-4">
          <div className="text-[34px] md:text-[35px] font-bold text-[#303030] leading-tight md:leading-normal text-center md:text-left">
            냉장고 속 재료로
            <br /> 레시피를 검색하세요!
          </div>

          <div className="bg-white w-[260px] border-3 border-[#ed0c0c] rounded-[30px] p-1.5 md:mr-1 cursor-pointer">
            <form className="flex" onSubmit={searchByKeyword}>
              <input
                type="text"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                className="text-2xl border-none w-[185px] ml-2.5 outline-none"
              />
              <button className="border-none bg-transparent pr-5" type="submit">
                <IoSearch size="26px" color="#ed0c0c" className="mb-1 mr-3" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Top Slide Area */}
      <div className="top-slide-area">
        <TopSlide />
      </div>

      {/* Main Content */}
      <div>
        <div className="mt-[15px] md:mt-[23px]">
          <MenuSlide />
        </div>
        <RandomRecipe />
        <BookmarkInfo />
      </div>

      {/* Scroll to Top Button */}
      <div className="flex justify-end mr-2.5">
        <div onClick={scrollToTop} className="cursor-pointer">
          <CiCircleChevUp
            size={65}
            color="#ed0c0c"
            className="mb-5 mr-4 md:w-[65px] md:h-[65px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
