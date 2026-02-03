import { useBookmark } from "../../../hooks/useBookmark";
import { useNavigate } from "react-router-dom";

const Wishlist = ({ isGuest }) => {
  const { bookmarkedRecipes, toggleBookmark } = useBookmark();
  const navigate = useNavigate();

  const navigateToRecipe = (recipe) => {
    navigate(`/recipes/${recipe.RCP_NM.replace(/\s+/g, "")}`);
  };

  const handleShowMore = () => {
    alert("로그인을 통해 더 많은 북마크를 만들어보세요!");
  };

  const visibleRecipes = isGuest
    ? bookmarkedRecipes?.slice(0, 2)
    : bookmarkedRecipes;

  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="py-10 text-center">
        <h1 className="pb-10 text-3xl font-bold">
          {isGuest ? "게스트의 찜목록" : "찜목록"}
        </h1>

        {visibleRecipes && visibleRecipes.length > 0 ? (
          <div>
            {visibleRecipes.map((recipe) => (
              <div
                key={recipe.RCP_SEQ}
                onClick={() => navigateToRecipe(recipe)}
                className="
                  mx-auto mb-4
                  flex w-[260px] flex-col
                  rounded-[20px]
                  bg-[#f8f8f8]
                  p-6
                  cursor-pointer
                  hover:bg-gray-50
                  lg:w-full lg:max-w-[70%] lg:flex-row
                "
              >
                {/* 이미지 */}
                <div className="w-full max-h-[200px] overflow-hidden rounded-[10px] lg:w-[300px] lg:h-[120px] lg:max-h-none">
                  <img
                    className="h-full w-full object-cover"
                    src={recipe.ATT_FILE_NO_MAIN}
                    alt={recipe.RCP_NM}
                  />
                </div>

                {/* 텍스트 */}
                <div className="flex flex-1 flex-col gap-1 px-4 py-4 text-center lg:py-0 lg:text-left">
                  <div className="text-sm font-semibold text-[#ed0c0c]">
                    #{recipe.RCP_PAT2} #{recipe?.RCP_WAY2}
                  </div>
                  <div className="text-lg font-semibold text-[#2a2a2a] lg:text-xl">
                    {recipe.RCP_NM}
                  </div>
                </div>

                {/* 액션 */}
                <div className="flex justify-center lg:w-[80px] lg:justify-end">
                  <button
                    className="cursor-pointer rounded border-2 border-gray-400 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(recipe);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}

            {isGuest && bookmarkedRecipes.length > 2 && (
              <button
                className="mt-6 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                onClick={handleShowMore}
              >
                더보기
              </button>
            )}
          </div>
        ) : (
          <p>찜한 항목이 없습니다</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
