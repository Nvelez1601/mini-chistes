// frontend/script.js
const jokeDisplay = document.getElementById('joke-display');
const getJokeBtn = document.getElementById('get-joke-btn');

// Esta función se encargará de obtener un chiste del backend de FastAPI
async function fetchJoke() {
    jokeDisplay.textContent = "Cargando chiste..."; // Mensaje de carga
    try {
        // La URL de tu API de FastAPI (asegúrate de que esté corriendo en el puerto 8000)
        const response = await fetch('http://127.0.0.1:8000/api/chiste');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        jokeDisplay.textContent = data.chiste; // Muestra el chiste
    } catch (error) {
        console.error('Error al obtener el chiste:', error);
        jokeDisplay.textContent = "Error al cargar el chiste. Asegúrate de que el backend de Python esté funcionando.";
    }
}

// Asigna la función fetchJoke al evento click del botón
getJokeBtn.addEventListener('click', fetchJoke);

// Opcional: Obtener un chiste al cargar la página
fetchJoke();