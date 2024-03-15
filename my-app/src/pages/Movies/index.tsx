import React, { ChangeEvent, useEffect, useState } from 'react';
import { Navbar, SearchBar, SubmitButton } from '../../common';
import { getMovies } from '../../api/local_api/filter';
import { Movie } from '../../models/types';
import {
  StyledMovieItem,
  StyledMovieList,
  StyledPoster,
  StyledRatingDropdown,
} from './index.styles';
import { RatingsDropdown } from '../../common/RatingsDropdown/RatingsDropdown';

export const Movies = (): JSX.Element => {
  const movies = getMovies();
  const [searchVal, setSearchVal] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([] as Movie[]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setFilteredMovies(movies);
  }, []);

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const lowerCaseSearch = event.target.value.toLowerCase();
    setSearchVal(lowerCaseSearch);
  };

  const handleSearch = (input: string, rating: number) => {
    let filteredMovies = [] as Movie[];

    if (input === '' && rating === 0) {
      console.log('input and rating are undefined');
      return movies;
    } else if (input === '' && rating !== 0) {
      filteredMovies = movies.filter((movie) => movie.myRating === rating);
    } else if (input !== '' && rating === 0) {
      filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(input));
    } else {
      const inputList = movies.filter((movie) => movie.title.toLowerCase().includes(input));
      filteredMovies = inputList.filter((movie) => movie.myRating === rating);
    }  
    setFilteredMovies(filteredMovies);
  };

  const handleClear = () => {
    setSearchVal('');
    setFilteredMovies(movies);
  };

  return (
    <div data-testid="movies">
      <Navbar />

      <h1>Movies</h1>
      <StyledRatingDropdown data-testid="movie-filter-bar">
        <SearchBar
          searchVal={searchVal}
          inputHandler={inputHandler}
          handleClear={handleClear} 
        />
        <RatingsDropdown currentRating={rating} setRating={setRating} />
        <SubmitButton 
          buttonText='Search' 
          searchVal={searchVal} 
          ratingVal={rating} 
          handleSearch={handleSearch} 
        />
      </StyledRatingDropdown>

      <section data-testid="movies-section">
        <StyledMovieList data-testid="movies-list">
          {filteredMovies.map((movie) => {
            return (
              <StyledMovieItem key={movie.id} data-testid={`movie-${movie.id}`}>
                <StyledPoster src={movie.poster} />
                <h3>{movie.title}</h3>
                <p data-testid={`movie-${movie.id}-info`}>
                  {movie.rating} | {movie.runTime} min. | My Rating:{' '}
                  {movie.myRating}/10
                </p>
                {movie?.actors && (
                  <p>
                    {movie.actors[0]}, {movie.actors[1]}
                  </p>
                )}
              </StyledMovieItem>
            );
          })}
        </StyledMovieList>
      </section>
    </div>
  );
};

export default Movies;
