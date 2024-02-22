import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar'
import React from 'react';

describe('Navbar', () => {
  // it('Navbar component should render', () => {
  //   const { getByTestId } = render(<Navbar />);
  //   expect(getByTestId('nav-bar-container')).toBeTruthy();
  // })

  it("should render Home component correctly", () => {
    render(<Navbar />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });

  it('contains the right navbar pages', () => {
    // const { getByRole } = render(<Navbar />);
    render(<Navbar />);
    const HomeLinkElement = screen.getByRole('link', { name : 'Home' });
    const AboutMeLinkElement = screen.getByRole('link', { name : 'Home' });

    expect(HomeLinkElement).toBeInTheDocument()
    expect(AboutMeLinkElement).toBeInTheDocument()
  })
})