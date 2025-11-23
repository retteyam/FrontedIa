# Frontend IA - Proyecto React + FastAPI

Un proyecto completo con frontend en React y backend en FastAPI para demostración de IA.

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu laptop:

- **Node.js** (v16 o superior) - [Descargar aquí](https://nodejs.org/)
- **Python** (v3.8 o superior) - [Descargar aquí](https://www.python.org/downloads/)
- **Git** - [Descargar aquí](https://git-scm.com/)
- **VS Code** - [Descargar aquí](https://code.visualstudio.com/)

### Extensiones Recomendadas para VS Code

- Python
- JavaScript and TypeScript Nightly
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Pylance

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone [URL_DEL_REPOSITORIO]
cd "fotnted ia"
```

### 2. Configurar el Backend (FastAPI)

#### Navegar al directorio del backend:
```bash
cd backend
```

#### Crear un entorno virtual de Python:
```bash
python -m venv venv
```

#### Activar el entorno virtual:
**En Windows (PowerShell):**
```bash
.\venv\Scripts\Activate.ps1
```

**En Windows (CMD):**
```bash
venv\Scripts\activate
```

#### Instalar dependencias:
```bash
pip install -r requirements.txt
```

#### Configurar variables de entorno:
Crear un archivo `.env` en la carpeta `backend` con el siguiente contenido:
```env
MONGO_URI=mongodb+srv://[TU_USUARIO]:[TU_PASSWORD]@[TU_CLUSTER].mongodb.net/[TU_DB]?retryWrites=true&w=majority
```

### 3. Configurar el Frontend (React)

#### Navegar al directorio del frontend:
```bash
cd ../frontend
```

#### Instalar dependencias de Node.js:
```bash
npm install --legacy-peer-deps
```

#### Instalar dependencias específicas si hay conflictos:
```bash
npm install date-fns@^3.6.0 --legacy-peer-deps
```

## 🏃‍♂️ Cómo Ejecutar el Proyecto

### Opción 1: Ejecutar Desde VS Code

1. **Abrir el proyecto en VS Code:**
   ```bash
   code .
   ```

2. **Abrir dos terminales en VS Code:**
   - Usa `Ctrl + Shift + `` ` para abrir la terminal
   - Usa el botón `+` para crear una segunda terminal

3. **Terminal 1 - Backend:**
   ```bash
   cd backend
   .\venv\Scripts\Activate.ps1
   python server.py
   ```

4. **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm start
   ```

### Opción 2: Ejecutar con Scripts Automáticos

#### Windows PowerShell:
```bash
# Ejecutar backend
cd backend; .\venv\Scripts\Activate.ps1; python server.py

# En otra terminal, ejecutar frontend
cd frontend; npm start
```

## 🌐 Acceso a la Aplicación

Una vez que ambos servicios estén corriendo:

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000
- **Documentación API:** http://localhost:8000/docs

## 🛠️ Estructura del Proyecto

```
fotnted ia/
├── backend/                 # API FastAPI
│   ├── server.py           # Servidor principal
│   ├── requirements.txt    # Dependencias Python
│   └── .env               # Variables de entorno (crear manualmente)
├── frontend/               # Aplicación React
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utilidades
│   ├── public/            # Archivos públicos
│   └── package.json       # Dependencias Node.js
└── tests/                  # Tests del proyecto
```

## 🔧 Solución de Problemas Comunes

### Error: "Cannot resolve dependency tree"
```bash
npm install --legacy-peer-deps
```

### Error: "Python command not found"
- Asegúrate de que Python esté en tu PATH
- Reinstala Python con la opción "Add to PATH" marcada

### Error: "Module not found" en Python
```bash
pip install -r requirements.txt
```

### Error: "Port already in use"
```bash
# Matar proceso en puerto 3000 (frontend)
npx kill-port 3000

# Matar proceso en puerto 8000 (backend)
npx kill-port 8000
```

### Error con MongoDB
- Verifica que tu string de conexión en `.env` sea correcto
- Asegúrate de que tu IP esté en la whitelist de MongoDB Atlas

## 🚀 Scripts Disponibles

### Frontend
- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas

### Backend
- `python server.py` - Inicia el servidor FastAPI

## 📱 Características del Proyecto

- **Frontend:** React con TailwindCSS y componentes UI modernos
- **Backend:** FastAPI con conexión a MongoDB
- **Responsive:** Diseño adaptable a dispositivos móviles
- **API REST:** Endpoints para gestión de datos
- **Documentación:** Swagger UI automática en `/docs`

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Notas Adicionales

- El frontend está configurado para funcionar con un proxy hacia el backend
- Las variables de entorno son necesarias para la conexión a la base de datos
- El proyecto utiliza CORS habilitado para desarrollo local

## 🐛 Reportar Bugs

Si encuentras algún problema, por favor crea un issue en el repositorio con:
- Descripción del problema
- Pasos para reproducir
- Información del sistema operativo
- Screenshots si es necesario

---

**¡Happy Coding! 🎉**