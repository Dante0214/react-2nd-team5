import React from "react";
import "./NewSliderCard.style.css";

import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

import { RxBookmark, RxBookmarkFilled } from "react-icons/rx";
import { useBookmark } from "../../hooks/useBookmark"; // 훅 가져오기
const NewSliderCard = ({ recipeitem }) => {
  const { isBookmarked, toggleBookmark } = useBookmark();
  const navigate = useNavigate();

  const getShortName = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const godetail = () => {
    navigate(`/recipes/${recipeitem?.RCP_NM}`);
  };

  return (
    <Row xs={1} md={2} className="g-4-newslidercard">
      <Col className="newslidercard_col_container">
        <Card className="slidercard2_url">
          <div
            style={{
              backgroundImage: `url(${recipeitem?.ATT_FILE_NO_MAIN})`,
            }}
            className="card_img_newslidercard_style"
            onClick={godetail}
          />
          <Card.Body className="newcardbody_bigcontain">
            <div className="card-body-content-newslider">
              <div className="slidercard_rcp_nm" onClick={godetail}>
                <div className="rcp-way2_size"># {recipeitem?.RCP_WAY2}</div>
                {/* <div>{recipeitem?.RCP_NM}</div> */}
                <div className="rcp-nm">
                  {getShortName(recipeitem?.RCP_NM, 13)}
                </div>
              </div>

              <div>
                {isBookmarked(recipeitem) ? (
                  <RxBookmarkFilled
                    className="bookmark-icon-inSlidercard"
                    size="2rem"
                    onClick={() => toggleBookmark(recipeitem)}
                  />
                ) : (
                  <RxBookmark
                    className="bookmark-icon-inSlidercard"
                    size="2rem"
                    onClick={() => toggleBookmark(recipeitem)}
                  />
                )}
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default NewSliderCard;
