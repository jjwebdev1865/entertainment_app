import * as images from '../assets/images/tv_image';
import { Show } from '../types/models';
import * as reviews from './tvReviews';

export const shows: Show[] = [
  {
    endDate: '2020',
    id: 'arrow',
    rating: 'TV-14',
    releaseDate: '2012',
    seen: ['2024'],
    title: 'Arrow',
    seasons: 8,
    poster: images.arrowImage,
    showReview: reviews.arrowReview,
  },
  {
    endDate: '2016',
    id: 'castle',
    rating: 'TV-14',
    releaseDate: '2009',
    seen: ['2023', '2024'],
    title: 'Castle',
    seasons: 8,
    poster: images.castleImage,
  },
  {
    endDate: 'present',
    id: 'fallout',
    rating: 'TV-MA',
    releaseDate: '2024',
    seen: ['2024'],
    title: 'Fallout',
    seasons: 6,
    poster: images.falloutImage,
  },
  {
    endDate: '2014',
    id: 'psych',
    rating: 'TV-PG',
    releaseDate: '2006',
    seen: ['2024'],
    title: 'Psych',
    seasons: 8,
    poster: images.psychImage,
  },
];
