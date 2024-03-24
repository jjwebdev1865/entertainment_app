import React, { ChangeEvent, useEffect, useState } from 'react';
import { Navbar, SearchBar, SubmitButton } from '../../common';
import { getMovies } from '../../api/local_api/filter';
import {
  StyledMovieList,
  StyledRatingDropdown,
} from './index.styles';
import { Card } from '../../common/Card';
import { Movie } from '../../types/models';

export const Movies = (): JSX.Element => {
  const movies = getMovies();
  const [searchVal, setSearchVal] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([] as Movie[]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, []);

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const lowerCaseSearch = event.target.value.toLowerCase();
    setSearchVal(lowerCaseSearch);
  };

  const handleSearch = (input: string) => {
    let filteredMovies = [] as Movie[];

    if (input === '') {
      console.log('input are undefined');
      filteredMovies = movies;
    } else {
      filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(input));
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
        <SubmitButton 
          buttonText='Search' 
          searchVal={searchVal} 
          handleSearch={handleSearch} 
        />
      </StyledRatingDropdown>

      <section data-testid="movies-section">
        <StyledMovieList data-testid="movies-list">
          {filteredMovies.map((movie) => {
            return (
              <Card key={movie.id} movie={movie} />
            );
          })}
        </StyledMovieList>
      </section>
    </div>
  );
};

export default Movies;
