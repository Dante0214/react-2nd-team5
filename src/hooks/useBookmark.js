import { useCallback } from "react";
import { useAuthStore } from "../stores/authStore";
import { useBookmarkStore } from "../stores/bookmarkStore";

/**
 * 북마크 관리 훅
 * 게스트/로그인 사용자 분리하여 북마크 관리
 */
export const useBookmark = () => {
  const { isLoggedIn, user } = useAuthStore();
  const {
    guestBookmarks,
    userBookmarks,
    toggleGuestBookmark,
    toggleUserBookmark,
  } = useBookmarkStore();

  const bookmarkedRecipes =
    isLoggedIn && user ? userBookmarks[user.id] || [] : guestBookmarks;

  const toggleBookmark = useCallback(
    (recipe) => {
      if (isLoggedIn && user) {
        toggleUserBookmark(user.id, recipe);
      } else {
        toggleGuestBookmark(recipe);
      }
    },
    [isLoggedIn, user, toggleUserBookmark, toggleGuestBookmark],
  );

  const isBookmarked = useCallback(
    (recipe) => {
      return bookmarkedRecipes.some((item) => item.RCP_SEQ === recipe.RCP_SEQ);
    },
    [bookmarkedRecipes],
  );

  return {
    bookmarkedRecipes,
    toggleBookmark,
    isBookmarked,
  };
};
