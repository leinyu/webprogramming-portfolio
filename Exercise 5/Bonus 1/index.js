const samples = [
    { id: "10", name: "Ah-ha", file: "10.mp3", time: "1.4" },
    { id: "11", name: "Dan", file: "11.mp3", time: "0.5" },
    { id: "12", name: "Back of the net", file: "12.mp3", time: "1.02" },
    { id: "13", name: "Bang out of order", file: "13.mp3", time: "1.38" },
    { id: "14", name: "Email of the Evening", file: "14.mp3", time: "1.49" },
    { id: "15", name: "Scotch Egg", file: "15.mp3", time: "1.91" },
    { id: "16", name: "Im Confused", file: "16.mp3", time: "1.49" },
    { id: "17", name: "Kiss my face", file: "17.mp3", time: "1.07" },
    { id: "18", name: "Hello Partridge", file: "18.mp3", time: "2.25" }
];

const board = document.getElementById('soundboard');

// Loop for buttons
samples.forEach(item => {
    const box = document.createElement('div');
    box.className = 'sample-box';
    
    box.innerHTML = `
        <div class="id-label">${item.id}.</div>
        <h3>${item.name}</h3>
        <div>${item.time}</div>
    `;

    // Click to play sound
    box.onclick = () => {
        const audio = new Audio(`Audio Sampler/${item.file}`);
        audio.play();
    };

    board.appendChild(box);
});