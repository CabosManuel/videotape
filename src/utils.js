// JSDoc, anotaciones para no perder el autocompletado
/**
 * @param id {string}
 * @return {HTMLElement}
 */
const qSelector = (selector) => document.querySelector(selector);

function resetView(viewName) {
	switch (viewName) {
		case 'home':
			trendingSection.classList.remove('hide');
			
			genericTitle.classList.add('hide');
			searchForm.classList.remove('hide');

			genericSection.classList.add('hide');
			movieSection.classList.add('hide');
			break;
	}
}

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