import * as images from '../assets/images/images';
import { Movie, ParentGuideRatings } from '../types/models';
import * as reviews2024 from './movieReviews/2024Reviews';

export const movies: Movie[] = [
  {
    actors: ['Glen Powell', 'Sydney Sweeney', 'Gata'],
    favorite: true,
    genre: 'Comedy',
    id: 'anyone-but-you',
    myRating: 8,
    poster: images.anyoneButYouImage,
    rating: 'R' as ParentGuideRatings,
    releaseYear: 2023,
    review: reviews2024.anyoneButYouReview,
    runTime: 103,
    seen: '2024',
    title: 'Anyone But You',
  },
  {
    actors: ['Jason Momoa', 'Patrick Wilson', 'Yahya Abdul-Mateen II'],
    favorite: false,
    genre: 'Comedy',
    id: 'aquaman-and-the-lost-kingdom',
    myRating: 3,
    poster: images.aquaman_two,
    rating: 'PG-13',
    releaseYear: 2023,
    review: reviews2024.aquamanTwoReview,
    runTime: 124,
    seen: '2024',
    title: 'Aquaman and the Lost Kingdom',
  },
  {
    actors: ['Robbie Amell', 'Stephen Amell', 'Sung Kang'],
    favorite: false,
    genre: 'Action',
    id: 'code-8',
    myRating: 7,
    poster: images.codeEight,
    rating: 'NR',
    releaseYear: 2019,
    review: reviews2024.codeEightReview,
    runTime: 98,
    seen: '2024',
    title: 'Code 8',
  },
  {
    actors: ['Robbie Amell', 'Stephen Amell', 'Alex Mallari Jr.'],
    favorite: false,
    genre: 'Action',
    id: 'code-8-part-2',
    myRating: 8,
    poster: images.codeEightPartTwo,
    rating: 'TV-MA',
    releaseYear: 2024,
    review: reviews2024.codeEightTwoReview,
    runTime: 100,
    seen: '2024',
    title: 'Code 8',
  },
  {
    actors: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson'],
    favorite: false,
    genre: 'Sci-Fi',
    id: 'dune',
    myRating: 8,
    poster: images.duneImage,
    rating: 'PG-13',
    releaseYear: 2021,
    review: reviews2024.duneReview,
    runTime: 155,
    seen: '2024',
    title: 'Dune',
  },
  {
    actors: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson'],
    favorite: true,
    genre: 'Sci-Fi',
    id: 'dune-part-two',
    myRating: 9,
    poster: images.duneTwoImage,
    rating: 'PG-13',
    releaseYear: 2024,
    review: reviews2024.duneTwoReview,
    runTime: 166,
    seen: '2024',
    title: 'Dune 2',
  },
  {
    actors: ['Noah Wyle', 'Sonya Walger', 'Bob Newhart'],
    favorite: false,
    genre: 'Comedy',
    id: 'the-librarian-quest-for-the-spear',
    myRating: 7,
    poster: images.librarianOneImage,
    rating: 'NR',
    releaseYear: 2004,
    review: reviews2024.theLibrarianSpearReview,
    runTime: 92,
    seen: '2024',
    title: 'The Librarian: Quest for the Spear',
  },
  {
    actors: ['Noah Wyle', 'Gabrielle Anwar', 'Bob Newhart'],
    favorite: true,
    genre: 'Comedy',
    id: 'the-librarian-return-to-king-solomons-mine',
    myRating: 7,
    poster: images.librarianTwoImage,
    rating: 'TV-PG',
    releaseYear: 2006,
    review: reviews2024.theLibrarianSolomonsMinesReview,
    runTime: 92,
    seen: '2024',
    title: "The Librarian: Return to King Solomon's Mine",
  },
  {
    actors: ['Noah Wyle', 'Stana Katic', 'Bob Newhart'],
    favorite: true,
    genre: 'Comedy',
    id: 'the-librarian-the-curse-of-the-judas-chalice',
    myRating: 6,
    poster: images.librarianThreeImage,
    rating: 'TV-PG',
    releaseYear: 2008,
    review: reviews2024.theLibrarianJudasReview,
    runTime: 90,
    seen: '2024',
    title: 'The Librarian: The Curse of the Judas Chalice',
  },
  {
    actors: ['Dakota Johnson', 'Sydney Sweeney', 'Isabela Merced'],
    favorite: false,
    genre: 'Sci-Fi',
    id: 'madame-web',
    myRating: 1,
    poster: images.madameWebImage,
    rating: 'PG-13',
    releaseYear: 2024,
    review: reviews2024.madameWebReview,
    runTime: 116,
    seen: '2024',
    title: 'Madame Web',
  },
  {
    actors: ['Sofia Boutella', 'Charlie Hunnam', 'Ed Skrein'],
    favorite: false,
    genre: 'Sci-Fi',
    id: 'rebel-moon-child-of-fire',
    poster: images.rebelMoonImage,
    myRating: 5,
    rating: 'PG-13',
    releaseYear: 2023,
    review: reviews2024.rebelMoonPartOneReview,
    runTime: 133,
    seen: '2024',
    title: 'Rebel Moon - Part One: A Child of Fire',
  },
  {
    actors: ['Zac Efron', 'John Cena', 'Andrew Santino'],
    favorite: false,
    genre: 'Comedy',
    id: 'ricky-stanicky',
    myRating: 5,
    poster: images.rickyStanickyImage,
    rating: 'R',
    releaseYear: 2024,
    review: reviews2024.rickyStanickyReview,
    runTime: 113,
    seen: '2024',
    title: 'Ricky Stanicky',
  },
  {
    actors: ['Jake Gyllenhaal', 'Daniela Melchior', 'Conor McGregor'],
    favorite: false,
    genre: 'Action',
    id: 'roadhouse',
    myRating: 5,
    poster: images.roadhouseNewImage,
    rating: 'R',
    releaseYear: 2024,
    review: reviews2024.roadhouseReview,
    runTime: 121,
    seen: '2024',
    title: 'Roadhouse',
  },
  {
    actors: ['Timothée Chalamet', 'Gustave Die', 'Keegan-Michael Key'],
    favorite: false,
    genre: 'Comedy',
    id: 'wonka',
    myRating: 8,
    poster: images.wonkaImage,
    rating: 'PG',
    releaseYear: 2023,
    review: reviews2024.wonkaReview,
    runTime: 116,
    seen: '2024',
    title: 'Wonka',
  },
];
