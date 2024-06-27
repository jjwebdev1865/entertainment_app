import { Actor } from "../types/models";
import * as images from '../assets/images/actors';
import { v4 as uuidv4 } from 'uuid';


export const actors: Actor[] = [
  {
    id: uuidv4(),
    name: 'Glen Powell',
    title: 'Glen Powell',
    poster: images.glenPowellImage,
    filmography: ['Anyone But You'],
    favoriteRole: 'Ben in Anyone But You'
  },
  {
    id: uuidv4(),
    name: 'Sydney Sweeney',
    title: 'Sydney Sweeney',
    poster: images.sydneySweeneyImage,
    filmography: ['Anyone But You', 'Madame Web'],
    favoriteRole: 'Bea in Anyone But You'
  },
  {
    id: uuidv4(),
    name: 'Stephen Amell',
    title: 'Stephen Amell',
    poster: images.stephenAmellImage,
    filmography: ['Code 8', 'Code 8: Part 2', 'Arrow'],
    favoriteRole: 'Oliver Queen in Arrow'
  },
  {
    id: uuidv4(),
    name: 'Robbie Amell',
    title: 'Robbie Amell',
    poster: images.robbieAmellImage,
    filmography: ['Code 8', 'Code 8: Part 2'],
    favoriteRole: 'Firestorm in the Flash'
  },
  {
    id: uuidv4(),
    name: 'Jason Momoa',
    title: 'Jason Momoa',
    poster: images.jasonMomoaImage,
    filmography: ['Aquaman and the Lost Kingdom'],
    favoriteRole: 'Arthur Curry in the Aquaman'
  },
  {
    id: uuidv4(),
    name: 'Xolo Maridueña',
    title: 'Xolo Maridueña',
    poster: images.xoloMariduenaImage,
    filmography: ['Blue Beetle'],
    favoriteRole: 'Jaime Reyes in Blue Beetle'
  },
  {
    id: uuidv4(),
    name: 'Bruna Marquezine',
    title: 'Bruna Marquezine',
    poster: images.brunaMarquezineImage,
    filmography: ['Blue Beetle'],
    favoriteRole: 'Jenny Kord in Blue Beetle'
  }
];