import * as images from '../assets/images/tv_image';
import { Show } from '../types/models';
import * as content from './tvContent';
import * as reviews from './tvReviews';

export const shows: Show[] = [
  {
    endDate: '2020',
    id: 'arrow',
    myRating: 7,
    rating: 'TV-14',
    releaseYear: 2012,
    seen: '2024',
    title: 'Arrow',
    seasons: 8,
    poster: images.arrowImage,
    showReview: reviews.arrowReview,
    seasonContent: content.arrowContent
  },
  {
    endDate: '2016',
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
    id: 'fallout',
    myRating: 6,
    rating: 'TV-MA',
    releaseYear: 2024,
    seen: '2024',
    title: 'Fallout',
    seasons: 1,
    poster: images.falloutImage,
    seasonContent: content.falloutContent
  }
];
