titleVideotape.addEventListener('click', () => { location.hash = HOME_HASH; });

arrowBtn.addEventListener('click', () => {
	history.back();
});

searchFormBtn.addEventListener('click', (e) => {
	if (searchFormInput.value.length > 0) {
		location.hash = `${SEARCH_HASH}=${searchFormInput.value}`;
	}

	e.preventDefault(); // Fix para que funcione correctamente el history.back()

	/* El problema que pasaba antes del fix:

	Cuando entro a categoría o busco algo, al cambiar el location parece que lo hace 
	2 veces y eso se queda guardado en el history por eso tengo que regresar -2
	(Adicionalmente, cuando uso el botón de retroceder del navegador, también pasa lo mismo) */
});

window.addEventListener('DOMContentLoaded', navigator, false); // DOM listo
window.addEventListener('hashchange', navigator, false); // Cambio el hash # de la URL

function navigator() {
	console.log( 'navigation.js navigator()', { location });

	// Si en la URL agrega #home, cargará home
	if (location.hash.startsWith(HOME_HASH)) {
		loadHomeView();
	} else if (location.hash.startsWith(CATEGORY_HASH)) {
		loadCategoryView();
	} else if (location.hash.startsWith(SEARCH_HASH)) {
		loadSearchView();
	} else if (location.hash.startsWith(MOVIE_HASH)) {
		loadMovieView();
	} else { // Si no estamos en ningún hash, cargar home
		loadHomeView();
	}

	// Fix scroll position
	window.scrollTo(0, 0);
}

// Load views ----------------------------------------------------------------
function loadHomeView() {
	console.log('Home view');

	resetView(HOME_HASH);

	getTrendingMovies();
	getCategories();
}

function loadCategoryView() {
	console.log('Category view');

	resetView(CATEGORY_HASH);

	// Capturar categoría del hash y mostrar sus películas
	const categoryIdName = decodeURI(location.hash.split('=')[1]);
	const category = {
		id: categoryIdName.split('-')[0],
		name: categoryIdName.split('-')[1]
	};
	getMoviesByCategory(category);
}

function loadSearchView() {
	console.log('Search view');

	resetView(SEARCH_HASH);

	// Capturar categoría del hash y mostrar sus películas
	const searchQuery = decodeURI(location.hash.split('=')[1]);
	getMoviesBySearchQuery(searchQuery);
}

function loadMovieView() {
	console.log('Movie view');

	resetView(MOVIE_HASH);
}

