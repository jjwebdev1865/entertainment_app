import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFeatureFlag } from '@harnessio/ff-react-client-sdk';
import { StyledNavbar } from './Navbar.styles';

export const Navbar = () => {
  const bookValue = useFeatureFlag('Books');
  const actorFFValue = useFeatureFlag('Actors');
  const videoGamesFFValue = useFeatureFlag('Video_Games');

  return (
    <StyledNavbar data-testid="nav-bar-container">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? '#0000ff' : '#000000',
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/about-me"
        style={({ isActive }) => ({
          color: isActive ? '#0000ff' : '#000000',
        })}
      >
        About Me
      </NavLink>

      {actorFFValue &&
       <NavLink to="/actors" style={({ isActive }) => ({
          color: isActive ? '#0000ff' : '#000000',
        })}>
          Actors
        </NavLink>
      }

      <NavLink
        to="/movies"
        style={({ isActive }) => ({
          color: isActive ? '#0000ff' : '#000000',
        })}
      >
        Movies
      </NavLink>

      <NavLink
        to="/tv-shows"
        style={({ isActive }) => ({
          color: isActive ? '#0000ff' : '#000000',
        })}
      >
        TV Shows
      </NavLink>   

      {bookValue &&
       <NavLink to="/books" style={({ isActive }) => ({
          color: isActive ? '#0000ff' : '#000000',
        })}>
          Books
        </NavLink>
      }

      {videoGamesFFValue &&
       <NavLink to="/video-games" style={({ isActive }) => ({
          color: isActive ? '#0000ff' : '#000000',
        })}>
          Video Games
        </NavLink>
      }
    </StyledNavbar>
  );
};
