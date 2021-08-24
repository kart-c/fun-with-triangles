const inputs = document.querySelectorAll('input');
const checkBtn = document.querySelector('.checkBtn');
const textArea = document.querySelector('#output');

checkBtn.addEventListener('click', () => {
	let sum = 0;
	for (let i = 0; i < inputs.length; i++) {
		const values = inputs[i].value;
		if (values) {
			sum += Number(values);
			if (sum === 180) {
				textArea.innerText = 'Yes these angles will form a triangle';
			} else {
				textArea.innerText = 'No these angles will not form a triangle';
			}
		} else {
			textArea.innerText = 'Please enter valid numbers';
		}
	}
});
