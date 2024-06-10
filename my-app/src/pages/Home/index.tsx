import React from 'react';
import { getFavorites } from '../../api/local_api/filter';
import { movies } from '../../config/movies';
import { Navbar } from '../../components';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = (): JSX.Element => {
  const favorites = getFavorites(movies);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
      <h1 data-testid="home-header">Home</h1>
      <div>
        
        <h2>Favorites</h2>

        {/* Explore this more later */}
        {/* <p>carousel from: https://www.npmjs.com/package/react-multi-carousel</p> */}
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
                <img src={item.poster} height={500} width={400} />
              </div>
            );
          })}
        </Carousel>;
      </div>
    </div>
  );
};

export default Home;
