import React, { ChangeEvent, useEffect, useState } from "react";
import { Background, Button, SearchBar } from "../../common";
import { Actor } from "../../types/models";
import { actors } from "../../config/actors";
import { ItemList, Navbar, HeaderTwo } from "../../components";

export const Actors = (): JSX.Element => {
  const [filteredActors, setFilteredActors] = useState([] as Actor[]);
  const [searchVal, setSearchVal] = useState('');

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

  return (
    <div data-testid="movies">
      <Navbar />

      <Background data-testid='background'>
        <HeaderTwo title="Actors">
          <SearchBar 
            searchVal={searchVal} 
            inputHandler={inputHandler} 
            handleClear={handleClear} 
            placeholderText='Search for Actor'
          />

          <Button buttonText='Clear' handleClick={handleClear} />
          <Button buttonText="Search" handleClick={handleSearch} />
        </HeaderTwo>

        <ItemList sectionId='movies-section' itemList={filteredActors} type='actor' />
      </Background>
    </div>
  );
};