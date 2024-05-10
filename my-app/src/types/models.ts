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

export interface Show extends BaseDetails {
  endDate: string;
  seasons: number;
  // Add for each eventually
  showReview?: Seasons;
}

export interface Movie extends BaseDetails{
  favorite: boolean;
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

export type ParentGuideRatings = 'PG' | 'PG-13' | 'R' | 'NR' | 'TV-PG' | 'TV-14' | 'TV-MA';
