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

async function getMoviesByCategoryId(categoryId) {
	const { data } = await axiosRequest('discover/movie');

	// TODO todo lo demás xD
}