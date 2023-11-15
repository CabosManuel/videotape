const URL = 'https://api.themoviedb.org/3/';
const URL_IMG = 'https://image.tmdb.org/t/p/w300';

async function getTrendingMoviesPreview() {
	const response = await fetch(`${URL}/trending/movie/week?api_key=${API_KEY}`); // &language=en-US
	const data = await response.json();

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

getTrendingMoviesPreview();