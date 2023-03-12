'use strict';

const genNum = () => {
	let rdm = Math.trunc(Math.random() * 20) + 1;
	console.log(rdm);
	return rdm;
};

let num = genNum();

document.querySelector('.check').addEventListener('click', function () {
	let highScore = Number(document.querySelector('.highscore').textContent);
	let score = Number(document.querySelector('.score').textContent);
	let guess = Number(document.querySelector('.guess').value);

	if (score < 1) {
		document.querySelector('.message').textContent = 'You lost the Game!!';
		return;
	}

	if (guess === num) {
		document.querySelector('.message').textContent = 'Correct number!!';
		document.querySelector('.number').textContent = guess;
		if (score > highScore) {
			document.querySelector('.highscore').textContent = score;
		}
		document.querySelector('body').style.backgroundColor = '#60b347';
		return;
		// document.querySelector('body')
	} else if (guess > num) {
		document.querySelector('.message').textContent = 'Too High!!';
	} else if (guess < num) {
		document.querySelector('.message').textContent = 'Too Low!!';
	}

	score--;
	document.querySelector('.score').textContent = score;
	//   console.log(score, highScore, document.querySelector('.guess').value);
});

document.querySelector('.again').addEventListener('click', function () {
	num = genNum();
	document.querySelector('body').style.backgroundColor = 'rgb(34, 34, 34)';
	document.querySelector('.number').textContent = '?';
	document.querySelector('.score').textContent = 20;
});
