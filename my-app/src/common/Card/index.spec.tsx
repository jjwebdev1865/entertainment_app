import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './index';
import { Movie } from '../../types/models';
import * as images from '../../assets/images/images'

describe('Card', () => {
  const mockMovie: Movie = {
    favorite: true,
    id: 'anyone-but-you',
    seen: '2024',
    title: 'Anyone but You',
    actors: ['Glen Powell', 'Sydney Sweeney'],
    poster: images.anyoneButYouImage,
    rating: 'R',
    recentlyAddedReview: false,
    releaseYear: 2023,
    runTime: 103,
    myRating: 8,
    review: 'nice work',
    genre: 'Comedy'
  };

  it('renders a movie', () => {
    render(<Card details={mockMovie} type='movie' />);
    const movie = screen.getByTestId('movie-anyone-but-you');
    expect(movie).toBeVisible();
  });

  it('renders the correct movie poster', () => {
    render(<Card details={mockMovie} type='movie' />);
    const poster = screen.getByTestId('movie-anyone-but-you-poster');
    expect(poster).toBeVisible();
  })
});
