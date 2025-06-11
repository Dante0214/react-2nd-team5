import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchRecipeData = () => {
  return api.get(`1/50`);
};

export const useRecipeDataQuery = () => {
  return useQuery({
    queryKey: ["recipe-data"],
    queryFn: fetchRecipeData,
    select: (result) => result.data.COOKRCP01.row,
  });
};
