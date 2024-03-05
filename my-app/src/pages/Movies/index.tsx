import React, { useEffect, useState } from 'react'
import { Navbar, SearchBar } from '../../common'
import { getMovies } from '../../api/local_api/filter'
import { Movie } from '../../models/types'
import { StyledMovieItem, StyledMovieList, StyledPoster } from './index.styles'

const Movies = (): JSX.Element => {
  const movies = getMovies()
  const [searchVal, setSearchVal] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([] as Movie[])

  useEffect(() => {
    setFilteredMovies(movies)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let inputHandler = (event: any) => {
    const lowerCaseSearch = event.target.value.toLowerCase();
    setSearchVal(lowerCaseSearch);
  };

  const handleSearch = (input: string) => {
    const filterList = movies.filter(movie => movie.title.toLowerCase().includes(input))
    setFilteredMovies(filterList)
  }

  const handleClear = () => {
    setSearchVal('')
    setFilteredMovies(movies)
  }

  return (
    <div data-testid='movies'>
      <Navbar />
      
      <h1>Movies</h1>
      <SearchBar searchVal={searchVal} inputHandler={inputHandler} handleClear={handleClear} handleSearch={handleSearch} />

      <section data-testid='movies-section'>
        <StyledMovieList data-testid='movies-list'>
          {filteredMovies.map(movie => {
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