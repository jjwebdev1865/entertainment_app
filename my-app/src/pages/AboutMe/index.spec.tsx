import { render, screen } from '@testing-library/react';
import AboutMe from './index';
import React from 'react';
import '@testing-library/jest-dom';

describe('AboutMe', () => {
  it('should render AboutMe component correctly', () => {
    render(<AboutMe />);
    const element = screen.getByRole('heading', { level: 1 });
    expect(element).toBeInTheDocument();
  });
});
