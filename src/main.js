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
		const trendingMoviesContainer = document.querySelector('#home-view .trending-movies');

		const trendingMovieDiv = document.createElement('div');
		trendingMovieDiv.classList.add('trending-movie');

		const movieImg = document.createElement('img');
		movieImg.setAttribute('alt', movie.title);
		movieImg.setAttribute('src', `${URL_IMG}${movie.poster_path}`);

		trendingMovieDiv.appendChild(movieImg);
		trendingMoviesContainer.appendChild(trendingMovieDiv);
	});
}

async function getCategories() {
	const { data } = await axiosRequest('genre/movie/list');
	const categories = data.genres;
	console.log(categories);

	categories.forEach(category => {
		const categoriesContainer = document.querySelector('#home-view .category-list');
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

getTrendingMovies();
getCategories();

// Utilities ----------------------------------------------------------------
function getFaIconByCategoryId(categoryId) {
	let faIcon = 'fa-film';

	switch (categoryId) {
		case 28: faIcon = 'fa-explosion'; break; // Action
		case 12: faIcon = 'fa-compass'; break; //Adventure
		case 16: faIcon = 'fa-pencil'; break; // Animation
		case 35: faIcon = 'fa-face-laugh-squint'; break; // Comedy
		case 80: faIcon = 'fa-gun'; break; // Crime
		case 99: faIcon = 'fa-book'; break; // Documentary
		case 18: faIcon = 'fa-masks-theater'; break; // Drama
		case 10751: faIcon = 'fa-house'; break; // Family
		case 14: faIcon = 'fa-dragon'; break; // Fantasy
		case 36: faIcon = 'fa-building-columns'; break; // History
		case 27: faIcon = 'fa-ghost'; break; // Horror
		case 10402: faIcon = 'fa-music'; break; // Music
		case 9648: faIcon = 'fa-user-secret'; break; // Mystery
		case 10749: faIcon = 'fa-heart'; break; // Romance
		case 878: faIcon = 'fa-robot'; break; // Sci-Fi
		case 10770: faIcon = 'fa-tv'; break; // TV Movie
		case 53: faIcon = 'fa-face-surprise'; break; // Thriller
		case 10752: faIcon = 'fa-person-rifle'; break; // War
		case 37: faIcon = 'fa-horse'; break; // Western
		default: faIcon = 'fa-film';
	}

	return faIcon;
}