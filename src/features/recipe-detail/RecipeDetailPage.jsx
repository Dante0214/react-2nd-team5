import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RxBookmark, RxBookmarkFilled } from "react-icons/rx";
import { PiShareNetwork } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { useRecipeDetailDataQuery } from "../../hooks/useRecipeDetailData";
import StepComponent from "./components/StepComponent";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { useBookmark } from "../../hooks/useBookmark";
import LoadingLottie from "../../components/ui/LoadingLottie/LoadingLottie";

const RecipeDetailPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("지금유알엘", location);
  }, [location]);

  const { recipeName } = useParams();
  const { data, isLoading, error } = useRecipeDetailDataQuery(recipeName);
  const { isBookmarked, toggleBookmark } = useBookmark();

  const preItem = `${data?.RCP_PARTS_DTLS}`;
  const arrayItem = preItem.split(",");

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <LoadingLottie sectionHeight={"100vh"} />;
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        {error.message}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold text-gray-700">
          레시피를 찾을 수 없습니다.
        </h2>
        <p className="text-gray-500 mt-2">요청하신 레시피 정보가 없습니다.</p>
      </div>
    );
  }

  const manualImg = Object.keys(data)
    .filter((key) => key.includes("MANUAL_IMG"))
    .map((key) => data[key])
    .filter((value) => value);

  const manualText = Object.keys(data)
    .filter((key) => key.includes("MANUAL0"))
    .map((key) => data[key])
    .filter((value) => value);

  return (
    <div className="py-0 md:py-20 font-['Pretendard']">
      {/* Section 1: 이미지 및 기본 정보 */}
      <div className="detail-section1">
        <div className="max-w-[1320px] mx-auto px-0 md:px-4 flex flex-col md:flex-row gap-5">
          {/* 레시피 이미지 */}
          <div className="w-full">
            <div
              style={{
                backgroundImage: `url(${data?.ATT_FILE_NO_MK})`,
              }}
              className="w-full min-h-[380px] bg-cover bg-center rounded-none md:rounded-3xl"
            />
          </div>

          {/* 레시피 텍스트 정보 */}
          <div className="w-full mt-0 md:mt-7 ml-0 md:ml-5 px-4 md:px-0 flex flex-col justify-center max-w-full md:max-w-[540px] mx-auto">
            <div>
              <div className="text-[#ed0c0c] font-bold text-xl">
                #{data?.RCP_PAT2} #{data?.RCP_WAY2}
              </div>
              <h2 className="text-[33px] font-bold text-[#191919] mt-2">
                {data?.RCP_NM}
              </h2>
              <div className="text-base font-bold text-[#191919] mt-5 flex items-center gap-1">
                <MdOutlineTipsAndUpdates color="#191919" size="24px" />
                Tip!
              </div>
              <div className="w-full text-base text-[#6a6a6a] mb-5">
                {data?.RCP_NA_TIP}
              </div>
            </div>

            {/* 찜하기 / URL복사 버튼 */}
            <div className="flex gap-2.5">
              <div
                className={`mt-12 border ${isBookmarked(data) ? "border-[#ed0c0c] text-[#ed0c0c]" : "border-[#616161] text-[#616161]"} w-1/2 max-w-[320px] h-[54px] rounded-md font-semibold text-lg flex items-center justify-center cursor-pointer`}
                onClick={() => toggleBookmark(data)}
              >
                찜하기
                {isBookmarked(data) ? (
                  <RxBookmarkFilled
                    className="ms-1"
                    size="25px"
                    color="#ED0C0C"
                  />
                ) : (
                  <RxBookmark className="ms-1" size="25px" color="#616161" />
                )}
              </div>
              <div
                className="mt-12 border border-[#616161] w-1/2 max-w-[320px] h-[54px] rounded-md text-[#616161] font-semibold text-lg flex items-center justify-center cursor-pointer"
                onClick={() =>
                  handleCopyClipBoard(
                    `https://bejewelled-cuchufli-22921c.netlify.app${location.pathname}`,
                  )
                }
              >
                URL복사하기
                <PiShareNetwork className="ms-1" size="25px" color="#616161" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: 재료 및 영양성분 */}
      <div className="mt-20 md:mt-25 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* 기본 재료 */}
          <div>
            <div className="bg-[#f6f6f6] rounded-2xl p-6">
              <div className="text-2xl font-bold">기본재료</div>
              <hr className="bg-[rgb(144,144,144)] h-px border-0 my-3" />
              <div className="text-lg">
                {arrayItem.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          </div>

          {/* 영양성분 */}
          <div>
            <div className="bg-[#f6f6f6] rounded-2xl p-6">
              <div className="text-2xl font-bold">영양성분</div>
              <hr className="bg-[rgb(144,144,144)] h-px border-0 my-3" />
              <div className="text-lg">
                <div className="flex justify-between">
                  <div>
                    <div>열량</div>
                    <div>탄수화물</div>
                    <div>단백질</div>
                    <div>지방</div>
                    <div>나트륨</div>
                  </div>
                  <div className="flex flex-col justify-center items-end">
                    <div>
                      <b>{data?.INFO_ENG}</b> kcal
                    </div>
                    <div>
                      <b>{data?.INFO_CAR}</b> g
                    </div>
                    <div>
                      <b>{data?.INFO_PRO}</b> g
                    </div>
                    <div>
                      <b>{data?.INFO_FAT}</b> g
                    </div>
                    <div>
                      <b>{data?.INFO_NA}</b> mg
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: 조리 단계 */}
        <div className="mt-20">
          <div>
            <div>
              <h3 className="text-2xl font-bold">만들어볼까요?</h3>
              <hr className="bg-[rgb(144,144,144)] h-px border-0 my-3" />
              <StepComponent manualImg={manualImg} manualText={manualText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
