import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import React from 'react';
import '@testing-library/jest-dom';

describe('Navbar', () => {
  it('contains the right navbar pages', () => {
    render(<Navbar />);
    const HomeLinkElement = screen.getByRole('link', { name: 'Home' });
    const AboutMeLinkElement = screen.getByRole('link', { name: 'About Me' });
    const ActorsLinkElement = screen.getByRole('link', { name: 'Actors' });
    const MoviesLinkElement = screen.getByRole('link', { name: 'Movies' });
    const TvShowsLinkElement = screen.getByRole('link', { name: 'Tv Shows' });
    const BooksLinkElement = screen.getByRole('link', { name: 'Books' });
    const VideoGamesLinkElement = screen.getByRole('link', { name: 'Video games' });

    expect(HomeLinkElement).toBeInTheDocument();
    expect(AboutMeLinkElement).toBeInTheDocument();
    expect(ActorsLinkElement).toBeInTheDocument();
    expect(MoviesLinkElement).toBeInTheDocument();
    expect(TvShowsLinkElement).toBeInTheDocument();
    expect(BooksLinkElement).toBeInTheDocument();
    expect(BooksLinkElement).toBeInTheDocument();
  });
});
