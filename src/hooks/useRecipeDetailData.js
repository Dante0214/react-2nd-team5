// import { useQuery } from "@tanstack/react-query";
// import api from "../utils/api";

// const fetchRecipeDetailData = (recipeName) => {
//   return api.get(`1/50/RCP_NM=${recipeName}`);
// };

// export const useRecipeDetailDataQuery = (recipeName) => {
//   return useQuery({
//     queryKey: ["recipe-detail-data", recipeName],
//     queryFn: () => fetchRecipeDetailData(recipeName),
//     select: (result) => result.data.COOKRCP01.row[0],
//   });
// };
import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

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
    select: (result) => result.data.COOKRCP01.row[0],
    enabled: !!recipeName,
  });
};
