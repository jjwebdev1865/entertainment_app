import React from 'react';
import { Card, Navbar } from '../../common';
import { shows } from '../../config/shows';
import styled from 'styled-components';

export const StyledShowList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  height: 50%;
  column-gap: 2%;

  li {
    width: 23%;
    margin: 1% 0;
  }
`;

const TvShows = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <h1 data-testid="tv-show-header">TV Shows</h1>
      <p style={{ color: 'red', fontWeight: 'bold', marginTop: '0px'}}>*NOTE: created in 2024 and quoting all movies as seen at start of that</p>

      <div>
        <section data-testid="shows-section">
          <StyledShowList>
            {shows.map((show) => (
              <Card key={show.id} type='show' details={show}/>
              // <TVCard key={show.id} show={show} />
            ))}
          </StyledShowList>
        </section>
      </div>
    </div>
  );
};

export default TvShows;
