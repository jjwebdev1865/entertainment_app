import React from 'react'

export const Navbar = () => {

  return (
    <div data-testid='nav-bar-container'>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about-me'>About Me</a>
            </li>
            <li>
              <a href='/movies'>Movies</a>
            </li>
          </ul>
        </nav>
      </div>
  )
}