import React, { useEffect, useState } from "react";
import { Background } from "../../common";
import { Actor } from "../../types/models";
import { actors } from "../../config/actors";
import { ItemList, Navbar } from "../../components";

export const Actors = (): JSX.Element => {
  const [filteredActors, setFilteredActors] = useState([] as Actor[]);

  useEffect(() => {
    setFilteredActors(actors);
  }, []);


  return (
    <div data-testid="movies">
      <Navbar />

      <Background data-testid='background'>
        <h1>Actors</h1>
        <ItemList sectionId='movies-section' itemList={filteredActors} type='actor' />
      </Background>
    </div>
  );
};