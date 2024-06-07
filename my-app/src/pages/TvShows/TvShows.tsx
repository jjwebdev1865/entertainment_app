import React, { ChangeEvent, useEffect, useState } from 'react';
import { Card, } from '../../common';
import { Header, Navbar } from '../../components';
import { shows } from '../../config/shows';
import * as styles from './TvShows.styles';
import { Genre, Show } from '../../types/models';

const TvShows = (): JSX.Element => {
  const { StyledShowList } = styles;
  const [filteredShows, setFilteredShows] = useState([] as Show[]);
  const [searchVal, setSearchVal] = useState('');
  const [genreFilter, setGenreFilter] = useState('' as Genre | string);

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

  return (
    <div>
      <Navbar />

      <Header 
        pageTitle='Shows' 
        handleGenre={handleGenre} 
        genreFilter={genreFilter} 
        searchVal={searchVal} 
        inputHandler={inputHandler} 
        handleClear={handleClear}
        handleSearch={handleSearch}
      />

      <p style={{ color: 'red', fontWeight: 'bold', marginTop: '0px'}}>*NOTE: created in 2024 and quoting all movies as seen at start of that</p>

      <div>
        <section data-testid="shows-section">
          <StyledShowList>
            {filteredShows.map(show => <Card key={show.id} type='show' details={show}/>)}
          </StyledShowList>
        </section>
      </div>
    </div>
  );
};

export default TvShows;
