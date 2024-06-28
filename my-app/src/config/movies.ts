import * as images from '../assets/images/images';
import { Movie, ParentGuideRatings } from '../types/models';
import * as reviews2024 from './movieReviews/2024Reviews';

// NOTE: change recent review to false after counter hits 4

export const movies: Movie[] = [
  {
    actors: ['Glen Powell', 'Sydney Sweeney', 'Gata'],
    favorite: true,
    genre: 'Comedy',
    id: 'anyone-but-you',
    myRating: 8,
    poster: images.anyoneButYouImage,
    rating: 'R' as ParentGuideRatings,
    recentlyAddedReview: false,
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
    recentlyAddedReview: false,
    releaseYear: 2023,
    review: reviews2024.aquamanTwoReview,
    runTime: 124,
    seen: '2024',
    title: 'Aquaman and the Lost Kingdom',
  },
  {
    actors: ['Xolo Maridueña', 'Bruna Marquezine', 'George Lopez'],
    favorite: false,
    genre: 'Comedy',
    id: 'blue-beetle',
    myRating: 3,
    poster: images.blueBeetleImage,
    rating: 'PG-13',
    recentlyAddedReview: true, // 2
    releaseYear: 2023,
    review: reviews2024.blueBeetleReview,
    runTime: 127,
    seen: '2024',
    title: 'Blue Beetle',
  },
  {
    actors: ['Robbie Amell', 'Stephen Amell', 'Sung Kang'],
    favorite: false,
    genre: 'Action',
    id: 'code-8',
    myRating: 7,
    poster: images.codeEight,
    rating: 'NR',
    recentlyAddedReview: false,
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
    recentlyAddedReview: false,
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
    recentlyAddedReview: false,
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
    recentlyAddedReview: false,
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
    recentlyAddedReview: false,
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
    recentlyAddedReview: false,
    releaseYear: 2006,
    review: reviews2024.theLibrarianSolomonsMinesReview,
    runTime: 92,
    seen: '2024',
    title: "The Librarian: Return to King Solomon's Mine",
  },
  {
    actors: ['Noah Wyle', 'Stana Katic', 'Bob Newhart'],
    favorite: false,
    genre: 'Comedy',
    id: 'the-librarian-the-curse-of-the-judas-chalice',
    myRating: 6,
    poster: images.librarianThreeImage,
    rating: 'TV-PG',
    recentlyAddedReview: false,
    releaseYear: 2008,
    review: reviews2024.theLibrarianJudasReview,
    runTime: 90,
    seen: '2024',
    title: 'The Librarian: The Curse of the Judas Chalice',
  },
  {
    actors: ['Noah Wyle', 'Stana Katic', 'Bob Newhart'],
    favorite: false,
    genre: 'Comedy',
    id: 'little-italy',
    myRating: 8,
    poster: images.littleItalyImage,
    rating: 'R',
    recentlyAddedReview: true, // 3
    releaseYear: 2018,
    review: reviews2024.littleItalyReview,
    runTime: 102,
    seen: '2024',
    title: 'Little Italy',
  },
  {
    actors: ['Dakota Johnson', 'Sydney Sweeney', 'Isabela Merced'],
    favorite: false,
    genre: 'Sci-Fi',
    id: 'madame-web',
    myRating: 1,
    poster: images.madameWebImage,
    rating: 'PG-13',
    recentlyAddedReview: false,
    releaseYear: 2024,
    review: reviews2024.madameWebReview,
    runTime: 116,
    seen: '2024',
    title: 'Madame Web',
  },
  {
    actors: ['Grant Gustin', 'Lucy Hale', 'Nore Davis'],
    favorite: false,
    genre: 'Comedy',
    id: 'puppy-love',
    myRating: 5,
    poster: images.puppyLoveImage,
    rating: 'R',
    recentlyAddedReview: false,
    releaseYear: 2023,
    review: reviews2024.puppyLoveReview,
    runTime: 106,
    seen: '2024',
    title: 'Puppy Love',
  },
  {
    actors: ['Sofia Boutella', 'Charlie Hunnam', 'Ed Skrein'],
    favorite: false,
    genre: 'Sci-Fi',
    id: 'rebel-moon-child-of-fire',
    poster: images.rebelMoonImage,
    myRating: 5,
    rating: 'PG-13',
    recentlyAddedReview: false,
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
    recentlyAddedReview: false,
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
    recentlyAddedReview: false,
    releaseYear: 2024,
    review: reviews2024.roadhouseReview,
    runTime: 121,
    seen: '2024',
    title: 'Roadhouse',
  },
  {
    actors: ['Glen Powell', 'Zoey Duetch', 'Pete Davidson'],
    favorite: false,
    genre: 'Comedy',
    id: 'set-it-up',
    myRating: 8,
    poster: images.setItUpImage,
    rating: 'TV-14',
    recentlyAddedReview: false,
    releaseYear: 2018,
    review: reviews2024.setItUpReview,
    runTime: 105,
    seen: '2024',
    title: 'Set It Up',
  },
  {
    actors: ['Zac Efron', 'Miles Teller', 'Michael B. Jordan'],
    favorite: true,
    genre: 'Comedy',
    id: 'that-awkward-moment',
    myRating: 9.5,
    poster: images.thatAwkwardMomentImage,
    rating: 'R',
    recentlyAddedReview: true, //1
    releaseYear: 2014,
    review: reviews2024.thatAwkwardMomentReview,
    runTime: 95,
    seen: '2024',
    title: 'That Awkward Moment',
  },
  {
    actors: ['Timothée Chalamet', 'Gustave Die', 'Keegan-Michael Key'],
    favorite: false,
    genre: 'Comedy',
    id: 'wonka',
    myRating: 8,
    poster: images.wonkaImage,
    rating: 'PG',
    recentlyAddedReview: false,
    releaseYear: 2023,
    review: reviews2024.wonkaReview,
    runTime: 116,
    seen: '2024',
    title: 'Wonka',
  },
];
