export type ParentGuideRatings = 'PG' | 'PG-13' | 'R' | 'NR' | 'TV-PG' | 'TV-14' | 'TV-MA';
export type Genre = 'Action' | 'Comedy' | 'Sci-Fi';

export const genreList: Genre[] = ['Action', 'Comedy', 'Sci-Fi'];

export interface BaseDetails {
  id: string;
  // TODO: update to strict be 1-10
  myRating: number; // 1 - 10
  poster: string;
  rating: ParentGuideRatings;
  recentlyAddedReview: boolean;
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
  endDate: number | 'Present';
  seasons: number;
  seasonContent: SeasonContent[];
  genre: Genre;
  
}

export interface Movie extends BaseDetails{
  favorite: boolean;
  recentlyAddedReview: boolean;
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

export interface Actor {
  id: number;
  name: string;
  poster: string;
  filmography: string[]
  favoriteRole: string
  title: string;
  review?: string;
}
