import { useQuery } from "@tanstack/react-query";
import api from "../lib/api";

const fetchslidermenu = () => {
  return api.get("1/15");
};

export const useSliderMenu = () => {
  useQuery({
    queryKey: ["menuslide"],
    queryFn: fetchslidermenu,
  });
};
