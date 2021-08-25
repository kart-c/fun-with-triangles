const inputOne = document.querySelector('#side1');
const inputTwo = document.querySelector('#side2');
const checkBtn = document.querySelector('.checkBtn');
const textArea = document.querySelector('#output');

checkBtn.addEventListener('click', () => {
	let inputOneValue = inputOne.value;
	let inputTwoValue = inputTwo.value;
	if (inputOneValue && inputTwoValue) {
		sumOfSides = inputOneValue ** 2 + inputTwoValue ** 2;
		const hypotenuse = Math.sqrt(sumOfSides);
		if (hypotenuse % 1 === 0) {
			inputOne.value = '';
			inputTwo.value = '';
			textArea.innerText = 'The length of hypotenuse is ' + hypotenuse + ' units';
		} else {
			inputOne.value = '';
			inputTwo.value = '';
			textArea.innerText = 'The length of hypotenuse is ' + hypotenuse.toFixed(3) + ' units';
		}
	} else {
		textArea.innerText = 'Enter valid number';
	}
});
