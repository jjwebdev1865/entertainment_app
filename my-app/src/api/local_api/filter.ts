import { Movie } from "../../models/types";

type ListTypes = Movie

export const getFavorites = (list: any[]): ListTypes[] => {
  const favorites = list.filter(item => item.favorite)
  return favorites
}