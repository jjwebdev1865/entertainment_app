import React from "react";
import { routerType } from "../types/router.types";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Movies from "./Movies";
import TvShows from "./TvShows";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "about-me",
    element: <AboutMe />,
    title: "about me"
  },
  {
    path: 'movies',
    element: <Movies />,
    title: 'movies'
  },
  {
    path: 'tv-shows',
    element: <TvShows />,
    title: 'tv shows'
  }
];

export default pagesData;