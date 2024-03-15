import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { RatingsDropdown } from './RatingsDropdown';

describe('RatingsDropdown', () => {
  it('should render RatingsDropdown component correctly', () => {
    render(<RatingsDropdown currentRating={5} setRating={jest.fn()}/>);
    const element = screen.getByTestId('ratings-dropdown-section');
    expect(element).toBeVisible();
  });

  it('should show Select an Option if provided 0', () => {
    render(<RatingsDropdown currentRating={0} setRating={jest.fn()}/>);
    const element = screen.getByTestId('rating-unknown');
    const text = screen.getByText('Select Rating');
    expect(element).toBeVisible();
    expect(text).toBeVisible();
  });

  it('should show number 5 if provided', () => {
    render(<RatingsDropdown currentRating={5} setRating={jest.fn()}/>);
    const element = screen.getByTestId('rating-Five');
    expect(element).toBeVisible();
  });
});
