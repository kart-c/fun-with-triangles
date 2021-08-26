const mobileNav = document.querySelector('.mobile-nav');
const mobileNavIcon = document.querySelector('.mobile-nav__icon');
const backdrop = document.querySelector('.backdrop');

mobileNavIcon.addEventListener('click', () => {
	mobileNav.style.display = 'block';
	backdrop.style.display = 'block';
});

backdrop.addEventListener('click', () => {
	mobileNav.style.display = 'none';
	backdrop.style.display = 'none';
});
