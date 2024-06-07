import React, { ChangeEvent, useEffect, useState } from 'react';
import { Header, Navbar } from '../../components';
import { getMovies } from '../../api/local_api/filter';
import { StyledMovieList } from './Movies.styles';
import { Card } from '../../common/Card';
import { Movie, Genre } from '../../types/models';

export const Movies = (): JSX.Element => {
  const movies = getMovies();
  const [searchVal, setSearchVal] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([] as Movie[]);
  const [genreFilter, setGenreFilter] = useState('' as Genre | string);

  useEffect(() => {
    setFilteredMovies(movies);
  }, []);

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const lowerCaseSearch = event.target.value.toLowerCase();
    setSearchVal(lowerCaseSearch);
  };

  const handleSearch = () => {
    if (searchVal === '' && genreFilter === '') {
      setFilteredMovies(movies);
    } else if (searchVal === '' && genreFilter !== '') {
      const genreOnlyMovies = movies.filter(movie => movie.genre === genreFilter);
      setFilteredMovies(genreOnlyMovies as Movie[]);
    } else if (searchVal !== '' && genreFilter === '') {
      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchVal),
      );
      setFilteredMovies(filteredMovies);
    } else {
      const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(searchVal));
      const genreFilterList = filteredMovies.filter(movie => movie.genre === genreFilter);
      setFilteredMovies(genreFilterList);
    }
  };

  const handleClear = () => {
    setSearchVal('');
    setGenreFilter('');
    setFilteredMovies(movies);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleGenre = (e: any) => {
    setGenreFilter(e.target.value);
  };

  return (
    <div data-testid="movies">
      <Navbar />

      <Header 
        pageTitle='Movies' 
        handleGenre={handleGenre} 
        genreFilter={genreFilter} 
        searchVal={searchVal} 
        inputHandler={inputHandler} 
        handleClear={handleClear}
        handleSearch={handleSearch}
      />

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
