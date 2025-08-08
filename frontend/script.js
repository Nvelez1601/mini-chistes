// frontend/script.js

// Referencias a los elementos del DOM mejorados
const jokeDisplay = document.getElementById('joke-display');
const getJokeBtn = document.getElementById('get-joke-btn');
const jokeIcon = document.querySelector('.joke-icon');
const shareTwitterBtn = document.getElementById('share-twitter');
const shareWhatsAppBtn = document.getElementById('share-whatsapp');

// Configuración para el fondo de partículas
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#5d5dff" // Color de las partículas
        },
        "shape": {
            "type": "circle",
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#e0e0e0", // Color de las líneas
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});

// Función para obtener y mostrar el chiste
async function fetchJoke() {
    // Estado de carga visual
    jokeDisplay.textContent = "Cargando...";
    jokeDisplay.classList.add('loading');
    getJokeBtn.disabled = true; // Deshabilitar botón durante la carga

    // Efecto visual: cambiar el icono del botón
    getJokeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando';

    // Ocultar botones de compartir mientras se carga un nuevo chiste
    shareTwitterBtn.style.display = 'none';
    shareWhatsAppBtn.style.display = 'none';

    try {
        const response = await fetch('http://127.0.0.1:8000/api/chiste');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Eliminar clase de carga y añadir la de 'loaded' para la animación
        jokeDisplay.classList.remove('loading');
        jokeDisplay.classList.add('loaded');

        // Retraso para que la animación sea visible
        setTimeout(() => {
            jokeDisplay.textContent = data.chiste;
            // Después de mostrar el chiste, mostramos los botones de compartir
            shareTwitterBtn.style.display = 'flex';
            shareWhatsAppBtn.style.display = 'flex';
        }, 300);

    } catch (error) {
        console.error('Error al obtener el chiste:', error);
        jokeDisplay.textContent = "Error al cargar el chiste. Inténtalo de nuevo.";
    } finally {
        getJokeBtn.disabled = false;
        // Restaurar el botón a su estado original después de un breve retraso
        setTimeout(() => {
            getJokeBtn.innerHTML = '<i class="fas fa-dice"></i> Obtener Chiste';
            jokeDisplay.classList.remove('loaded'); // Eliminar la clase de animación
        }, 800);
    }
}

// Función para compartir el chiste en Twitter
function shareOnTwitter() {
    const joke = jokeDisplay.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(joke)}%0A%0A%23ChisteDelDía %23Jokerator`;
    window.open(twitterUrl, '_blank');
}

// Función para compartir el chiste en WhatsApp
function shareOnWhatsApp() {
    const joke = jokeDisplay.textContent;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(joke)}%0A%0A¡Generado por Jokerator!`;
    window.open(whatsappUrl, '_blank');
}


// Event Listeners
getJokeBtn.addEventListener('click', fetchJoke);
shareTwitterBtn.addEventListener('click', shareOnTwitter);
shareWhatsAppBtn.addEventListener('click', shareOnWhatsApp);

// Obtener un chiste al cargar la página
window.addEventListener('load', fetchJoke);