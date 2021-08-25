const checkBtn = document.querySelector('.checkBtn');
const form = document.querySelector('form');
const output = document.querySelector('#output');

const correctAnswers = [
	'deg90',
	'one right angle',
	'obtuse',
	'hypotenuse',
	'true',
	'deg180',
	'pythagoras',
	'polygon',
	'three',
	'scalene',
];

form.addEventListener('submit', (e) => {
	e.preventDefault();
});

checkBtn.addEventListener('click', (e) => {
	let score = 0;
	let index = 0;
	const values = new FormData(form);
	for (let value of values.values()) {
		if (value === correctAnswers[index]) {
			score += 1;
		}
		index += 1;
		output.innerText = 'Your final score is ' + score;
	}
});
