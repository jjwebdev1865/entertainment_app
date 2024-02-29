import { FavoritesTile } from './FavoritesTile'
import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'


describe('FavoriteTile', () => {
  it("should render Home component correctly", () => {
    render(<FavoritesTile title='My Favorite' id='my-favorite'  />);
    const element = screen.getByTestId('favorites-tile-my-favorite')
    expect(element).toBeInTheDocument();
  });
})