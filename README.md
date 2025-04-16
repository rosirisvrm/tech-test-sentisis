# Aplicación desarrollada por Rosiris Romero - Frontend Developer.

## > Decisiones tomadas para la prueba técnica:

## Creación de la aplicación:

Se desarrolló una aplicación React desde cero, utilizando React Router como una de las opciones recomendadas por React para estructurar aplicaciones. Aunque las instrucciones solo requerían React y TypeScript, esta decisión se tomó en alineación con las prácticas recomendadas. No obstante, dado que la prueba consistía en una aplicación sencilla de página única, React Router no fue empleado en la solución final, ya que no se necesitaba funcionalidad de routing.

## Componente Tabla:

Se diseñó un componente Tabla modular compuesto por subcomponentes para mejorar la comprensión de su funcionamiento. Este enfoque facilita una implementación limpia y reutilizable, evitando dependencias de bibliotecas externas que proporcionan tablas predefinidas.

## Modales personalizados:

Los modales fueron creados desde cero y ubicados en componentes separados. Ambos son utilizados en la vista principal, ofreciendo una estructura reactiva y manejada mediante props para una fácil manipulación.

## Custom Hook useEvents:

Se implementó este hook como patrón de diseño para manejar la lógica y los datos de los eventos mostrados en la tabla. Los datos se obtienen mediante un servicio que realiza llamadas a la API, centralizando la gestión de peticiones y abstrayendo lógica compleja fuera de la UI. Este enfoque garantiza una separación adecuada entre lógica y presentación.

## Tipado de datos:

Se definieron tipos específicos para manejar la estructura de datos de la API y las props de los componentes de UI, asegurando claridad y consistencia en la aplicación.

## Ordenamiento de fechas:

Las fechas de los eventos se ordenaron de forma descendente mediante una utilidad. Esta utilidad se utilizó dentro del hook useEvents antes de retornar los datos, permitiendo que lleguen ya ordenados a la vista, evitando procesamientos adicionales y mejorando la limpieza del código.

## Componente UnitSelector:

Este componente maneja la selección de la cantidad de tickets por evento. Cada instancia se renderiza dentro de las filas de la tabla correspondiente a cada evento. Su lógica está encapsulada internamente, logrando una abstracción adecuada y separación de responsabilidades.

## Pruebas unitarias:

Se realizaron pruebas unitarias para los componentes CartButton y UnitSelector, evaluando dos casos de prueba para cada uno. Se emplearon herramientas como React Testing Library, Jest y Vitest para realizar las pruebas.

## Persistencia de datos:

La selección de tickets se decidió manejar mediante localStorage para asegurar que la información persista tras recargar la página. Sin embargo, esta funcionalidad no se logró concretar completamente.

## Custom Hook useCart:

Se implementó un segundo hook personalizado para gestionar la lógica del carrito, incluyendo la adición y eliminación de tickets. Aunque no se pudo completar totalmente, este hook estaba diseñado para trabajar en conjunto con la persistencia de datos en localStorage.

## Estilización:

Para los estilos se utilizó Tailwind CSS, ya que venía por defecto en la configuración del proyecto. Si bien en el enunciado se recomendaba utilizar CSS, Sass o Styled-Components, el tiempo limitado disponible para completar la prueba llevó a optar por Tailwind CSS, que permitía un desarrollo más rápido.

Esta solución fue pensada para garantizar una estructura clara, reutilizable y escalable, y aunque no todas las funcionalidades pudieron completarse, se priorizó un enfoque modular y limpio. Espero que se perciba como una aplicación cuidada y bien diseñada.



### How to run the project

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```