import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './index';
import { Movie } from '../../types/models';

describe('Card', () => {
  const mockMovie: Movie = {
    favorite: true,
    id: 'test-movie',
    seen: '2024',
    title: 'Anyone but You',
    actors: ['Glen Powell', 'Sydney Sweeney'],
    poster: expect.any(Image),
    rating: 'R',
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
});
