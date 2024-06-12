import React, { useEffect, useState } from "react";
import { Navbar } from "../../common";
import { Actor } from "../../types/models";
import { actors } from "../../config/actors";

export const Actors = ():JSX.Element => {
  const [filteredActors, setFilteredActors] = useState([] as Actor[]);

  useEffect(() => {
    setFilteredActors(actors);
  }, []);


  return (
    <div data-testid="movies">
      <Navbar />


      <section data-testid="movies-section">
        <ul data-testid="movies-list">
          {filteredActors.map((actor) => {
            return <li key={`actor-${actor.name}`}>{actor.name}</li>
            // return <Card key={movie.id} details={movie} type='movie' />;
          })}
        </ul>
      </section>
    </div>
  );
};