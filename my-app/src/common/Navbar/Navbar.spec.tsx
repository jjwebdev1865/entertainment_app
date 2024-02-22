import { render } from '@testing-library/react';
import { Navbar } from './Navbar'
import React from 'react';

describe('Navbar', () => {
  it('Navbar component should render', () => {
    const { getByTestId } = render(<Navbar />);
    expect(getByTestId('nav-bar-container')).toBeTruthy();
  })

  it('contains the right navbar pages', () => {
    const { getByRole } = render(<Navbar />);

    expect(getByRole('link', { name : 'Home' })).toBeTruthy()
    expect(getByRole('link', { name : 'About Me' })).toBeTruthy()
  })
})