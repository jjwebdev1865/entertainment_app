import React from 'react';
import { routerType } from '../types/router.types';
import AboutMe from './AboutMe';
import Home from './Home';
import Movies from './Movies/Movies';
import TvShows from './TvShows/TvShows';
import { Actors } from './Actors/Actors';
import { Books } from './Books/Books';
import { VideoGames } from './VideoGames/VideoGames';

const pagesData: routerType[] = [
  {
    path: '',
    element: <Home />,
    title: 'home',
  },
  {
    path: 'about-me',
    element: <AboutMe />,
    title: 'about me',
  },
  {
    path: 'movies',
    element: <Movies />,
    title: 'movies',
  },
  {
    path: 'tv-shows',
    element: <TvShows />,
    title: 'tv shows',
  },
  {
    path: 'actors',
    element: <Actors />,
    title: 'actors'
  },
  {
    path: 'books',
    element: <Books />,
    title: 'books'
  },
  {
    path: 'video-games',
    element: <VideoGames />,
    title: 'video games'
  }
];

export default pagesData;
