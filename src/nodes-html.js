const qSelector = (selector) => document.querySelector(selector);

// Sections
const headerSection = '';
const trendingSection = qSelector('#home-view');
const categoriesSection = qSelector('#category-view');
const searchSection = qSelector('#search-view');
const movieSection = qSelector('#movie-view');

// List & Containers
const searchForm = qSelector('#search-form');
const trendingMoviesList = qSelector('.trending-movies');
const categoriesList = qSelector('.category-list');
const watchLaterList = qSelector('.watch-later-movies .grid-movies');
const categoryMoviesList = qSelector('#category-view .grid-movies');
const searchMoviesList = qSelector('#search-view .grid-movies');
const movieCategoriesList = qSelector('#movie-view .movie .movie-info .movie-categories');
const suggestedMoviesList = qSelector('#movie-view .suggested-movies');

// Elements
// TODO Crear un header arrow
// const arrowBtn = qSelector('.header-arrow');