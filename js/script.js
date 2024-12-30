// script.js

// DOM Elements
const textDisplay = document.getElementById('textDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const speedInput = document.getElementById('speed');
const userText = document.getElementById('userText');
const loadTextBtn = document.getElementById('loadTextBtn');

// Variables
let animationId;
let speed = 5;
let position = 0;

// Update speed based on input
speedInput.addEventListener('input', () => {
    speed = parseInt(speedInput.value, 10);
});

// Load user's text
loadTextBtn.addEventListener('click', () => {
    const text = userText.value.trim();
    if (text) {
        textDisplay.textContent = text; // Replace the default text
        position = 0; // Reset position
    } else {
        alert('Please enter some text!');
    }
});

// Start scrolling
startBtn.addEventListener('click', () => {
    if (!animationId) {
        scrollText();
    }
});

// Stop scrolling
stopBtn.addEventListener('click', () => {
    cancelAnimationFrame(animationId);
    animationId = null;
});

// Scroll text function
function scrollText() {
    position -= speed / 10; // Adjust the speed
    textDisplay.style.transform = `translateY(${position}px)`;

    // Restart scrolling if the text has scrolled completely
    if (Math.abs(position) > textDisplay.scrollHeight) {
        position = textDisplay.offsetHeight;
    }

    animationId = requestAnimationFrame(scrollText);
}
