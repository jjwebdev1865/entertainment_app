import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useFeatureFlag } from '@harnessio/ff-react-client-sdk'

const StyledNavbar = styled.nav`
  background: #b3b3b3;
  padding: 25px;
  text-align: center;

  a {
    color: black;
    font-size: 1.5rem;
    text-decoration: none;
    padding: 25px 15px;
  }
`;

export const Navbar = () => {
  const bookValue = useFeatureFlag('Books')

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
      <NavLink
        to="/actors"
        style={({ isActive }) => ({
          color: isActive ? '#0000ff' : '#000000',
        })}
      >
        Actors
      </NavLink>
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
        </NavLink>}
    </StyledNavbar>
  );
};
