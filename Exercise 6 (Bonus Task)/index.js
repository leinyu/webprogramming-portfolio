let score = 0;
let lives = 3;
let correctAnswer = "";

// DOM Elements
const rgbTarget = document.getElementById('rgb-target');
const optionsContainer = document.getElementById('options-container');
const messageDisplay = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
const resetBtn = document.getElementById('reset-btn');

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function startRound() {
    messageDisplay.textContent = "Which color matches?";
    optionsContainer.innerHTML = "";
    
    const colors = [generateRandomColor(), generateRandomColor(), generateRandomColor()];
    correctAnswer = colors[Math.floor(Math.random() * 3)];
    rgbTarget.textContent = correctAnswer;

    colors.forEach(color => {
        const div = document.createElement('div');
        div.classList.add('color-option');
        div.style.backgroundColor = color;
        
        div.addEventListener('click', function() {
            if (color === correctAnswer) {
                score++;
                scoreDisplay.textContent = score;
                messageDisplay.textContent = "Correct!";
                setTimeout(startRound, 1000); //
            } else {
                lives--;
                livesDisplay.textContent = lives;
                messageDisplay.textContent = "Wrong!";
                if (lives <= 0) gameOver();
            }
        });
        optionsContainer.appendChild(div);
    });
}

function gameOver() {
    messageDisplay.textContent = `Game Over! Final Score: ${score}`;
    optionsContainer.innerHTML = "";
    resetBtn.style.display = "inline-block"
}

resetBtn.addEventListener('click', () => {
    score = 0;
    lives = 3;
    scoreDisplay.textContent = score;
    livesDisplay.textContent = lives;
    resetBtn.style.display = "none";
    startRound();
});

startRound();