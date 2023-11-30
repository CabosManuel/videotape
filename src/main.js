const URL_IMG = 'https://image.tmdb.org/t/p/w300';

const axiosRequest = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
  },
	params: {
		'api_key': API_KEY,
	},
});

// Functions to generate HTML generics for movies and categories ------------------------
function createVideotapeRowMovies(container, movies) {
	movies.forEach(movie => {
		if (validateMovieHasContent(movie)) {
			const trendingMovieDiv = document.createElement('div');
			trendingMovieDiv.classList.add('videotape-movie');

			trendingMovieDiv.addEventListener('click', () => {
				location.hash = `${MOVIE_HASH}=${movie.id}`;
			});

			const movieImg = document.createElement('img');
			movieImg.setAttribute('alt', movie.title);
			movieImg.setAttribute('src', `${URL_IMG}${movie.poster_path}`);

			// TODO JS: Add btn watch later
			// TODO JS: Add svg with ranking position in trending

			trendingMovieDiv.appendChild(movieImg);
			container.appendChild(trendingMovieDiv);
		}
	});
}

function createGridMovies(movies) {
	movies.forEach(movie => {
		if (validateMovieHasContent(movie)) {
			const gridMovieDiv = document.createElement('div');
			gridMovieDiv.classList.add('grid-movie');

			gridMovieDiv.addEventListener('click', () => {
				location.hash = `${MOVIE_HASH}=${movie.id}`;
			});

			const movieImg = document.createElement('img');
			movieImg.setAttribute('alt', movie.title);

			const moviePoster =
				(movie.poster_path == null) ? '../img/movie-poster-not-found.png' :
				`${URL_IMG}${movie.poster_path}`
			movieImg.setAttribute('src', moviePoster);

			// TODO JS: Add btn watch later (category view)

			gridMovieDiv.appendChild(movieImg);
			genericGridMoviesList.appendChild(gridMovieDiv);
		}
	});
}

function createCategories(container, categories) {
	categories.forEach(category => {
		const categoryLi = document.createElement('li');
		categoryLi.classList.add('category');
		categoryLi.setAttribute('id', category.id);

		const categoryText = document.createTextNode(category.name.toUpperCase());
		const categoryIcon = document.createElement('i');
		categoryIcon.classList.add('fa-solid');
		categoryIcon.classList.add(getFaIconByCategoryById(category.id));

		categoryLi.appendChild(categoryIcon);
		categoryLi.appendChild(categoryText);

		categoryLi.addEventListener('click', () => {
			location.hash = `#category=${category.id}-${category.name.toLowerCase()}`;
		});

		container.appendChild(categoryLi);
	});
}

// All functions to request movies and categories ---------------------------------------
async function getTrendingMovies() {
	const { data } = await axiosRequest('trending/movie/week');
	const movies = data.results;
	console.log(movies);

	// Limpiar trending-movies antes de agregarlas
	trendingMoviesList.innerHTML = '';

	createVideotapeRowMovies(trendingMoviesList, movies);
}

async function getCategories() {
	const { data } = await axiosRequest('genre/movie/list');
	const categories = data.genres;
	console.log('main.js categories', categories);

	// Limpiar categories-list antes de agregarlas
	categoriesList.innerHTML = "";

	createCategories(categoriesList, categories);
}

async function getMoviesByCategory(category) {
	const { data } = await axiosRequest('discover/movie', {
		params: { with_genres: category.id }
	});

	const movies = data.results;

	// Limpiar grid-movies
	genericGridMoviesList.innerHTML = '';

	// Modificar subtitulo
	genericSubtitle.textContent = category.name.toUpperCase();
	genericSubtitle.classList.add('subtitle');
	// Agregar ícono al subtitulo
	const genericTitleIcon = document.createElement('i');
	genericTitleIcon.classList.add('fa-solid');
	genericTitleIcon.classList.add(getFaIconByCategoryById(category.id));
	genericSubtitle.prepend(genericTitleIcon);

	// Agregar películas al grid
	createGridMovies(movies);
}

async function getMoviesBySearchQuery(searchQuery) {
	const { data } = await axiosRequest('search/movie', {
		params: { query: searchQuery }
	});

	const movies = data.results;
	console.log('main.js getMoviesBySearchQuery()', movies);

	// Limpiar grid-movies
	genericGridMoviesList.innerHTML = '';

	// Modificar subtitulo
	genericSubtitle.textContent = `RESULTS FOR: ${searchQuery.toUpperCase()}`;
	genericSubtitle.classList.add('subtitle');

	createGridMovies(movies);
}

async function getMovieById(movieId) {
	// objetoQueRecibimos: renombreObjeto
	const { data: movie } = await axiosRequest(`movie/${movieId}`);

	movieInfoPoster.setAttribute('alt', movie.name);
	movieInfoPoster.setAttribute('src', `${URL_IMG}${movie.poster_path}`);

	movieInfoTitle.textContent = movie.title;
	movieInfoRating.textContent = movie.vote_average.toFixed(1);
	movieInfoDescription.textContent = movie.overview;

	movieInfoCategoriesList.innerHTML = '';
	createCategories(movieInfoCategoriesList, movie.genres);

	getSuggestedMoviesById(movieId);
}

async function getSuggestedMoviesById(movieId) {
	const { data } = await axiosRequest(`movie/${movieId}/similar`);

	const suggestedMovies = data.results;

	suggestedMoviesList.innerHTML = '';
	createVideotapeRowMovies(suggestedMoviesList, suggestedMovies);
}