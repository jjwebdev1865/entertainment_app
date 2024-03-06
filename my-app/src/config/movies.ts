import { Movie } from "../models/types";
import * as images from '../assets/images/images';


export const movies: Movie[] = [
  {
    favorite: true,
    id: 'anyone-but-you',
    seen: ['2024'],
    title: 'Anyone but You',
    actors: ['Glen Powell', 'Sydney Sweeney'],
    poster: images.anyoneButYouImage,
    rating: 'R',
    releaseYear: 2023,
    runTime: 103
  },
  {
    favorite: false,
    id: 'aquaman-and-the-lost-kingdom',
    seen: ['2024'],
    title: 'Aquaman and the lost kingdom',
    actors: ['Jason Momoa', 'Patrick Wilson'],
    poster: images.aquaman_two,
    rating: 'PG-13',
    releaseYear: 2023,
    runTime: 124
  },
  {
    favorite: false,
    id: 'dune',
    seen: ['2024'],
    title: 'Dune',
    actors: ['Timothée Chalamet', 'Zendaya'],
    poster: images.duneImage,
    rating: 'PG-13',
    releaseYear: 2021,
    runTime: 155
  },
  {
    favorite: false,
    id: 'wonka',
    seen: ['2024'],
    title: 'Wonka',
    actors: ['Timothée Chalamet', 'Gustave Die'],
    poster: images.wonkaImage,
    rating: 'PG',
    releaseYear: 2023,
    runTime: 116
  }
];