import React from "react";
import { Background, Navbar } from "../../common";

export const Books = () => {
  return (
    <div data-testid="movies">
      <Navbar />

      <Background data-testid='background'>
        <section data-testid="movies-section">
          <p>add books list here</p>
        </section>
      </Background>
    </div>
  )
}