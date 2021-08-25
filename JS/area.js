const inputOne = document.querySelector('#base');
const inputTwo = document.querySelector('#height');
const checkBtn = document.querySelector('.checkBtn');
const textArea = document.querySelector('#output');

checkBtn.addEventListener('click', () => {
	const inputOneValue = inputOne.value;
	const inputTwoValue = inputTwo.value;
	if (inputOneValue && inputTwoValue) {
		inputOne.value = '';
		inputTwo.value = '';
		const area = (inputOneValue * inputTwoValue) / 2;
		textArea.innerText = 'The area of triangle is ' + area + ' sq. units';
	} else {
		textArea.innerText = 'Enter valid number in input field';
	}
});
