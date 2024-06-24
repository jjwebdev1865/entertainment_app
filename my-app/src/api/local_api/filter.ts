import { movies } from '../../config/movies';
import { Movie, Show } from '../../types/models';

type ListTypes = Movie | Show;

export const getFavorites = (list: Movie[]): Movie[] => {
  const favorites = list.filter((item) => item.favorite);
  return favorites;
};

export const getRecentReviews = (list: ListTypes[]): ListTypes[] => {
  const recentReviews = list.filter((item) => item.recentlyAddedReview);
  return recentReviews;
};


export const getMovies = (): Movie[] => {
  return movies;
};
