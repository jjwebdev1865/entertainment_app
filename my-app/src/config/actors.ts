import { Actor } from "../types/models";
import * as images from '../assets/images/actors';
import * as actorsReviews from './actorReviews';

// Next new actor id: 11
export const actors: Actor[] = [
  {
    id: 1,
    name: 'Robbie Amell',
    title: 'Robbie Amell',
    poster: images.robbieAmellImage,
    filmography: ['Code 8', 'Code 8: Part 2', 'the Flash'],
    favoriteRole: 'Firestorm in the Flash',
    review: actorsReviews.robbieAmellReview
  },
  {
    id: 2,
    name: 'Stephen Amell',
    title: 'Stephen Amell',
    poster: images.stephenAmellImage,
    filmography: ['Code 8', 'Code 8: Part 2', 'Arrow'],
    favoriteRole: 'Oliver Queen in Arrow',
    review: actorsReviews.stephenAmellReview
  },
  {
    id: 8,
    name: 'Zac Efron',
    title: 'Zac Efron',
    poster: images.zacEfronImage,
    filmography: ['The Awkward Moment'],
    favoriteRole: 'Jason in That Awkward Moment',
    review: actorsReviews.zacEfronReview
  },
  {
    id: 10,
    name: 'Michael B. Jordan',
    title: 'Michael B. Jordan',
    poster: images.michealBJordanImage,
    filmography: ['The Awkward Moment'],
    favoriteRole: 'Mikey in That Awkward Moment',
    review: actorsReviews.michealBJordanReview
  },
  {
    id: 3,
    name: 'Xolo Maridueña',
    title: 'Xolo Maridueña',
    poster: images.xoloMariduenaImage,
    filmography: ['Blue Beetle'],
    favoriteRole: 'Jaime Reyes in Blue Beetle',
    review: actorsReviews.xoloMariduenaReview
  },
  {
    id: 4,
    name: 'Bruna Marquezine',
    title: 'Bruna Marquezine',
    poster: images.brunaMarquezineImage,
    filmography: ['Blue Beetle'],
    favoriteRole: 'Jenny Kord in Blue Beetle',
    review: actorsReviews.brunaMarquezineReview
  },
  {
    id: 5,
    name: 'Jason Momoa',
    title: 'Jason Momoa',
    poster: images.jasonMomoaImage,
    filmography: ['Aquaman and the Lost Kingdom'],
    favoriteRole: 'Arthur Curry in the Aquaman',
    review: 'TODO'
  },
  {
    id: 6,
    name: 'Glen Powell',
    title: 'Glen Powell',
    poster: images.glenPowellImage,
    filmography: ['Anyone But You', 'Set It Up'],
    favoriteRole: 'Ben in Anyone But You',
    review: actorsReviews.glenPowellReview
  },
  {
    id: 7,
    name: 'Sydney Sweeney',
    title: 'Sydney Sweeney',
    poster: images.sydneySweeneyImage,
    filmography: ['Anyone But You', 'Madame Web'],
    favoriteRole: 'Bea in Anyone But You',
    review: actorsReviews.sydneySweeneyReview
  },
  {
    id: 9,
    name: 'Miles Teller',
    title: 'Miles Teller',
    poster: images.milesTellerImage,
    filmography: ['That Awkward Moment'],
    favoriteRole: 'Daniel in That Awkward Moment',
    review: actorsReviews.milesTellerReview
  }
];