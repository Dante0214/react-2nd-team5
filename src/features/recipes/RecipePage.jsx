import React, { useState, useMemo } from "react";
import { useRecipeDataQuery } from "../../hooks/useRecipeData";
import CardComponent from "./components/CardComponent";
import ReactPaginate from "react-paginate";
import { useBookmark } from "../../hooks/useBookmark";
import SelectMenu from "./components/SelectMenu";
import { useSearchParams } from "react-router-dom";
import LoadingLottie from "../../components/ui/LoadingLottie/LoadingLottie";

const ITEM_PER_PAGE = 12;

const RecipePage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [query] = useSearchParams();
  const [keyword, setKeyword] = useState(query.get("q") || "");
  const [title, setTitle] = useState("다양한");

  const { bookmarkedRecipes, isBookmarked, toggleBookmark } = useBookmark();
  const { data, isLoading, error } = useRecipeDataQuery();

  const handleSortClick = (sortType, newTitle) => {
    if (sort === sortType) {
      setSort("");
      setCurrentPage(0);
      setTitle("다양한");
    } else {
      setSort(sortType);
      setCurrentPage(0);
      setTitle(newTitle);
    }
  };

  const handleSelectChange = (selectedOption) => {
    setFilter(selectedOption ? selectedOption.value : "");
    setSelectValue(selectedOption ? selectedOption.value : "");
    setCurrentPage(0);
  };

  const handleReset = () => {
    setKeyword("");
    setFilter("");
    setSort("");
    setCurrentPage(0);
    setTitle("다양한");
  };

  // 필터링 및 정렬 로직을 useMemo로 최적화
  const processedRecipes = useMemo(() => {
    if (!data) return [];

    // 1. 키워드 검색
    let recipes = keyword
      ? data.filter((recipe) => recipe.RCP_NM.includes(keyword))
      : data;

    // 2. 카테고리 필터
    if (filter) {
      recipes = recipes.filter((recipe) => recipe.RCP_PAT2.includes(filter));
    }

    // 3. 정렬
    if (sort) {
      recipes = [...recipes].sort((a, b) =>
        sort === "INFO_PRO" ? b[sort] - a[sort] : a[sort] - b[sort],
      );
    }

    return recipes;
  }, [data, keyword, filter, sort]);

  // 페이지네이션 계산을 useMemo로 최적화
  const paginationData = useMemo(() => {
    const startIndex = currentPage * ITEM_PER_PAGE;
    const endIndex = startIndex + ITEM_PER_PAGE;
    return {
      recipes: processedRecipes.slice(startIndex, endIndex),
      totalPages: Math.ceil(processedRecipes.length / ITEM_PER_PAGE),
    };
  }, [processedRecipes, currentPage]);

  if (isLoading) {
    return <LoadingLottie />;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const { recipes: paginateRecipes, totalPages: totalPage } = paginationData;

  return (
    <div className="font-['Pretendard'] max-w-7xl mx-auto px-4">
      <div className="py-12 md:py-0 md:pt-12">
        <div>
          <h1 className="text-center mt-4 md:mt-0 mb-0 md:mb-8">
            {title} 한끼 만들기
          </h1>
        </div>
      </div>

      <div className="mb-2">
        <div className="text-center flex flex-col md:flex-row md:justify-center gap-2 md:gap-0">
          <button
            className="me-2 px-4 py-2 text-lg rounded-full border-2 transition-colors mb-3 md:mb-0"
            onClick={handleReset}
            style={{
              backgroundColor: sort ? "transparent" : "#ED0C0C",
              color: sort ? "#848484" : "white",
              borderColor: sort ? "#848484" : "#ED0C0C",
            }}
          >
            전체 보기
          </button>
          <button
            className="me-2 px-4 py-2 text-lg rounded-full border-2 transition-colors mb-3 md:mb-0 cursor-pointer"
            style={{
              backgroundColor: sort === "INFO_ENG" ? "#ED0C0C" : "transparent",
              color: sort === "INFO_ENG" ? "white" : "#848484",
              borderColor: sort === "INFO_ENG" ? "#ED0C0C" : "#848484",
            }}
            onClick={() => handleSortClick("INFO_ENG", "저열량")}
          >
            저열량 레시피
          </button>
          <button
            className="me-2 px-4 py-2 text-lg rounded-full border-2 transition-colors mb-3 md:mb-0"
            style={{
              backgroundColor: sort === "INFO_NA" ? "#ED0C0C" : "transparent",
              color: sort === "INFO_NA" ? "white" : "#848484",
              borderColor: sort === "INFO_NA" ? "#ED0C0C" : "#848484",
            }}
            onClick={() => handleSortClick("INFO_NA", "저염식")}
          >
            저염식 레시피
          </button>
          <button
            className="me-2 px-4 py-2 text-lg rounded-full border-2 transition-colors mb-3 md:mb-0"
            style={{
              backgroundColor: sort === "INFO_PRO" ? "#ED0C0C" : "transparent",
              color: sort === "INFO_PRO" ? "white" : "#848484",
              borderColor: sort === "INFO_PRO" ? "#ED0C0C" : "#848484",
            }}
            onClick={() => handleSortClick("INFO_PRO", "고단백")}
          >
            고단백 레시피
          </button>
        </div>
      </div>

      <div className="flex justify-end mb-3">
        <div>
          <SelectMenu
            selectValue={selectValue}
            handleSelectChange={handleSelectChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {paginateRecipes &&
          paginateRecipes.map((recipe) => (
            <CardComponent
              key={recipe.RCP_SEQ}
              recipe={recipe}
              isBookmarked={isBookmarked(recipe)}
              handleBookMark={() => toggleBookmark(recipe)}
            />
          ))}
      </div>

      <div className="mt-4">
        <div className="text-center cursor-pointer">
          <ReactPaginate
            nextLabel=">"
            onPageChange={(selected) => {
              setCurrentPage(selected.selected);
              window.scrollTo(0, 0);
            }}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            pageCount={totalPage}
            previousLabel="<"
            pageClassName="inline-block mx-1"
            pageLinkClassName="text-black border-none px-3 py-2 rounded transition-colors no-underline hover:bg-white hover:font-bold"
            previousClassName="inline-block mx-1"
            previousLinkClassName="text-black border-none px-3 py-2 rounded transition-colors no-underline hover:bg-[#ed0c0c] hover:text-white"
            nextClassName="inline-block mx-1"
            nextLinkClassName="text-black border-none px-3 py-2 rounded transition-colors no-underline hover:bg-[#ed0c0c] hover:text-white"
            breakLabel="..."
            breakClassName="inline-block mx-1"
            breakLinkClassName="text-black border-none px-3 py-2 rounded transition-colors no-underline"
            containerClassName="flex justify-center p-2.5"
            activeClassName="bg-[#ed0c0c] text-white rounded"
            renderOnZeroPageCount={null}
            forcePage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
