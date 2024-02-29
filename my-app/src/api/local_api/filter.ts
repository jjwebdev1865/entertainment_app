import { movies } from "../../config/movies";
import { Movie } from "../../models/types";

type ListTypes = Movie

export const getFavorites = (list: ListTypes[]): ListTypes[] => {
  const favorites = list.filter(item => item.favorite)
  return favorites
}

export const getMovies = (): Movie[] => {
  return movies
}