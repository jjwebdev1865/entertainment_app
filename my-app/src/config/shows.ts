import * as images from '../assets/images/tv_image'; 
import { Show } from '../types/models';


export const shows: Show[] = [
  {
    endDate: '2016',
    id: 'castle',
    rating: 'TV-14',
    releaseDate: '2009',
    seen: ['2023', '2024'],
    title: 'Castle',
    seasons: 8,
    poster: images.castleImage
  },
  {
    endDate: '2014',
    id: 'psych',
    rating: 'TV-PG',
    releaseDate: '2006',
    seen: ['2024'],
    title: 'Psych',
    seasons: 8,
    poster: images.psychImage
  }
];