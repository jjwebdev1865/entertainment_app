import React from "react";
import { Background } from "../../common";
import { Navbar } from "../../components";

export const VideoGames = () => {
  return (
    <div data-testid="video-games">
      <Navbar />

      <Background data-testid='background'>
        <section data-testid="video-games-section">
          <p>add video games list here</p>
        </section>
      </Background>
    </div>
  );
};