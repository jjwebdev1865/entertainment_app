import { Movie } from "../models/types";
import * as images from '../assets/images/images'


export const movies: Movie[] = [
  {
    favorite: true,
    id: 'anyone-but-you',
    poster: images.anyoneButYouImage,
    seen: ['2024'],
    title: 'Anyone but You'
  },
  {
    favorite: true,
    id: 'dune',
    poster: images.duneImage,
    seen: ['2024'],
    title: 'Dune'
  },
  {
    favorite: false,
    id: 'wonka',
    seen: ['2024'],
    title: 'Wonka'
  }
]