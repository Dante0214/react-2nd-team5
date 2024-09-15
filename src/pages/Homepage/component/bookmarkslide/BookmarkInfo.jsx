import React from "react";
import { useSelector } from "react-redux";
import BookmarkSliderH from "./component/BookmarkSliderH";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faSpoon } from "@fortawesome/free-solid-svg-icons";
import "./BookmarkInfo.style.css";
import NoFindPage from "../../../../common/nofindpage/NoFindPage";
import { useRecipeDataQuery } from "../../../../hooks/useRecipeData";
const BookmarkInfo = () => {
  const { data: fornothing } = useRecipeDataQuery();
  const user = useSelector((state) => state.auth.user);
  const guestBookmarks = useSelector((state) => state.bookmark.guestBookmarks);
  const userBookmarks = useSelector(
    (state) => state.bookmark.userBookmarks[user?.id]
  );
  if (!fornothing) {
    return null;
  }

  return (
    <div>
      <div dispatchEvent className="bookmarkinfo">
        {user ? `${user.userId}님의 찜목록!` : "내가 찜한 요리!"}
      </div>
      <div>
        {user ? (
          <BookmarkSliderH guestBookmarks={userBookmarks} />
        ) : (
          <NoFindPage user={user} />
        )}
      </div>
    </div>
  );
};

export default BookmarkInfo;
