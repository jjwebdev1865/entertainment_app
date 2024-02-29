import React from 'react'
import { Navbar } from '../../common'
import { getMovies } from '../../api/local_api/filter'
import styled from 'styled-components'

const StyledMovieList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 90%;
  height: 50%;

  li {
    width: 20%;
  }
`

const StyledMovieItem = styled.li`
  border: 2px solid black;
`

const StyledPoster = styled.img`
  width: 100%;
`

const Movies = (): JSX.Element => {
  const movies = getMovies()
  return (
    <div data-testid='movies'>
      <h1 data-testid='home-header'>Movies</h1>
      <Navbar />

      <hr />
      
      <h2>Movie list</h2>
      <div>filter goes here</div>

      <section data-testid='movies-section'>
        <StyledMovieList data-testid='movies-list'>
          {movies.map(movie => {
            return (
              <StyledMovieItem key={movie.id} data-testid={`movie-${movie.id}`}>
                <StyledPoster src={movie.poster} />
                <h3>{movie.title}</h3>
                <p data-testid={`movie-${movie.id}-info`}>
                  {movie.rating} / {movie.runTime} min.
                </p>
                {movie?.actors && <p>{movie.actors[0]}, {movie.actors[1]}</p>}
              </StyledMovieItem>
            )
          })}
        </StyledMovieList>
      </section>
    </div>
  )
}

export default Movies;