import * as images from '../assets/images/tv_image';
import { Show } from '../types/models';
import * as content from './tvContent';

export const shows: Show[] = [
  {
    endDate: '2020',
    genres: ['Action', 'Adventure', 'Crime', 'Drama', 'Mystery', 'Sci-Fi'],
    id: 'arrow',
    myRating: 7,
    rating: 'TV-14',
    releaseYear: 2012,
    seen: '2024',
    title: 'Arrow',
    seasons: 8,
    poster: images.arrowImage,
    seasonContent: content.arrowContent
  },
  {
    endDate: '2016',
    genres: ['Comedy', 'Crime', 'Drama', 'Mystery', 'Romance'],
    id: 'castle',
    myRating: 10,
    rating: 'TV-14',
    releaseYear: 2009,
    seen: '2024',
    title: 'Castle',
    seasons: 8,
    poster: images.castleImage,
    seasonContent: content.castleContent
  },
  {
    endDate: 'Present',
    genres: ['Action', 'Adventure', 'Drama', 'Sci-Fi', 'War'],
    id: 'fallout',
    myRating: 6,
    rating: 'TV-MA',
    releaseYear: 2024,
    seen: '2024',
    title: 'Fallout',
    seasons: 10,
    poster: images.falloutImage,
    seasonContent: content.falloutContent
  },
  {
    endDate: '2017',
    genres: ['Action', 'Adventure', 'Drama', 'Sci-Fi', 'War'],
    id: 'smallville',
    myRating: 8,
    rating: 'TV-PG',
    releaseYear: 2001,
    seen: '2024',
    title: 'Smallville',
    seasons: 1,
    poster: images.smallvilleImage,
    seasonContent: content.smallvilleContent
  }
];
