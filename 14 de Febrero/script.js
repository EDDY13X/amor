const siButton = document.getElementById('si');
const noButton = document.getElementById('no');
const gifElement = document.getElementById('gif');
const gifs = [
    'gifts/gift1.gif',
    'gifts/gift2.gif',
    'gifts/gift3.gif',
    'gifts/gift4.gif',
    'gifts/gift5.gif',
    'gifts/gift6.gif',
    'gifts/gift7.gif',
    'gifts/gift8.gif'
    
];
const specificGif = 'gifts/gift0.gif'; // GIF específico para el "Sí"
let currentGifIndex = 0;
// Frases románticas
const messages = ["Te Amo para siempre💕","Te Amo 💕", "Pepencha 💖", "Mi amor 💘", "Mi Jaiba de Oro 💞", "Xiomara 💞", "Casemonos💖"];

// Función para crear corazones de forma aleatoria

function createHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Posición aleatoria en la pantalla
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;

    // Tamaño aleatorio para hacer más variado el efecto
    const size = Math.random() * 20 + 10; // Entre 10px y 30px
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Velocidad aleatoria
    const duration = Math.random() * 3 + 2; // Entre 2s y 5s
    heart.style.animationDuration = `${duration}s`;

    // Color y opacidad aleatoria para mejorar el efecto
    heart.style.backgroundColor = `rgba(255, 77, 77, ${Math.random() * 0.8 + 0.2})`;

    document.body.appendChild(heart);

    // Eliminar el corazón después de que termine la animación
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Función para crear mensajes aparte
function createMessage() {
    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = messages[Math.floor(Math.random() * messages.length)];

    // Posición aleatoria
    message.style.left = `${Math.random() * 80}vw`;
    message.style.top = `${Math.random() * 80}vh`;

    document.body.appendChild(message);

    // Eliminar la frase después de unos segundos
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Generar corazones y frases en intervalos
setInterval(createHearts, 200);
setInterval(createMessage, 2000); // Mensajes cada 2 segundos

// Lanzar corazones de manera fluida sin sobrecargar
setInterval(createHearts, 200);

// Evento del botón "No"
noButton.addEventListener('click', () => {
    // Aumentar el tamaño del botón "Sí"
    const currentSize = parseFloat(window.getComputedStyle(siButton).fontSize);
    siButton.style.fontSize = `${currentSize * 1.2}px`;

    // Cambiar el GIF
    currentGifIndex = (currentGifIndex + 1) % gifs.length;
    gifElement.src = gifs[currentGifIndex];
});

// Evento del botón "Sí"
siButton.addEventListener('click', () => {
    // Mostrar alerta con SweetAlert y el GIF específico
    Swal.fire({
        title: '¡Sabía que dirías que sí, amor! 💖',
        text: 'Feliz San Valentín',
        imageUrl: specificGif,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'GIF de San Valentín',
        confirmButtonText: '¡Te  Amo!',
        background: '#ffebee',
        customClass: {
            popup: 'valentine-popup',
            title: 'valentine-title',
            confirmButton: 'valentine-button'
        }
    });
});

const music = document.getElementById('background-music');
const muteButton = document.getElementById('mute-toggle');

muteButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        muteButton.textContent = '🔊';
    } else {
        music.pause();
        muteButton.textContent = '🔇';
    }
});
