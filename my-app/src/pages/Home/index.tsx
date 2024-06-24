import React from 'react';
import { getFavorites, getRecentReviews } from '../../api/local_api/filter';
import { movies } from '../../config/movies';
import { Navbar } from '../../components';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { shows } from '../../config/shows';
import { StyledCarouselContainer } from './Home.styles';
import { Background } from '../../common';

const Home = (): JSX.Element => {
  // const fullList = [...movies, ...shows]
  // console.log(fullList )
  const favorites = getFavorites(movies);
  const recentMovieReviews = getRecentReviews(movies);
  const recentShowReviews = getRecentReviews(shows)
  const allReviews = [...recentMovieReviews, ...recentShowReviews]
  console.log(allReviews )

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <Navbar />
      <Background data-testid='background'>
        <h1 data-testid="home-header">Home</h1>

        <div>
        <h2>Recently Added Reviews</h2>
        {/* Explore this more later */}
        {/* <p>carousel from: https://www.npmjs.com/package/react-multi-carousel</p> */}
        <StyledCarouselContainer data-testid='carousel-container'>
          <Carousel 
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2500}
            transitionDuration={500}
          >
            {allReviews.map(item => {
              return (
                <div key={`favorite-movie-${item.id}`}>
                  <img src={item.poster} height={400} width={300} />
                </div>
              );
            })}
          </Carousel>
        </StyledCarouselContainer>
        
        
        <h2>Movie Favorites</h2>
        <StyledCarouselContainer>
          <Carousel 
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2500}
            transitionDuration={500}
          >
            {favorites.map(item => {
              return (
                <div key={`favorite-movie-${item.id}`}>
                  <img src={item.poster} height={400} width={300}  />
                </div>
              );
            })}
          </Carousel>;
        </StyledCarouselContainer>
        
      </div>
      </Background>
      
      
    </div>
  );
};

export default Home;
