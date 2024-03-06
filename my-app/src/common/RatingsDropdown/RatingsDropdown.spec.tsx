import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { RatingsDropdown } from './RatingsDropdown';

describe('RatingsDropdown', () => {
  it('should render RatingsDropdown component correctly', () => {
    render(<RatingsDropdown />);
    const element = screen.getByTestId('ratings-dropdown-section');
    expect(element).toBeVisible();
  });
});
