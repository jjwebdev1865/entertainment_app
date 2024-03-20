export interface Movie {
  favorite: boolean;
  id: string;
  seen: string[];
  title: string;
  actors: string[];
  poster: any;
  rating: 'PG' | 'PG-13' | 'R';
  releaseYear: number;
  runTime: number;
  // TODO: update to strict be 1-10
  myRating: number; // 1 - 10
};

export interface Show {
  endDate: string;
  id: string;
  rating: string;
  releaseDate: string;
  seen: string[];
  title: string;
  seasons: number;
}
