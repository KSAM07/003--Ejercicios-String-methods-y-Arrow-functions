function contieneSoloNumeros(cadena) {
    return /^\d+$/.test(cadena);
  }
  let resultado = contieneSoloNumeros("12345");
  console.log(resultado);
  