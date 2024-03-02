import React, { useEffect, useState } from 'react'
import { Navbar } from '../../common'
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

  let inputHandler = (e: any) => {
    const lowerCaseSearch = e.target.value.toLowerCase();
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
      <h1 data-testid='home-header'>Movies</h1>
      <Navbar />

      <hr />
      
      <h2>Movie list</h2>
      <section data-testid='movie-search-section'>
        <input data-testid='search' type="text" onChange={inputHandler} value={searchVal} />
        <button data-testid='search-clear-button' onClick={() => handleClear()}>Clear</button>
        <button data-testid='search-button' onClick={() => handleSearch(searchVal)}>Search</button>
      </section>

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