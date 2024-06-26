import analizador from "./analyzer.js";

//Selectores del DOM
const textarea = document.querySelector('textarea[name="user-input"]');
const buttonLimpiar = document.getElementById("limpiarMetricas");

const limpiarMetricas = () => {
  textarea.value = "";
  const li = document.querySelectorAll("li");
  li[0].textContent = `Número de carácteres:`;
  li[1].textContent = `Carácteres sin espacios:`;
  li[2].textContent = `Número de palabras:`;
  li[3].textContent = `Números:`;
  li[4].textContent = `Suma de números: `;
  li[5].textContent = `Promedio longitud: `;
};
//Manipulación del DOM
const analizadorText = () => {
  const textoIngresado = textarea.value;
  const wordCount = analizador.getWordCount(textoIngresado);
  const charCount = analizador.getCharacterCount(textoIngresado);
  const charCountNoSpaces = analizador.getCharacterCountExcludingSpaces(textoIngresado);
  const numberCount = analizador.getNumberCount(textoIngresado);
  const addNumberCount = analizador.getNumberSum(textoIngresado);
  const getAverageWordLength = analizador.getAverageWordLength(textoIngresado);


  const li = document.querySelectorAll("li");
  li[0].textContent = `Número de carácteres: ${charCount}`;
  li[1].textContent = `Carácteres sin espacios: ${charCountNoSpaces}`;// para insertar el valor de la variable
  li[2].textContent = `Número de palabras: ${wordCount}`;
  li[3].textContent = `Números: ${numberCount}`;
  li[4].textContent = `Suma de números: ${addNumberCount}`;
  li[5].textContent = `Promedio longitud: ${getAverageWordLength}`;
  //llamar por atributo
};
//Eventos del DOM 
textarea.addEventListener("input", () => { 
  analizadorText();
});

buttonLimpiar.addEventListener("click", () => {
  limpiarMetricas();
});
