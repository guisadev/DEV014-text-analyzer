# Analizador de texto

## Introducción
* Este analizador de texto está creado para ser una ayuda visual contable en la cual los parámetros
van creciendo o decreciendo según lo que sea introducido en el area de texto y de esta manera obtener
un feedback instantáneo acerca de los carácteres, espacios, simbolos y números que se están usando.

***

## 1. Consideraciones generales

* Aprender, practicar y reforzar conceptos de JavaScript, HTML y CSS.

## 2. Preámbulo

* Aquí podemos obtener una visualización general del uso y funcionamiento instantáneo de un
analizador de texto. 

![Una lupa sobre texto de libro](https://github.com/Laboratoria/curriculum/assets/92090/2b45f653-69a5-4282-a65c-d34125c36113)

_Credito: Foto de [ethan](https://unsplash.com/fr/@andallthings?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
_en [Unsplash](https://unsplash.com/es/fotos/72NpWZJOskU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

## Contribución

Si deseas contribuir al desarrollo de esta herramienta, ¡eres bienvenido! Siéntete libre de clonar el repositorio, implementar nuevas características, corregir errores o aportar un diseño más creativo. Abre un Pull Request para que tu contribución sea revisada y fusionada.

## 4. Funcionalidades en general

* 1 En el area de texto debes ingresar carácteres, letras y/o números.
* 2 Luego de haber ingresado texto, verás que las méticas comienzan a aumentar 
conforme el tipo de carácter que haya recibido en el area de texto.
* 3 El botón en la parte inferior del area de texto dejará las métricas en cero para que vuelvas a intentarlo.


## 5. Boilerplate

La lógica del proyecto debe está implementada completamente en JavaScript
puro también conocido como Vanilla JavaScript.

El boilerplate que les damos contiene esta estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── analyzer.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── analyzer.spec.js
```

## Lógica de las funciones

### Conteo de Palabras
La función `getWordCount(text)` cuenta el número de palabras en el texto introducido.

### Conteo de Caracteres
La función `getCharacterCount(text)` cuenta el número total de caracteres en el texto, incluyendo espacios, comas y puntos.

### Conteo de Caracteres Excluyendo Espacios
La función `getCharacterCountExcludingSpaces(text)` cuenta el número de caracteres en el texto excluyendo espacios, comas y puntos.

### Conteo de Números
La función `getNumberCount(text)` cuenta la cantidad de números en el texto. Ten en cuenta que cuenta los números tanto individuales como compuestos.

### Suma de Números
La función `getNumberSum(text)` suma todos los números presentes en el texto.

### Longitud Media de Palabras
La función `getAverageWordLength(text)` calcula la longitud media de las palabras en el texto.


### HTML

* **Uso de HTML semántico**

Te aconsejo descargar la extención HTML Boilerplate y luego crear tu carpeta HTML: dentro del archivo, escribe "html" y presiona la tecla "Tab". Esto generará automáticamente la estructura base de un documento HTML.

### CSS

* **Uso de selectores de CSS**

La aplicación desplegada usa algunos selectores que te dejo a continuación:

  - [ ] La aplicación usa
  [`selectores CSS de tipo`]

  - [ ] La aplicación usa
  [`selectores CSS de class`]

  - [ ] La aplicación usa
  [`selectores de atributo`]

  - [ ] La aplicación usa
  [`selectores CSS de ID`]

* **La aplicación usa el Modelo de Caja (Box model)**
tales como:
border, margen, padding.

### Web APIs
* Uso de selectores del DOM, como: 
  `querySelector`
  `getElementById`

* Eventos del DOM, como:
 [Event Listener]

* Manipulación dinámica del DOM, como:
la aplicación actualiza el atributo
  [`textContent`]
  o
  [`innerHTML`]

### JavaScript 
Debes considerar lo siguiente:

* Tipos de datos primitivos

* Strings (cadenas de caracteres)*

* Variables (declaración, asignación, ámbito)*

* Uso de condicionales (if-else, switch, operador ternario, lógica booleana)*

* Uso de bucles/ciclos (while, for, for..of)* NO usar expresiones regulares.

* Funciones (params, args, return)*

### Control de Versiones (Git y GitHub)

* **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

* **Git: Control de versiones con git (clone, add, commit, push)**

* **GitHub: Despliegue con GitHub Pages**


### Pruebas unitarias

Una prueba unitaria es una técnica de prueba de software en la que se comprueba
que cada componente individual de un programa o sistema funciona correctamente
de manera aislada. En otras palabras, se prueba cada unidad de código por
separado para asegurarse de que cumpla con los requisitos y especificaciones.

Puedes ejecutar las pruebas de cada grupo de objetivos de aprendizaje de
manera individual con los siguientes comandos:

* `npm run test:oas-html`
* `npm run test:oas-css`
* `npm run test:oas-web-api`
* `npm run test:oas-js`
* `npm run test:e2e`


### Prepara tu PC para trabajar

Antes de comenzar instala lo siguiente:

1. [Node.js](https://nodejs.org/)
2. [git](https://git-scm.com/download/) Si estas en Linux es muy probable que
  ya este instalado 👀.
  Para conocer más de git visita
  [este enlace](https://curriculum.laboratoria.la/es/topics/scm/01-git)
3. Un editor de código, te sugerimos [Code](https://code.visualstudio.com/)

Después en [GitHub](https://github.com/):

1. Crear una cuenta. Conoce más de GitHub en este
  [link](https://curriculum.laboratoria.la/es/topics/scm/02-github/01-github)
2. Realiza un fork de este proyecto
3. Configura tu SSH Key  en GitHub. Puedes revisar este
[video](https://www.youtube.com/watch?v=g0ZV-neSM7E) o
[artículo](https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

Luego en una [shell](https://curriculum.laboratoria.la/es/topics/shell)
ejecuta lo siguiente. Si estas en Windows puedes usar Git Bash:

1. Clona el fork en tu PC
2. Ubica la shell en el proyecto que clonaste
3. Instala las dependencias del proyecto con `npm install`
4. Instala `playwright` con `npx playwright install chromium --with-deps`
5. Para arrancar el servidor web `npm start` y dirígete a
   `http://localhost:3000` en tu navegador.
   
6. A codear se ha dicho! :rocket:

