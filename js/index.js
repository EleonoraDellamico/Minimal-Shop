console.log('eli');
const iconMenu = document.querySelector('icon');

function ToggleMenu() {
	let element = document.getElementById('container-menu');
	element.classList.toggle('showMenu');
}

iconMenu.addEventListener('click', ToggleMenu);
