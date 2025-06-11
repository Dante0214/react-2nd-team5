import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./CardComponent.style.css";
import { useNavigate } from "react-router-dom";
import { RxBookmark, RxBookmarkFilled } from "react-icons/rx";
import { PiBookmarkSimpleThin, PiBookmarkSimpleFill } from "react-icons/pi";

const CardComponent = ({ recipe, handleBookMark, isBookmarked }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/recipes/${recipe.RCP_NM}`);
  };
  return (
    <Col md={4} key={recipe.RCP_SEQ}>
      <Card className="card-container">
        <Card.Img
          className="recipe-card-img"
          variant="top"
          src={recipe.ATT_FILE_NO_MAIN}
          onClick={handleCardClick}
        />
        <Card.Body>
          <Row>
            <Col xs={12} sm={12} md={12} className="tag-text">
              #{recipe.RCP_PAT2} #{recipe?.RCP_WAY2}
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={9} sm={9} md={9} className="title-container">
              <div onClick={handleCardClick}>{recipe.RCP_NM}</div>
            </Col>
            <Col xs={3} sm={3} md={3} className="bookmark">
              {isBookmarked ? (
                <PiBookmarkSimpleFill
                  className="bookmark-icon"
                  size="3.2rem"
                  onClick={handleBookMark}
                />
              ) : (
                <PiBookmarkSimpleThin
                  className="bookmark-icon"
                  size="3.2rem"
                  onClick={handleBookMark}
                />
              )}
            </Col>
          </Row>
          <Row className="py-1">
            <Col xs={9} sm={9} md={9}>
              <div className="text-ellipsis" onClick={handleCardClick}>
                {recipe.RCP_NA_TIP}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardComponent;
