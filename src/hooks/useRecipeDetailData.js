import { useQuery } from "@tanstack/react-query";
import api from "../lib/api";

const normalizeRecipeName = (name) =>
  decodeURIComponent(name).replace(/\s+/g, "");

const fetchRecipeDetailData = (recipeName) => {
  const normalizedName = normalizeRecipeName(recipeName);
  return api.get(`1/50/RCP_NM=${normalizedName}`);
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
    enabled: !!recipeName,
  });
};
