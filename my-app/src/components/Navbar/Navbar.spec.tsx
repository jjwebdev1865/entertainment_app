import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import * as router from 'react-router';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Navbar', () => {
  const mockedNavigation = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => mockedNavigation
  )})

  const MockedNav = () => {
    return(
      <Router>
          <Navbar />
      </Router>
    )
  }

  it('should navigate to the about me page', () => {
    const { getByText } = render(<Navbar />, { wrapper: Router });
    fireEvent.click(getByText(/About Me/i));

    expect(mockedNavigation).toHaveBeenCalledWith(
      "/about-me",
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: undefined,
        unstable_viewTransition: undefined
      }
    );
  });

  it('should navigate to the actors page', () => {
    const { getByText } = render(<Navbar />, { wrapper: Router });
    fireEvent.click(getByText(/Actors/i));

    expect(mockedNavigation).toHaveBeenCalledWith(
      "/actors",
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: undefined,
        unstable_viewTransition: undefined
      }
    );
  });

  it('should navigate to the movies page', () => {
    const { getByText } = render(<Navbar />, { wrapper: Router });
    fireEvent.click(getByText(/Movies/i));

    expect(mockedNavigation).toHaveBeenCalledWith(
      "/movies",
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: undefined,
        unstable_viewTransition: undefined
      }
    );
  });

  it('should navigate to the tv shows page', () => {
    const { getByText } = render(<Navbar />, { wrapper: Router });
    fireEvent.click(getByText(/TV Shows/i));

    expect(mockedNavigation).toHaveBeenCalledWith(
      "/tv-shows",
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: undefined,
        unstable_viewTransition: undefined
      }
    );
  });

  it('should navigate to the books page', () => {
    const { getByText } = render(<Navbar />, { wrapper: Router });
    fireEvent.click(getByText(/Books/i));

    expect(mockedNavigation).toHaveBeenCalledWith(
      "/books",
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: undefined,
        unstable_viewTransition: undefined
      }
    );
  });

  it('should navigate to the video games page', () => {
    const { getByText } = render(<Navbar />, { wrapper: Router });
    fireEvent.click(getByText(/Video Games/i));

    expect(mockedNavigation).toHaveBeenCalledWith(
      "/video-games",
      {
        preventScrollReset: undefined,
        relative: undefined,
        replace: false,
        state: undefined,
        unstable_viewTransition: undefined
      }
    );
  });
});
