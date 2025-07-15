#backen por Fast API
# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

# Inicializa la aplicación FastAPI
app = FastAPI()

# Configuración de CORS (Cross-Origin Resource Sharing)
# Esto es necesario para permitir que tu frontend (que se ejecutará en un puerto diferente)
# pueda hacer solicitudes a este backend.pip
origins = [
    "http://localhost",
    "http://localhost:8000", # Puerto por defecto de Uvicorn
    "http://127.0.0.1",
    "http://127.0.0.1:8000", # Puerto por defecto de Uvicorn
    # Aquí añadiremos el puerto de tu servidor Node.js (por ejemplo, 3000)
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # Permite todos los métodos HTTP (GET, POST, etc.)
    allow_headers=["*"], # Permite todos los encabezados HTTP
)

# Lista de chistes
chistes = [
    "¿Qué le dice una impresora a otra? ¿Esa hoja es tuya o es impresión mía?",
    "¿Cuál es el colmo de un electricista? No tener corriente con su mujer.",
    "¿Qué hace una abeja en el gimnasio? ¡Zumba!",
    "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
    "Había una vez un perro que se llamaba Pegamento y se cayó y se pegó.",
    "¿Qué le dice un semáforo a otro? No me mires, que me pongo verde."
]

# Define un endpoint (ruta de la API) para obtener un chiste
@app.get('/api/chiste')
async def get_chiste():
    """
    Endpoint que devuelve un chiste aleatorio de la lista.
    """
    chiste_aleatorio = random.choice(chistes)
    # FastAPI convierte automáticamente los diccionarios de Python a JSON
    return {"chiste": chiste_aleatorio}

# Puedes añadir un endpoint raíz para verificar que el servidor está funcionando
@app.get('/')
async def read_root():
    return {"message": "Bienvenido a la API de Chistes (FastAPI)"}