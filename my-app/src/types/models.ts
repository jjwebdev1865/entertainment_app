export type ParentGuideRatings = 'PG' | 'PG-13' | 'R' | 'NR' | 'TV-PG' | 'TV-14' | 'TV-MA';
export type Genre = 'Action' | 'Adventure' | 'Crime' | 'Drama' | 'Mystery' | 'Sci-Fi' | 'Comedy' | 'Romance' | 'War'

export interface BaseDetails {
  id: string;
  // TODO: update to strict be 1-10
  myRating: number; // 1 - 10
  poster: string;
  rating: ParentGuideRatings;
  seen: string;
  title: string;
  releaseYear: number;
}

export interface SeasonContent {
  season: number,
  actors: string[]
  review: string;
}

export interface Show extends BaseDetails {
  endDate: string;
  seasons: number;
  seasonContent: SeasonContent[];
  genres: Genre[];
}

export interface Movie extends BaseDetails{
  favorite: boolean;
  genre: Genre;
  actors: string[];
  runTime: number;
  review: string;
}

export interface Seasons {
  seasonOne: ShowReview;
}

export interface ShowReview {
  bestCharacter: string;
  worstCharacter: string;
}
