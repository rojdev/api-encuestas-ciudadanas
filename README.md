# API Encuestas Ciudadanas

Backend para la autenticación y gestión de usuarios del sistema de recolección de información y encuestas ciudadanas. Desarrollado en Node.js con Express y MySQL.

---

## 🛠️ Configuración y Despliegue con Docker Compose

Este proyecto incluye una base de datos MySQL autocontenida y configurada para el desarrollo local acelerado.

### 1. Requisitos Previos
*   Tener instalado [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/install/).

### 2. Configurar Variables de Entorno
Copia el archivo de ejemplo para crear tu `.env`:
```bash
cp .env.example .env
```
*(Nota: El archivo `.env` ya viene configurado para enlazarse de forma automática con el contenedor de base de datos MySQL `basededatos-encuestas`)*.

### 3. Levantar los Contenedores
```bash
docker compose up -d
```
La API estará escuchando en: [http://localhost:9501](http://localhost:9501)

---

## 💻 Desarrollo Local

Si prefieres ejecutar el servidor Node.js en tu entorno local:

1.  Instalar las dependencias:
    ```bash
    npm install
    ```
2.  Configurar la conexión a tu base de datos MySQL local en un archivo `.env` en la raíz.
3.  Correr en modo desarrollo:
    ```bash
    npm run dev
    ```
