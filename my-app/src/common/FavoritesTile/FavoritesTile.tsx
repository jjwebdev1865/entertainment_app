import React from 'react'
import styled from 'styled-components';

const StyledFavoritesTile = styled.li`
  border: solid 2px black;
`

type FavoritesTileProps = {
  title: string;
  id: string;
}

export const FavoritesTile = (props: FavoritesTileProps): JSX.Element => {
  const { title, id } = props
  return (
    <>
      <StyledFavoritesTile data-testid={`favorites-tile-${id}`}>
        <p>{title}</p>
      </StyledFavoritesTile>
    </>

  )
}