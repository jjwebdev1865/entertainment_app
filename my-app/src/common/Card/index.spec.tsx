import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './index';
import { Movie } from '../../models/types';

describe('Card', () => {

  const mockMovie: Movie = {
    favorite: true,
    id: 'test-movie',
    seen: ['2024'],
    title: 'Anyone but You',
    actors: ['Glen Powell', 'Sydney Sweeney'],
    poster: expect.any(Image),
    rating: 'R',
    releaseYear: 2023,
    runTime: 103,
    myRating: 8,
  };

  it('renders a movie', () => {
    render(<Card movie={mockMovie} />);
    const movie = screen.getByTestId('movie-anyone-but-you');
    expect(movie).toBeVisible();
  });
});