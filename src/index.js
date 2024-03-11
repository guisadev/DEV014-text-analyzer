
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`


import { analizador } from "./analyzer.js";

//Selectores del DOM
const textarea = document.querySelector("textarea.textArea");
const buttonLimpiar = document.getElementById("limpiarMetricas");

const limpiarMetricas = () => {
    textarea.value = "";
    const li = document.querySelectorAll("li");
    li[0].textContent = `Número de carácteres:`; //Copiar y pegar el codigo de la const li para que no borre mis items
    li[1].textContent = `Carácteres sin espacios:`;
    li[2].textContent = `Número de palabras:`;
    li[3].textContent = `Números:`;
    li[4].textContent = `Suma de números: `;
    li[5].textContent = `Promedio longitud: `;
};
//Eventos del DOM
const analizadorText = () => {
    const textoIngresado = textarea.value;
    const wordCount = analizador.getWordCount(textoIngresado);
    const charCount = analizador.getCharacterCount(textoIngresado);
    const charCountNoSpaces = analizador.getCharacterCountExcludingSpaces(textoIngresado);
    const numberCount = analizador.getNumberCount(textoIngresado);
    const addNumberCount = analizador.getNumerosSum(textoIngresado);
    const getAverageWordLength = analizador.getAverageWordLength(textoIngresado);


    const li = document.querySelectorAll("li");
    li[0].textContent = `Número de carácteres: ${charCount}`; //otra forma de añadir js al DOM ¿Cuál es este apóstrofe?
    li[1].textContent = `Carácteres sin espacios: ${charCountNoSpaces}`;
    li[2].textContent = `Número de palabras: ${wordCount}`;
    li[3].textContent = `Números: ${numberCount}`;
    li[4].textContent = `Suma de números: ${addNumberCount}`;
    li[5].textContent = `Promedio longitud: ${getAverageWordLength}`;
    //lamar por atributo
};
//Manipulación del DOM
textarea.addEventListener("keyup", () => { //Key up: al soltar la tecla deja de analizar
    analizadorText();
});

buttonLimpiar.addEventListener("click", () => {
    limpiarMetricas();
});