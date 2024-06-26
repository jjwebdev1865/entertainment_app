import React from "react";
import { Movie, Show } from "../../types/models";
import { Card } from "../../common";
import { StyledItemListSection, StyledItemList } from "./ItemList.styles";

interface ItemListProps {
  sectionId: string
  itemList: Movie[] | Show[]
  type: 'movie' | 'show'
}

export const ItemList = (props: ItemListProps) => {
  const { sectionId, itemList, type} = props;
  return (
    <StyledItemListSection data-testid={sectionId}>
      <StyledItemList>
        {itemList.map((item) => {
          return <Card key={item.id} details={item} type={type} />;
        })}
      </StyledItemList>
    </StyledItemListSection>
  )
}