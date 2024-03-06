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
}
