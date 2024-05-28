import React, { useState } from 'react';
import { Card } from '../../common';
import { Navbar } from '../../components';
import { shows } from '../../config/shows';
import * as styles from './TvShows.styles';
import { Genre } from '../../types/models';

const genres = ['Action', 'Adventure', 'Crime', 'Drama', 'Mystery', 'Sci-Fi', 'Comedy', 'Romance', 'War'] as Genre[];

const TvShows = (): JSX.Element => {
  const { StyledGenreFilterBar, StyledShowList } = styles;
  const [selectedGenres, setSelectedGenres] = useState([] as Genre[]);

  const selectGenre = (genre: Genre) => {
    const isAlreadyInList = selectedGenres.find(item => item === genre);
    if (isAlreadyInList) {
      setSelectedGenres(selectedGenres.filter(item => item !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  console.log('selectedGenres', selectedGenres);

  return (
    <div>
      <Navbar />
      <h1 data-testid="tv-show-header">TV Shows</h1>
      <p style={{ color: 'red', fontWeight: 'bold', marginTop: '0px'}}>*NOTE: created in 2024 and quoting all movies as seen at start of that</p>

      <div>
        <section id='genres-bar'>
          <h2>Genres</h2>
          <StyledGenreFilterBar>
            {genres.map(genre => (
              <li key={`genre-filter-button-${genre}`}>
                <button onClick={() => selectGenre(genre)}>{genre}</button>
              </li>
            ))}
          </StyledGenreFilterBar>
        </section>
        <section data-testid="shows-section">
          <StyledShowList>
            {shows.map(show => <Card key={show.id} type='show' details={show}/>)}
          </StyledShowList>
        </section>
      </div>
    </div>
  );
};

export default TvShows;
