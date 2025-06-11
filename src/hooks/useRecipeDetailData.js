import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchRecipeDetailData = (recipeName) => {
  return api.get(`1/50/RCP_NM=${recipeName}`);
};

export const useRecipeDetailDataQuery = (recipeName) => {
  return useQuery({
    queryKey: ["recipe-detail-data", recipeName],
    queryFn: () => fetchRecipeDetailData(recipeName),
    select: (result) => result.data.COOKRCP01.row[0],
  });
};
