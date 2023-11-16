window.addEventListener('DOMContentLoaded', navigator, false); // DOM listo
window.addEventListener('hashchange', navigator, false); // Cambio el hash # de la URL

function navigator() {
	console.log( { location });

	// Si estamos en #home, ejecutar homePage()
	if (location.hash.startsWith('#home')) {
		homePage();
	} else if (location.hash.startsWith('#search=')) {
		searchPage();
	} else if (location.hash.startsWith('#category=')) {
		categoryPage();
	} else if (location.hash.startsWith('#movie=')) {
		moviePage();
	} else { // Si no estamos en ningún hash, cargar homePage()
		homePage();
	}
	
	location.hash
}

// En Home, ejecutar getTrendingMovies() y getCategories()
function homePage() {
	console.log('Home');

	getTrendingMovies();
	getCategories();
}

function searchPage() {
	console.log('Search');
}

function categoryPage() {
	console.log('Category');
}

function moviePage() {
	console.log('Movie');
}