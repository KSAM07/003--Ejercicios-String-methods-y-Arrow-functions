function contarPalabras(cadena) {
    let palabras = cadena.split(' ');
    return palabras.length;
  }
  let resultado = contarPalabras("Aprender JavaScript es divertido");
  console.log(resultado);
  