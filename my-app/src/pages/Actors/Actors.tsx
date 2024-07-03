import React, { ChangeEvent, useEffect, useState } from "react";
import { Background, Button, Checkbox, SearchBar } from "../../common";
import { Actor } from "../../types/models";
import { actors } from "../../config/actors";
import { ItemList, Navbar, HeaderTwo, ContentCarousel } from "../../components";
import { StyledCarouselContainer } from "./Actors.styles";

export const Actors = (): JSX.Element => {
  const [filteredActors, setFilteredActors] = useState([] as Actor[]);
  const [searchVal, setSearchVal] = useState('');
  const [isShowAllChecked, setIsShowAllChecked] = useState(false);

  useEffect(() => {
    setFilteredActors(actors);
  }, []);

  const handleSearch = () => {
    if (searchVal === '' ) {
      setFilteredActors(actors);
    } else {
      const filteredActors = actors.filter((actor) =>
        actor.name.toLowerCase().includes(searchVal),
      );
      setFilteredActors(filteredActors);
    }
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const lowerCaseSearch = event.target.value.toLowerCase();
    setSearchVal(lowerCaseSearch);
  };

  const handleClear = () => {
    setSearchVal('');
    setFilteredActors(actors);
  };

  const isCheckedChangeHandler = () => {
    setIsShowAllChecked(!isShowAllChecked);
  };

  return (
    <div data-testid="movies">
      <Navbar />

      <Background data-testid='background'>
        <HeaderTwo title="Actors">
          <Checkbox labelText='Show All' isChecked={isShowAllChecked} changeHandler={isCheckedChangeHandler} />

          <SearchBar 
            searchVal={searchVal} 
            inputHandler={inputHandler} 
            handleClear={handleClear} 
            placeholderText='Search for Actor'
          />

          <Button buttonText='Clear' handleClick={handleClear} />
          <Button buttonText="Search" handleClick={handleSearch} />
        </HeaderTwo>

        { isShowAllChecked 
          ? <ItemList sectionId='actors-section' itemList={filteredActors} type='actor' />
          : (
            <StyledCarouselContainer>
              <ContentCarousel contentList={filteredActors} />
            </StyledCarouselContainer>
          )
        }
      </Background>
    </div>
  );
};