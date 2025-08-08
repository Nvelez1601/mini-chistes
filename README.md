# Mini-API de Chistes Fullstack
Este proyecto demuestra una aplicación web completa con un backend en Python (FastAPI)
y un frontend servido por un servidor Node.js (Express.js).

![Interfaz](https://imgur.com/BTK4IAd)

# Tecnologías
Backend: Python 3.x, FastAPI, Uvicorn
Servidor Frontend: Node.js, Express.js
Frontend (Cliente): HTML, CSS, JavaScript
# Características
API RESTful que proporciona chistes aleatorios.
Interfaz de usuario web que consume la API y muestra los chistes.
# Cómo ejecutar
Sigue estos pasos para poner en marcha la aplicación:
1. Clonar el Repositorio (si aún no lo tienes)
Si no has clonado este repositorio, puedes hacerlo con el siguiente comando:
git clone [https://github.com/Nvelez1601/mini-chistes.git](https://github.com/Nvelez1601/mini-chistes.git)
cd mini-chistes-fullstack

2. Configurar y Ejecutar el Backend (Python - FastAPI)
Abre tu terminal y navega a la carpeta backend del proyecto:
cd backend

Crea y activa un entorno virtual (recomendado):
python -m venv venv
# Para PowerShell:
.\venv\Scripts\activate
# Para Símbolo del sistema (CMD):
 venv\Scripts\activate


Instala las dependencias de Python:
pip install "fastapi[all]" uvicorn python-multipart


Inicia el servidor de FastAPI:
uvicorn main:app --reload

Deja esta terminal abierta y ejecutándose. El backend estará disponible en http://127.0.0.1:8000.
3. Configurar y Ejecutar el Servidor Frontend (Node.js - Express.js)
Abre una nueva terminal y navega a la carpeta frontend del proyecto:
cd ../frontend
# O si abriste una terminal nueva desde la raíz del proyecto y no estabas en 'backend':
# cd frontend


Instala las dependencias de Node.js:
npm install


Inicia el servidor de Express.js:
node server.js

Deja esta terminal abierta y ejecutándose. El frontend estará disponible en http://localhost:3000.
4. Acceder a la Aplicación
Una vez que ambos servidores estén funcionando, abre tu navegador web y visita:
http://localhost:3000
¡Disfruta de los chistes aleatorios!


# Fullstack Jokes Mini-API
This project demonstrates a complete web application with a Python backend (FastAPI)
and a frontend served by a Node.js server (Express.js).

# Technologies
Backend: Python 3.x, FastAPI, Uvicorn

Frontend Server: Node.js, Express.js

Frontend (Client): HTML, CSS, JavaScript

# Features
RESTful API that provides random jokes.

Web user interface that consumes the API and displays the jokes.

# How to Run
Follow these steps to get the application up and running:

1. Clone the Repository (if you don't have it yet)
If you haven't cloned this repository, you can do so with the following command:

git clone https://github.com/Nvelez1601/mini-chistes.git
cd mini-chistes-fullstack

(Remember to replace Nvelez1601 with your actual GitHub username.)

2. Configure and Run the Backend (Python - FastAPI)
Open your terminal and navigate to the backend folder of the project:

cd backend

Create and activate a virtual environment (recommended):

python -m venv venv
# For PowerShell:
.\venv\Scripts\activate
# For Command Prompt (CMD):
 venv\Scripts\activate

Install Python dependencies:

pip install "fastapi[all]" uvicorn python-multipart

Start the FastAPI server:

uvicorn main:app --reload

Leave this terminal open and running. The backend will be available at http://127.0.0.1:8000.

3. Configure and Run the Frontend Server (Node.js - Express.js)
Open a new terminal and navigate to the frontend folder of the project:

cd ../frontend
# Or if you opened a new terminal from the project root and were not in 'backend':
# cd frontend

Install Node.js dependencies:

npm install

Start the Express.js server:

node server.js

Leave this terminal open and running. The frontend will be available at http://localhost:3000.

4. Access the Application
Once both servers are running, open your web browser and visit:

http://localhost:3000

Enjoy the random jokes!