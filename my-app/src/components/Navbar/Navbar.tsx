import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFeatureFlag } from '@harnessio/ff-react-client-sdk';
import { StyledNavbar } from './Navbar.styles';

interface NavLinkProps {
  linkText: string
  toUrl: string
}
const StyledNavLink = ({ linkText, toUrl }: NavLinkProps) => {
  return (
    <NavLink
      to={toUrl}
      style={({ isActive }) => ({
        color: isActive ? '#0000ff' : '#000000',
        borderBottom: isActive ? '2px solid #0000ff' : 'none'
      })}
    >
      {linkText}
    </NavLink>
  )
}

export const Navbar = () => {
  const bookValue = useFeatureFlag('Books'); // currently turned on
  const actorFFValue = useFeatureFlag('Actors'); // currently turned on
  const videoGamesFFValue = useFeatureFlag('Video_Games'); // currently turned off

  return (
    <StyledNavbar data-testid="nav-bar-container">
      <StyledNavLink linkText='Home' toUrl='/' />
      <StyledNavLink linkText='About Me' toUrl='/about-me' />
      {actorFFValue && <StyledNavLink linkText='Actors' toUrl='/actors' />}
      <StyledNavLink linkText='Movies' toUrl='/movies' />
      <StyledNavLink linkText='TV Shows' toUrl='/tv-shows' />
      {bookValue && <StyledNavLink linkText='Books' toUrl='/books' />}
      {videoGamesFFValue && <StyledNavLink linkText='Video Games' toUrl='/video-games' />}
    </StyledNavbar>
  );
};
