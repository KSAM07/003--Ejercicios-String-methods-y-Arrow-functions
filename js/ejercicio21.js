function reemplazarPalabra(cadena, palabraOriginal, palabraNueva) {
    return cadena.replaceAll(palabraOriginal, palabraNueva);
  }
  let resultado = reemplazarPalabra("hola hola", "hola", "adiós");
  console.log(resultado);
  