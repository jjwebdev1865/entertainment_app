export interface Show {
  endDate: string;
  id: string;
  poster: string;
  rating: string;
  releaseDate: string;
  seasons: number;
  seen: string[];
  title: string;
  // Add for each eventually
  showReview?: Seasons;
}

export interface Seasons {
  seasonOne: ShowReview;
}

export interface ShowReview {
  bestCharacter: string;
  worstCharacter: string;
}

export type ParentGuideRatings = 'PG' | 'PG-13' | 'R' | 'NR' | 'TV-PG';

export interface Movie {
  favorite: boolean;
  id: string;
  seen: string;
  title: string;
  actors: string[];
  poster: string;
  rating: ParentGuideRatings;
  releaseYear: number;
  runTime: number;
  // TODO: update to strict be 1-10
  myRating: number; // 1 - 10
  review: string;
}
