import React from 'react';
import { Navbar } from '../../common';

const TvShows = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <h1 data-testid="tv-show-header">TV Shows</h1>
    </div>
  );
};

export default TvShows;
