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


// TODO JS: Abstraer funciones para crear movies y categories?

async function getTrendingMovies() {
	const { data } = await axiosRequest('trending/movie/week');
	const movies = data.results;
	console.log(movies);

	// Limpiar trending-movies antes de agregarlas
	trendingMoviesList.innerHTML = '';

	movies.forEach(movie => {
		const trendingMovieDiv = document.createElement('div');
		trendingMovieDiv.classList.add('trending-movie');

		const movieImg = document.createElement('img');
		movieImg.setAttribute('alt', movie.title);
		movieImg.setAttribute('src', `${URL_IMG}${movie.poster_path}`);

		// TODO JS: Add btn watch later
		// TODO JS: Add svg with ranking position in trending

		trendingMovieDiv.appendChild(movieImg);
		trendingMoviesList.appendChild(trendingMovieDiv);
	});
}

async function getCategories() {
	const { data } = await axiosRequest('genre/movie/list');
	const categories = data.genres;
	console.log(categories);

	// Limpiar categories-list antes de agregarlas
	categoriesList.innerHTML = "";

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

		categoriesList.appendChild(categoryLi);
	});
}

function createGridMovies(movies) {
	movies.forEach(movie => {
		const movieDiv = document.createElement('div');
		movieDiv.classList.add('grid-movie');

		const movieImg = document.createElement('img');
		movieImg.setAttribute('alt', movie.title);
		movieImg.setAttribute('src', `${URL_IMG}${movie.poster_path}`);

		// TODO JS: Add btn watch later (category view)

		movieDiv.appendChild(movieImg);
		genericGridMoviesList.appendChild(movieDiv);
	});
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

	// Limpiar grid-movies
	genericGridMoviesList.innerHTML = '';

	// Modificar subtitulo
	genericSubtitle.textContent = `RESULTS FOR: ${searchQuery.toUpperCase()}`;
	genericSubtitle.classList.add('subtitle');

	createGridMovies(movies);
}