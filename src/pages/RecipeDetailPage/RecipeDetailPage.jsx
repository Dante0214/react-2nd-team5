import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Alert } from "react-bootstrap";
import "./RecipeDetailPage.style.css";
import { RxBookmark, RxBookmarkFilled } from "react-icons/rx";
import { PiShareNetwork } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { useRecipeDetailDataQuery } from "../../hooks/useRecipeDetailData";
import StepComponent from "./components/StepComponent";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { useBookmark } from "../../hooks/useBookmark"; // useBookmark 훅을 불러옴
import LoadingLottie from "../../common/LoadingLottie/LoadingLottie";

const RecipeDetailPage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("지금유알엘", location);
  }, [location]);

  // const bookmarkedRecipes = useSelector((state) => state.bookmark.items);
  // const dispatch = useDispatch();

  const { recipeName } = useParams();
  // const decodedRecipeName = decodeURIComponent(recipeName);
  const { data, isLoading, error } = useRecipeDetailDataQuery(recipeName);

  // useBookmark 훅을 사용하여 북마크 관련 상태와 함수 가져옴
  const { isBookmarked, toggleBookmark } = useBookmark();

  // console.log(data);
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
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const manualImg = Object.keys(data)
    .filter((key) => key.includes("MANUAL_IMG")) // "MANUAL"이 포함된 키만 필터링
    .map((key) => data[key]) // 필터링된 키의 값만 추출
    .filter((value) => value); // 빈 값("")은 제외

  const manualText = Object.keys(data)
    .filter((key) => key.includes("MANUAL0")) // "MANUAL"이 포함된 키만 필터링
    .map((key) => data[key]) // 필터링된 키의 값만 추출
    .filter((value) => value); // 빈 값("")은 제외
  // console.log("레ㅔ시피배열", manualText);

  // const isBookmarked =
  //   bookmarkedRecipes.length > 0
  //     ? bookmarkedRecipes.some((item) => item.RCP_SEQ === data.RCP_SEQ)
  //     : false;

  return (
    <div className="recipe-detail-page">
      <div className="detail-section1">
        <div className="detail-section1-wrapper">
          <div className="detail-section1-img">
            <div
              style={{
                backgroundImage: `url(${data?.ATT_FILE_NO_MK})`,
              }}
              className="detail-img"
            ></div>
          </div>
          <div className="detail-section1-text">
            <div>
              <div className="tag">
                #{data?.RCP_PAT2} #{data?.RCP_WAY2}
              </div>
              <h2 className="text-title">{data?.RCP_NM}</h2>
              <div className="text-1">
                <MdOutlineTipsAndUpdates color="#191919" size="24px" />
                Tip!
              </div>
              <div className="text-2"> {data?.RCP_NA_TIP} </div>
            </div>
            <div className="button-two">
              <div
                className={isBookmarked(data) ? "button-jjim" : "button"}
                // onClick={() => dispatch(toggleBookmark(data))}
                // useBookmark 훅에서 가져온 toggleBookmark 함수 사용
                onClick={() => toggleBookmark(data)}
              >
                찜하기
                {/* {isBookmarked ? ( */}
                {isBookmarked(data) ? ( // useBookmark 훅에서 가져온 isBookmarked 함수 사용
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
                className="button"
                onClick={() =>
                  handleCopyClipBoard(
                    `https://bejewelled-cuchufli-22921c.netlify.app${location.pathname}`
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

      <Container className="detail-section2">
        <Row className="detail-section2-info">
          <Col md="6" xs="12" className="detail-section2-info-normal">
            <div className="item-info">
              <div className="pre-title">기본재료 </div>
              <hr />
              <div className="pre">
                {arrayItem.map((item) => (
                  <div>{item}</div>
                ))}
              </div>
            </div>
          </Col>
          <Col md="6" xs="12" className="detail-section2-info-nutri">
            <div className="item-info">
              <div className="pre-title">영양성분</div>
              <hr />
              <div className="pre">
                <div className="food-info">
                  <div>
                    <div>열량</div>
                    <div>탄수화물</div>
                    <div>단백질</div>
                    <div>지방</div>
                    <div>나트륨</div>
                  </div>
                  <div className="info-box">
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
          </Col>
        </Row>

        <Row className="detail-section2-step">
          <Col>
            <div className="item-start">
              <h3 className="pre-title">만들어볼까요? </h3>
              <hr />
              <StepComponent manualImg={manualImg} manualText={manualText} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecipeDetailPage;
