import { useQuery } from "@tanstack/react-query";
import api from "../lib/api";

const fetchRecipeDetailData = (recipeName) => {
  return api.get(`1/50/RCP_NM=${recipeName}`);
};

export const useRecipeDetailDataQuery = (recipeName) => {
  return useQuery({
    queryKey: ["recipe-detail-data", recipeName],
    queryFn: () => fetchRecipeDetailData(recipeName),
    select: (result) => {
      // 데이터 구조가 예상과 다르거나 row가 없을 경우 안전하게 처리
      const rows = result?.data?.COOKRCP01?.row;
      return rows && rows.length > 0 ? rows[0] : null;
    },
  });
};
