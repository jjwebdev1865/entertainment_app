import React, { ChangeEvent, useEffect, useState } from 'react';
import { ItemList, Navbar, HeaderTwo, ContentCarousel } from '../../components';
import { getMovies } from '../../api/local_api/filter';
import { Movie, Genre, genreList } from '../../types/models';
import { Background, Button, Checkbox, GenreBar, SearchBar } from '../../common';
import { StyledCarouselContainer } from './Movies.styles';

export const Movies = (): JSX.Element => {
  const movies = getMovies();
  const [searchVal, setSearchVal] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([] as Movie[]);
  const [genreFilter, setGenreFilter] = useState('' as Genre | string);
  const [isShowAllChecked, setIsShowAllChecked] = useState(false);

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

  const isCheckedChangeHandler = () => {
    setIsShowAllChecked(!isShowAllChecked);
  };

  return (
    <div data-testid="movies">
      <Navbar />

      <Background data-testid='background'>
        <HeaderTwo title="Movies">

          <Checkbox labelText='Show All' isChecked={isShowAllChecked} changeHandler={isCheckedChangeHandler} />
          <GenreBar 
            handleGenre={handleGenre} 
            genreFilter={genreFilter} 
            genreOptions={genreList} 
          />

          <SearchBar 
            searchVal={searchVal} 
            inputHandler={inputHandler} 
            handleClear={handleClear} 
            placeholderText='Search for Movie'
          />

          <Button buttonText='Clear' handleClick={handleClear} />
          <Button buttonText="Search" handleClick={handleSearch} />
        </HeaderTwo>

        { isShowAllChecked 
          ? <ItemList sectionId='movies-section' itemList={filteredMovies} type='movie' />
          : (
            <StyledCarouselContainer>
              <ContentCarousel contentList={filteredMovies} />
            </StyledCarouselContainer>
          )
        }

      </Background>

      
    </div>
  );
};

export default Movies;
