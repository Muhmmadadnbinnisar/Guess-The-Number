let lives = 3;
let randomNumber = Math.floor(Math.random() * 10) + 1;
const hearts = document.querySelector('.hearts');
const message = document.getElementById('message');

document.getElementById('guessBtn').addEventListener('click', () => {
    const guess = parseInt(document.getElementById('guessInput').value);
    if (guess < 1 || guess > 10 || isNaN(guess)) return;

    if (guess === randomNumber) {
        message.textContent = `🎉 You Win! The number was ${randomNumber}.`;
        endGame();
    } else {
        lives--;
        hearts.textContent = '❤️'.repeat(lives);
        message.textContent = lives ? `Wrong! Try again. Lives left: ${lives}` : `😞 Game Over! The number was ${randomNumber}.`;
        if (lives <= 0) endGame();
    }
});

document.getElementById('restartBtn').addEventListener('click', restartGame);

function endGame() {
    document.getElementById('guessInput').disabled = true;
    document.getElementById('guessBtn').disabled = true;
    document.getElementById('restartBtn').style.display = 'inline-block';
}

function restartGame() {
    lives = 3;
    randomNumber = Math.floor(Math.random() * 10) + 1;
    hearts.textContent = '❤️❤️❤️';
    message.textContent = '';
    document.getElementById('guessInput').disabled = false;
    document.getElementById('guessBtn').disabled = false;
    document.getElementById('restartBtn').style.display = 'none';
    document.getElementById('guessInput').value = '';
}
