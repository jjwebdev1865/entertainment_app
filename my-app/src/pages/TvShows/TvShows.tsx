import React, { ChangeEvent, useEffect, useState } from 'react';
import { Background, Button, Checkbox, GenreBar, SearchBar } from '../../common';
import { ItemList, Navbar, HeaderTwo, ContentCarousel } from '../../components';
import { shows } from '../../config/shows';
import { Genre, Show, genreList } from '../../types/models';
import { StyledCarouselContainer } from './TvShows.styles';

const TvShows = (): JSX.Element => {
  const [filteredShows, setFilteredShows] = useState([] as Show[]);
  const [searchVal, setSearchVal] = useState('');
  const [genreFilter, setGenreFilter] = useState('' as Genre | string);
  const [isShowAllChecked, setIsShowAllChecked] = useState(false);

  useEffect(() => {
    setFilteredShows(shows);
  }, []);


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleGenre = (e: any) => {
    setGenreFilter(e.target.value);
  };
  const handleClear = () => {
    setSearchVal('');
    setGenreFilter('');
    setFilteredShows(shows);
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const lowerCaseSearch = event.target.value.toLowerCase();
    setSearchVal(lowerCaseSearch);
  };

  const handleSearch = () => {
    if (searchVal === '' && genreFilter === '') {
      setFilteredShows(shows);
    } else if (searchVal === '' && genreFilter !== '') {
      const genreOnlyMovies = shows.filter(show => show.genre === genreFilter);
      setFilteredShows(genreOnlyMovies as Show[]);
    } else if (searchVal !== '' && genreFilter === '') {
      const filteredMovies = shows.filter((show) =>
        show.title.toLowerCase().includes(searchVal),
      );
      setFilteredShows(filteredMovies);
    } else {
      const filteredMovies = shows.filter((movie) => movie.title.toLowerCase().includes(searchVal));
      const genreFilterList = filteredMovies.filter(movie => movie.genre === genreFilter);
      setFilteredShows(genreFilterList);
    }
  };

  const isCheckedChangeHandler = () => {
    setIsShowAllChecked(!isShowAllChecked);
  };

  return (
    <div>
      <Navbar />

      <Background data-testid='background'>
      <HeaderTwo title="Actors">
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
            placeholderText='Search for Show'
          />

          <Button buttonText='Clear' handleClick={handleClear} />
          <Button buttonText="Search" handleClick={handleSearch} />
        </HeaderTwo>

        { isShowAllChecked 
          ? <ItemList sectionId='shows-section' itemList={filteredShows} type='show' />
          : (
            <StyledCarouselContainer>
              <ContentCarousel contentList={filteredShows} />
            </StyledCarouselContainer>
          )
        }
      </Background>

      
    </div>
  );
};

export default TvShows;
