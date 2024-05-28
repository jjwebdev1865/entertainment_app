import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, SearchBar } from '../../common';
import { Navbar } from '../../components';
import { getMovies } from '../../api/local_api/filter';
import { StyledMovieHeader, StyledMovieList } from './Movies.styles';
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

  const handleSearch = () => {
    if (searchVal === '') {
      console.log('input are undefined');
      setFilteredMovies(movies);
    } else {
      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchVal),
      );
      setFilteredMovies(filteredMovies);
    }
  };

  const handleClear = () => {
    setSearchVal('');
    setFilteredMovies(movies);
  };

  return (
    <div data-testid="movies">
      <Navbar />

      <StyledMovieHeader id='movies-header' >
        <h1>Movies</h1>
        <div id='movie-header-filter-bar' style={{ display: 'flex'}}>
          <SearchBar
            searchVal={searchVal}
            inputHandler={inputHandler}
            handleClear={handleClear}
          />
          <Button buttonText='Clear' handleClick={handleClear} />
          <Button
            buttonText="Search"
            handleClick={handleSearch}
          />
        </div>
      </StyledMovieHeader>

      <section data-testid="movies-section">
        <StyledMovieList data-testid="movies-list">
          {filteredMovies.map((movie) => {
            return <Card key={movie.id} details={movie} type='movie' />;
          })}
        </StyledMovieList>
      </section>
    </div>
  );
};

export default Movies;
