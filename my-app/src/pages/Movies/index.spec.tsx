import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Movies from './index';

describe('Movies', () => {
  it('should render Home component correctly', () => {
    render(<Movies />);
    const element = screen.getByTestId('movies');
    expect(element).toBeInTheDocument();
  });

  it('contains navbar', () => {
    render(<Movies />);
    const element = screen.getByTestId('nav-bar-container');
    expect(element).toBeInTheDocument();
  });

  it('contains the correct headers', () => {
    render(<Movies />);
    const headingOne = screen.getByRole('heading', { level: 1 });
    expect(headingOne).toBeVisible();
  });

  describe('contains movie section', () => {
    it('and renders section', () => {
      render(<Movies />);
      const element = screen.getByTestId('movies-section');
      expect(element).toBeInTheDocument();
    });
  });

  describe('filter changes the movie list', () => {
    it('filters when searching for dune', () => {
      render(<Movies />);
      const searchInput = screen.getByTestId('search');
      fireEvent.change(searchInput, { target: { value: 'Dune' } });

      const searchButton = screen.getByTestId('search-button');
      fireEvent.click(searchButton);

      const movie = screen.getByTestId('movie-dune');
      expect(movie).toBeVisible();
    });
  });
});
