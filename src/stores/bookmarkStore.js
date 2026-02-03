import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * 북마크 스토어
 * 게스트와 로그인 사용자의 북마크를 분리 관리
 * 로컬스토리지에 자동 저장
 */
export const useBookmarkStore = create(
  persist(
    (set) => ({
      guestBookmarks: [],
      userBookmarks: {},

      /**
       * 게스트 북마크 토글
       * @param {Object} recipe - 레시피 객체
       */
      toggleGuestBookmark: (recipe) =>
        set((state) => {
          const index = state.guestBookmarks.findIndex(
            (item) => item.RCP_SEQ === recipe.RCP_SEQ,
          );

          if (index !== -1) {
            return {
              guestBookmarks: state.guestBookmarks.filter(
                (_, i) => i !== index,
              ),
            };
          }
          return {
            guestBookmarks: [...state.guestBookmarks, recipe],
          };
        }),

      /**
       * 로그인 사용자 북마크 토글
       * @param {string} userId - 사용자 ID
       * @param {Object} recipe - 레시피 객체
       */
      toggleUserBookmark: (userId, recipe) =>
        set((state) => {
          const userBookmarks = state.userBookmarks[userId] || [];
          const index = userBookmarks.findIndex(
            (item) => item.RCP_SEQ === recipe.RCP_SEQ,
          );

          if (index !== -1) {
            return {
              userBookmarks: {
                ...state.userBookmarks,
                [userId]: userBookmarks.filter((_, i) => i !== index),
              },
            };
          }
          return {
            userBookmarks: {
              ...state.userBookmarks,
              [userId]: [...userBookmarks, recipe],
            },
          };
        }),
    }),
    {
      name: "bookmark-storage", // 로컬스토리지 키 이름
    },
  ),
);
