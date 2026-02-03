import React from "react";
import { useAuthStore } from "../../../../stores/authStore";
import { useBookmarkStore } from "../../../../stores/bookmarkStore";
import BookmarkSliderH from "./component/BookmarkSliderH";
import NoFindPage from "../../../../components/ui/NoFindPage/NoFindPage";
import { useRecipeDataQuery } from "../../../../hooks/useRecipeData";

const BookmarkInfo = () => {
  const { data: fornothing } = useRecipeDataQuery();
  const { user } = useAuthStore();
  const { guestBookmarks, userBookmarks } = useBookmarkStore();

  const userSpecificBookmarks = user?.id ? userBookmarks[user.id] : [];

  if (!fornothing) {
    return null;
  }

  return (
    <div className="mt-[60px] mb-[80px]">
      <div className="font-bold text-center p-5 text-[36px] max-md:text-[30px] max-md:mt-[30px] max-md:mb-[15px]">
        {user ? `${user.userId}님의 찜목록!` : "내가 찜한 요리!"}
      </div>
      <div>
        {user ? (
          <BookmarkSliderH guestBookmarks={userSpecificBookmarks} />
        ) : (
          <NoFindPage user={user} />
        )}
      </div>
    </div>
  );
};

export default BookmarkInfo;
