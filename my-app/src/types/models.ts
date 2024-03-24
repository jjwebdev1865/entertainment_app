export interface Show {
  endDate: string;
  id: string;
  poster: string;
  rating: string;
  releaseDate: string;
  seasons: number;
  seen: string[];
  title: string;
}

export interface Movie {
  favorite: boolean;
  id: string;
  seen: string[];
  title: string;
  actors: string[];
  poster: string;
  rating: 'PG' | 'PG-13' | 'R';
  releaseYear: number;
  runTime: number;
  // TODO: update to strict be 1-10
  myRating: number; // 1 - 10
};