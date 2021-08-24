const inputOne = document.querySelector('#side1');
const inputTwo = document.querySelector('#side2');
const checkBtn = document.querySelector('.checkBtn');
const textArea = document.querySelector('#output');

checkBtn.addEventListener('click', () => {
	inputOneValue = inputOne.value;
	inputTwoValue = inputTwo.value;
	if (inputOneValue && inputTwoValue) {
		sumOfSides = inputOneValue ** 2 + inputTwoValue ** 2;
		const hypotenuse = Math.sqrt(sumOfSides);
		if (hypotenuse % 1 === 0) {
			textArea.innerText = 'The length of hypotenuse is ' + hypotenuse;
		} else {
			textArea.innerText = 'The length of hypotenuse is ' + hypotenuse.toFixed(3);
		}
	} else {
		textArea.innerText = 'Enter valid number';
	}
});
