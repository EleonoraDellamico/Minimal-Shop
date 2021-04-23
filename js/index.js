console.log('eli');

function ToggleMenu() {
	const element = document.getElementById('container-menu');
	element.classList.toggle('showMenu');
	element.addEventListener('click', ToggleMenu);
}
