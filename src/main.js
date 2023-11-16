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

	movies.forEach(movie => {
		// const trendingMoviesList = document.querySelector('#home-view .trending-movies');

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

	categories.forEach(category => {
		const categoriesContainer = document.querySelector('#home-view .categories-list');
		const categoryLi = document.createElement('li');

		categoryLi.classList.add('category');
		categoryLi.setAttribute('id', category.id);
		const categoryText = document.createTextNode(category.name.toUpperCase());
		const categoryIcon = document.createElement('i');
		categoryIcon.classList.add('fa-solid');
		categoryIcon.classList.add(getFaIconByCategoryId(category.id));

		categoryLi.appendChild(categoryIcon);
		categoryLi.appendChild(categoryText);
		categoriesContainer.appendChild(categoryLi);

	});
}