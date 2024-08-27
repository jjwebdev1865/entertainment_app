import React from 'react';
import { getFavorites, getRecentReviews } from '../../api/local_api/filter';
import { movies } from '../../config/movies';
import { ContentCarousel, Navbar } from '../../components';
import 'react-multi-carousel/lib/styles.css';
import { shows } from '../../config/shows';
import { StyledBackground } from './Home.styles';

const Home = (): JSX.Element => {
  const favorites = getFavorites(movies);
  const recentMovieReviews = getRecentReviews(movies);
  const recentShowReviews = getRecentReviews(shows);
  const allReviews = [...recentMovieReviews, ...recentShowReviews];

  return (
    <div>
      <Navbar />
      <StyledBackground data-testid='background'>

        <div>
          <h2>Recently Added Reviews</h2>
          <ContentCarousel contentList={allReviews} />
          
          
          <h2>Movie Favorites</h2>
          <ContentCarousel contentList={favorites} />
        
        </div>
      </StyledBackground>   
    </div>
  );
};

export default Home;
