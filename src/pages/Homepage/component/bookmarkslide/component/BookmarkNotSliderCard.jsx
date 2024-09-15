import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Bookmarkcomponent.Style.css";
const BookmarkNotSliderCard = (guestBookmarks, key) => {
  console.log("무지", guestBookmarks);
  const navigate = useNavigate();
  const godetail = () => {
    navigate(`/recipes/${guestBookmarks?.guestBookmarks?.RCP_NM}`);
  };

  return (
    <div className="bookmarknotslidercard_container">
      <div>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card className="slidercard_url_notslidercard">
              <Card.Img
                variant="top"
                src={guestBookmarks?.guestBookmarks?.ATT_FILE_NO_MAIN}
                className="card_img_booknotslidercard"
                onClick={godetail}
              />
              <Card.Body>
                <div className="card-body-content">
                  <div className="slidercard_rcp_nm" onClick={godetail}>
                    <div className="not_bookmark_recipeitem">
                      # {guestBookmarks?.guestBookmarks?.RCP_WAY2}
                    </div>
                    <div className="not_bookmark_nm">
                      {guestBookmarks?.guestBookmarks?.RCP_NM}
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BookmarkNotSliderCard;
