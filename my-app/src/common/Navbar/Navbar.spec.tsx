import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar'
import React from 'react';
import '@testing-library/jest-dom'

describe('Navbar', () => {
  it("should render Home component correctly", () => {
    render(<Navbar />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });

  it('contains the right navbar pages', () => {
    render(<Navbar />);
    const HomeLinkElement = screen.getByRole('link', { name : 'Home' });
    const AboutMeLinkElement = screen.getByRole('link', { name : 'Home' });

    expect(HomeLinkElement).toBeInTheDocument()
    expect(AboutMeLinkElement).toBeInTheDocument()
  })
})