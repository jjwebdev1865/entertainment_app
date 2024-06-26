import { Actor } from "../types/models";
import * as images from '../assets/images/actors';
import { v4 as uuidv4 } from 'uuid';


export const actors: Actor[] = [
  {
    id: uuidv4(),
    name: 'Glen Powell',
    poster: images.glenPowellImage
  },
  {
    id: uuidv4(),
    name: 'Sydney Sweeney',
    poster: images.sydneySweeneyImage
  },
  {
    id: uuidv4(),
    name: 'Stephen Amell',
    poster: images.stephenAmellImage
  },
  {
    id: uuidv4(),
    name: 'Robbie Amell',
    poster: images.robbieAmellImage
  },
  {
    id: uuidv4(),
    name: 'Jason Momoa',
    poster: images.jasonMomoaImage
  },
  {
    id: uuidv4(),
    name: 'Xolo Maridueña',
    poster: images.xoloMariduenaImage
  },
  {
    id: uuidv4(),
    name: 'Bruna Marquezine',
    poster: images.brunaMarquezineImage
  }
  

];