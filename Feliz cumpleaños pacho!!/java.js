const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiColors = ['#FF6F61', '#FFAFBD', '#FFC3A0', '#FFD700', '#FF4500'];
let confetti = [];

// Genera confeti inicial
for (let i = 0; i < 150; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 5,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        velocityX: Math.random() * 2 - 1,
        velocityY: Math.random() * 2 + 1,
    });
}

// Dibuja el confeti
function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach((piece) => {
        ctx.beginPath();
        ctx.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
        ctx.fillStyle = piece.color;
        ctx.fill();

        // Actualiza la posición
        piece.x += piece.velocityX;
        piece.y += piece.velocityY;

        // Reaparece en la parte superior si cae abajo
        if (piece.y > canvas.height) piece.y = 0;
        if (piece.x > canvas.width) piece.x = 0;
        if (piece.x < 0) piece.x = canvas.width;
    });

    requestAnimationFrame(drawConfetti);
}

drawConfetti();
