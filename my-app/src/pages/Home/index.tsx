import React from 'react';
import { getFavorites } from '../../api/local_api/filter';
import { movies } from '../../config/movies';
import { Navbar } from '../../components';
import { Carousel } from 'react-bootstrap';

const Home = (): JSX.Element => {
  const favorites = getFavorites(movies);

  return (
    <div>
      <Navbar />
      <h1 data-testid="home-header">Home</h1>

      <div data-testid="favorites-container">
        <h2 data-testid="favorites-header">Favorites</h2>
        <div style={{ border: '2px solid black', width: '100%'}}>
          <Carousel controls={false}>
            {favorites.map((item) => {
              return (
                <Carousel.Item key={`favorite-movie-${item.id}`} interval={5000}>
                  <img src={item.poster} height={500} width={400} />
                  <Carousel.Caption as={'div'}>
                    <h3>{item.title}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
