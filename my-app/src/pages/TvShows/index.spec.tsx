import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import TvShows from './index';

describe('TvShows', () => {
  it('contains the correct headers', () => {
    render(<TvShows />);
    const headingOne = screen.getByRole('heading', { level: 1 });
    expect(headingOne).toBeVisible();
  });
});
