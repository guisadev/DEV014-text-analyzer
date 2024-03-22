//objeto que contiene las funciones que se encargan de analizar el texto

const analizador = {
  getWordCount: (text) => {
    // Eliminar espacios en blanco al inicio y al final del párrafo.
    let trimmedText = text.trim(); // //trim elimina los espacios en blanco adelante y atrás de cada palabra.


    trimmedText = text.split(' '); // el split separa el texto con ese parametro espacio para crear un array y cuenta cada elemento
    //console.log(trimmedText);

    return trimmedText.length;

  },

  getCharacterCount: (text) => {

    return text.length; //recorre la longitud del texto: la cantidad de carácteres introducidos
  },

  getCharacterCountExcludingSpaces: (text) => {
    // Eliminar espacios en blanco, comas y puntos al inicio y al final del párrafo
    const trimmedText = text.trim();
    let count = 0;

    // Recorremos cada caracter en el texto
    for (let i = 0; i < trimmedText.length; i++) { //recorre la lingitud del texto
      const char = trimmedText[i]; //trimed le quita los espacios adelante y atras al texto para separarlo y contarlo por parte

      // Verificamos si el caracter no es un espacio, coma o punto
      if (char !== ' ' && char !== ',' && char !== '.') {
        count++;
      }
    }

    return count;
  },

  getNumberCount: (text) => { 
    let cantidadDigitos = 0;
    const palabras = text.split(" "); //

    for (let i = 0; i < palabras.length; i++) {


      const palabra = palabras[i];
      const numero = parseInt(palabra, 10); //

      if (!isNaN(numero)) { // asume que todos los caracteres en la palabra son dígitos numéricos.
        let digitosEnPalabras = 0;

        for (let j = 0; j < palabras.length; j++) {
          if (!isNaN(parseInt(palabra[j], 10))) { //intenta convertir su argumento en un número entero
            digitosEnPalabras++; //después de recorrer todas las palabras, la función devuelve cantidadDigitos
          }

        }
        cantidadDigitos += digitosEnPalabras;

      }
    }
    return cantidadDigitos;
    
  },

  getNumberSum: (text) => {
    let sumaNumeros = 0;

    // Recorremos cada caracter en el texto
    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      // Verificamos si el caracter es un número
      if (char >= '0' && char <= '9') {
        // Convertimos el carácter a número y lo sumamos
        sumaNumeros += parseFloat(char, 10);
      }
    }
    // Retornamos la suma de números
    return sumaNumeros;
  },

  getAverageWordLength: (text) => {
    // Eliminar espacios en blanco al inicio y al final del párrafo
    const trimmedText = text.trim();

    // Dividir el párrafo en palabras usando espacios como separadores
    const palabras = [];
    let palabraActual = '';

    // Recorremos cada caracter en el texto
    for (let i = 0; i < trimmedText.length; i++) {
      const char = trimmedText[i];

      // Si el caracter no es un espacio, lo agregamos a la palabra actual
      if (char !== ' ') {
        palabraActual += char;
      } else {
        // Si encontramos un espacio, agregamos la palabra actual al array de palabras
        if (palabraActual.length > 0) {
          palabras.push(palabraActual);
          palabraActual = '';
        }
      }
    }

    // Agregamos la última palabra si no hay espacio al final del texto
    if (palabraActual.length > 0) {
      palabras.push(palabraActual);
    }

    // Calcular la longitud total de las palabras
    let longitudTotal = 0;

    // Recorremos cada palabra y sumamos sus longitudes
    for (let i = 0; i < palabras.length; i++) {
      longitudTotal += palabras[i].length;
    }

    // Calcular la longitud media con dos dígitos decimales
    const longitudMedia = palabras.length > 0 ? longitudTotal / palabras.length : 0;

    // Retornar la longitud media con dos dígitos decimales
    return longitudMedia.toFixed(2);
  }
};

export { analizador };

