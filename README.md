# Proyecto 12 - Juego de Cartas - Manejo de React Avanzado

## _React Avanzado_

Este proyecto es una **aplicación web** desarrollada con **React** es un juego de cartas donde creas una criatura a partir de un formulario, utilizamos la **PokeAPI** para generar las imagenes y una de las habilidades al azar. Las cartas de las criaturas tienen un sistema de favoritos y de calificación por estrellas.

## Características principales

- Desarrollo de un juego de cartas apoyados en la PokeAPI para extraer cierta información que nos ayudará a mejorar los detalles de la app.
- Un home con una breve introducción, donde se muestran las clasificaciones de las criaturas durante el juego por clanes y tipos.
- Poner en practica los conocimientos sobre hooks avanzados para la optimización con React en un proyecto real.
- Interfaz intuitiva y responsive para mejorar la experiencia de usuario **(UI/UX)**
- Se empieza con un formulario donde el usuario rellenará los datos necesarios para crear criaturas. Tiene una sección de galeria donde se podrán ver todas las cartas con información detallada de cada bestia. Sólo bestias creadas podrán ser utilizadas por el usario para combatir. Cada carta presenta un sistema de likes y un sistema de clasificación por estrellas, gestionados por el usuario. Las bestias creadas tienen una opción de descarga en formato json para poder guardar el avance de la misma. Al seleccionar una carta nos redigiremos a la zona de combate, donde aparecerá la criatura seleccionada y un oponente al azar. Una vez acabada la batalla se comunicará el resultado y el usuario podrá asignar los puntos ganados a las caracteristicas de su criatura. En la sección favoritos aparecen sólo las cartas de aquellas bestias que hayan sido seleccionadas por el sistema de likes.

## Consideraciones técnicas

- **Detalles en el formulario de creación:** Se recomienda que el usuario complete el formulario con el mayor nivel de detalle posible para lograr una experiencia más inmersiva.

## **++Tecnologías utilizas++**

- HTML, CSS y React
- Vite
- Fetch API para solicitudes HTTP
- Posibilidad de generar y descargar archivos .json directamente desde el navegador

## Instalación

Sigue estos pasos para instalar y ejecutarlo en tu entorno local:

### 1. Clonar el repositorio

Clona este repositorio en tu maquina local usando el siguiente comando en la consola:

```sh
git clone https://github.com/Iskoh10/proyecto-12-advanced-react.git
```

### 2. Acceder al directorio del proyecto

Navega al directorio del proyecto clonado:

```sh
cd proyecto-12-advanced-react
```

### 3. Instalar las dependencias

Instala las dependencias necesarias:

```sh
npm install
```

### 4. Iniciar el servidor de desarrollo

Ejecuta el servidor con el comando:

```sh
npm run dev
```

### 5. Estructura del proyecto

```
📁 PROYECTO 11_REACT_BASICS
├── 📁 public
├── 📁 src
│ ├── 📁 components
│ ├── 📁 data
│ ├── 📁 hooks
│ ├── 📁 pages
│ ├── 📁 Providers
│ ├── 📁 utils
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## License

**Free Software, Hell Yeah!**
