import React from "react";
import { Movie } from "../../types/models";
import { Card } from "../../common";
import { StyledItemListSection, StyledItemList } from "./ItemList.styles";

interface ItemListProps {
  sectionId: string
  itemList: Movie[]
  type: 'movie'
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