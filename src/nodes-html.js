const qSelector = (selector) => document.querySelector(selector);

// Sections
const headerSection = '';
const trendingSection = qSelector('#home-view');
const genericSection = qSelector('#generic-grid-view');
const movieSection = qSelector('#movie-view');

// List & Containers
const searchForm = qSelector('#search-form');
const trendingMoviesList = qSelector('.trending-movies');
const categoriesList = qSelector('.category-list');
const watchLaterList = qSelector('.watch-later-movies .grid-movies');
const genericGridMoviesList = qSelector('#generic-grid-view .grid-movies');
const movieCategoriesList = qSelector('#movie-view .movie .movie-info .movie-categories');
const suggestedMoviesList = qSelector('#movie-view .suggested-movies');

// Elements
// TODO Crear un header arrow
// const arrowBtn = qSelector('.header-arrow');
const genericTitle = qSelector('.generic-title h2');

const searchFormInput = qSelector('#search-form input');
const searchFormBtn = qSelector('#search-form button');

// Un btn para mostrar mas en tendencias
// const trendingBtn = document.querySelector('.trendingPreview-btn');

const movieInfoTitle = qSelector('#movie-info-title');
const movieInfoRating = qSelector('.movie-rating span');
const movieInfoDescription = qSelector('.movie-description p');
// TODO Add movie info categories