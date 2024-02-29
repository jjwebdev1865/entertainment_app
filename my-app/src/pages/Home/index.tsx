import React from 'react'
import { getFavorites } from '../../api/local_api/filter'
import { movies } from '../../config/movies'
import { FavoritesTile, Navbar } from '../../common'
import styled from 'styled-components'

const StyledFavorites = styled.ul`
  list-style: none;
`

const Home = (): JSX.Element => {
  const favorites = getFavorites(movies)

  return (
    <div>
      <h1 data-testid='home-header'>Home</h1>
      <Navbar />

      <div data-testid='favorites-container'>
        <h2 data-testid='favorites-header'>Favorites</h2>
        <StyledFavorites>
          {favorites.map(item => {
            return (
              <FavoritesTile key={`favorite-movie-${item.id}`} title={item.title} id={item.id} />
            )
          })}
        </StyledFavorites>
      </div>
    </div>
  )
}

export default Home