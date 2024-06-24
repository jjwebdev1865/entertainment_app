import * as images from '../assets/images/tv_image';
import { Show } from '../types/models';
import * as content from './tvContent';

export const shows: Show[] = [
  {
    endDate: 2020,
    genre: 'Action',
    id: 'arrow',
    myRating: 7,
    rating: 'TV-14',
    recentlyAddedReview: false,
    releaseYear: 2012,
    seen: '2024',
    title: 'Arrow',
    seasons: 8,
    poster: images.arrowImage,
    seasonContent: content.arrowContent
  },
  {
    endDate: 2016,
    genre: 'Comedy',
    id: 'castle',
    myRating: 10,
    rating: 'TV-14',
    recentlyAddedReview: false, 
    releaseYear: 2009,
    seen: '2024',
    title: 'Castle',
    seasons: 8,
    poster: images.castleImage,
    seasonContent: content.castleContent
  },
  {
    endDate: 'Present',
    genre: 'Sci-Fi',
    id: 'fallout',
    myRating: 6,
    rating: 'TV-MA',
    recentlyAddedReview: false, 
    releaseYear: 2024,
    seen: '2024',
    title: 'Fallout',
    seasons: 10,
    poster: images.falloutImage,
    seasonContent: content.falloutContent
  },
  {
    endDate: 2023,
    genre: 'Action',
    id: 'the-flash',
    myRating: 7,
    rating: 'TV-PG',
    recentlyAddedReview: false, 
    releaseYear: 2014,
    seen: '2024',
    title: 'Flash',
    seasons: 10,
    poster: images.flashImage,
    seasonContent: content.flashContent
  },
  {
    endDate: 2015,
    genre: 'Comedy',
    id: 'parenthood',
    myRating: 6.5,
    rating: 'TV-PG',
    recentlyAddedReview: true, // 1
    releaseYear: 2010,
    seen: '2024',
    title: 'Parenthood',
    seasons: 6,
    poster: images.parenthoodImage,
    seasonContent: content.parenthoodContent
  },
  {
    endDate: 'Present',
    genre: 'Comedy',
    id: 'shoresy',
    myRating: 9.5,
    rating: 'TV-MA',
    recentlyAddedReview: false, 
    releaseYear: 2002022,
    seen: '2024',
    title: 'Shoresy',
    seasons: 3,
    poster: images.shoresyImage,
    seasonContent: content.shoresyContent
  },
  {
    endDate: 2017,
    genre: 'Sci-Fi',
    id: 'smallville',
    myRating: 8,
    rating: 'TV-PG',
    recentlyAddedReview: false, 
    releaseYear: 2001,
    seen: '2024',
    title: 'Smallville',
    seasons: 4,
    poster: images.smallvilleImage,
    seasonContent: content.smallvilleContent
  }
];
