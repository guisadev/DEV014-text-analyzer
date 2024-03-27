//objeto que contiene las funciones que se encargan de analizar el texto

const analyzer = {
  getWordCount: (text) => {
    let trimmedText = text.trim();

    trimmedText = text.split(' ');

    return trimmedText.length;

  },

  getCharacterCount: (text) => {

    return text.length; //recorre la cantidad de carácteres introducidos
  },

  getCharacterCountExcludingSpaces: (text) => {
    const trimmedText = text.trim();
    let count = 0;

    for (let i = 0; i < trimmedText.length; i++) { 
      const char = trimmedText[i];
      // Verificamos
      if (char !== ' ' && char !== ',' && char !== '.') {
        count++;
      }
    }

    return count;
  },

  getNumberCount: (text) => {
    let cantidadDigitos = 0;
    const palabras = text.split(" "); 

    for (let i = 0; i < palabras.length; i++) {
      let palabra = palabras[i];
      if (palabra[palabra.length-1] === "."){
        palabra = palabra.slice(0, -1)
      }
      //console.log(!isNaN(Number(palabra)))
      if (!isNaN(Number(palabra))) {
        cantidadDigitos++
      }
    }

    return cantidadDigitos;
  },

  getNumberSum: (text) => {
    let suma = 0;
    
    const palabras = text.split(" "); 
  
    for (let i = 0; i < palabras.length; i++) {
      let palabra = palabras[i];
      if (palabra[palabra.length-1] === "."){
        palabra = palabra.slice(0, -1)
      }
      //console.log(!isNaN(Number(palabra)))
      if (!isNaN(Number(palabra))) {
        suma=suma+Number(palabra);
      }
    }
  
    return suma;
  },

  getAverageWordLength: (text) => {
    const trimmedText = text.trim();

    const palabras = [];
    let palabraActual = ''; //ir construyendo c/palabra.

    for (let i = 0; i < trimmedText.length; i++) {
      const char = trimmedText[i];

      if (char !== ' ') {
        palabraActual += char;
      } else {
        
        if (palabraActual.length > 0) {
          palabras.push(palabraActual);
          palabraActual = '';
        }
      }
    }
    //verifica para construir
    if (palabraActual.length > 0) {
      palabras.push(palabraActual); //añade el elemento al array
    }

    let longitudTotal = 0;

    for (let i = 0; i < palabras.length; i++) {
      longitudTotal += palabras[i].length;
    }

    const longitudMedia = palabras.length > 0 ? longitudTotal / palabras.length : 0;
    //return longitudMedia.toFixed(2);
    return parseFloat(longitudMedia.toFixed(2));
  }
};

export default analyzer;

