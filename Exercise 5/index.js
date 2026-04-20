const ttsButton = document.getElementById('tts-button');
const ttsInput = document.getElementById('tts-input');

ttsButton.addEventListener('click', () => {
    const text = ttsInput.value;
    if (text.trim() !== '') {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.pitch = 1;
        utterance.rate = 0.9; 
        window.speechSynthesis.speak(utterance);
    }
});

const allSamples = [
    { id: 10, title: "Aghhhhh", file: "10.mp3", time: "11.0" },
    { id: 11, title: "Dan", file: "11.mp3", time: "0.5" },
    { id: 12, title: "Back of the net", file: "12.mp3", time: "8.00" },
    { id: 13, title: "Bang out of order", file: "13.mp3", time: "2.00" },
    { id: 14, title: "Jurassic Park", file: "14.mp3", time: "4.00" },
    { id: 15, title: "Smell my cheese", file: "15.mp3", time: "1.91" },
    { id: 16, title: "Goal", file: "16.mp3", time: "1.49" },
    { id: 17, title: "Kiss my face", file: "17.mp3", time: "1.07" },
    { id: 18, title: "Hello Partridge", file: "18.mp3", time: "2.25" },
    // Page 2 Items
    { id: 19, title: "Monkey Tennis", file: "19.mp3", time: "1.20" },
    { id: 20, title: "Aha!!", file: "20.mp3", time: "0.85" }
];

let currentPage = 0;
const itemsPerPage = 9;

function renderGrid() {
    const board = document.getElementById('soundboard');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    board.innerHTML = "";
    
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = allSamples.slice(start, end);

    pageItems.forEach(s => {
        const card = document.createElement('div');
        card.className = 'sample-card';
        card.onclick = () => {
            const player = document.getElementById('audio-player');
            player.src = `Audio Sampler/${s.file}`;
            player.play();
        };
        card.innerHTML = `
            <span class="id-num">${s.id}.</span>
            <h3>${s.title}</h3>
            <p class="duration">${s.time}s</p>
        `;
        board.appendChild(card);
    });

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = end >= allSamples.length;
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentPage--;
    renderGrid();
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentPage++;
    renderGrid();
});

renderGrid();