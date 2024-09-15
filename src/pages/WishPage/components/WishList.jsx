import { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useBookmark } from "../../../hooks/useBookmark";
import { useNavigate } from "react-router-dom";

const Wishlist = ({ isGuest }) => {
  const { bookmarkedRecipes, toggleBookmark } = useBookmark();
  const navigate = useNavigate();

  const navigateToRecipe = (recipe) => {
    navigate(`/recipes/${recipe.RCP_NM}`);
  };

  const handleShowMore = () => {
    alert("로그인을 통해 더 많은 북마크를 만들어보세요!");
  };

  return (
    <Container className="wishlist-background">
      <Row>
        <Col className="wish-list-items" style={{ textAlign: "center" }}>
          {!isGuest ? (
            <>
              <h1>찜목록</h1>
              {bookmarkedRecipes && bookmarkedRecipes.length > 0 ? (
                <div>
                  {bookmarkedRecipes.map((recipe) => (
                    <Row
                      className="wishlist-row"
                      key={recipe.RCP_SEQ}
                      onClick={() => navigateToRecipe(recipe)}
                    >
                      <Col>
                        <Image
                          className="card-img"
                          src={recipe.ATT_FILE_NO_MAIN}
                          rounded
                        />
                      </Col>
                      <Col className="card-content-box">
                        <div className="tag-text">
                          #{recipe.RCP_PAT2} #{recipe?.RCP_WAY2}
                        </div>
                        <div className="card-content-title">{recipe.RCP_NM}</div>
                      </Col>
                      <Col className="card-btn-box">
                        <Button
                          variant="outline-secondary"
                          size="lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(recipe);
                          }}
                        >
                          삭제
                        </Button>
                      </Col>
                    </Row>
                  ))}
                </div>
              ) : (
                <p>찜한 항목이 없습니다</p>
              )}
            </>
          ) : (
            <>
              <h1>게스트의 찜목록</h1>
              {bookmarkedRecipes && bookmarkedRecipes.length > 0 ? (
                <div>
                  {bookmarkedRecipes.slice(0, 1).map((recipe) => (
                    <Row
                      className="wishlist-row"
                      key={recipe.RCP_SEQ}
                      onClick={() => navigateToRecipe(recipe)}
                    >
                      <Col>
                        <Image
                          className="card-img"
                          src={recipe.ATT_FILE_NO_MAIN}
                          rounded
                        />
                      </Col>
                      <Col className="card-content-box">
                        <div className="tag-text">
                          #{recipe.RCP_PAT2} #{recipe?.RCP_WAY2}
                        </div>
                        <div className="card-content-title">{recipe.RCP_NM}</div>
                      </Col>
                      <Col className="card-btn-box">
                        <Button
                          variant="outline-secondary"
                          size="lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(recipe);
                          }}
                        >
                          삭제
                        </Button>
                      </Col>
                    </Row>
                  ))}
                  {bookmarkedRecipes.length > 1 && (
                    <Button
                      variant="danger"
                      onClick={handleShowMore}
                      style={{ marginTop: "20px" }}
                    >
                      더보기
                    </Button>
                  )}
                </div>
              ) : (
                <p>찜한 항목이 없습니다</p>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Wishlist;
