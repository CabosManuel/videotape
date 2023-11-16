window.addEventListener('DOMContentLoaded', navigator, false); // DOM listo
window.addEventListener('hashchange', navigator, false); // Cambio el hash # de la URL

function navigator() {
	console.log( { location });

	// Si en la URL agrega #home, cargará home
	if (location.hash.startsWith(HOME_HASH)) {
		chargeHomeView();
	} else if (location.hash.startsWith(CATEGORY_HASH)) {
		chargerCategoryView();
	} else if (location.hash.startsWith(SEARCH_HASH)) {
		chargeSearchView();
	} else if (location.hash.startsWith(MOVIE_HASH)) {
		chargeMovieView();
	} else { // Si no estamos en ningún hash, cargar home
		chargeHomeView();
	}

	location.hash
}
// Charge views ----------------------------------------------------------------
function chargeHomeView() {
	console.log('Home view');

	resetView(HOME_HASH);

	getTrendingMovies();
	getCategories();
}

function chargerCategoryView() {
	console.log('Category view');

	resetView(CATEGORY_HASH);
}

function chargeSearchView() {
	console.log('Search view');

	resetView(SEARCH_HASH);
}

function chargeMovieView() {
	console.log('Movie view');

	resetView(MOVIE_HASH);
}

