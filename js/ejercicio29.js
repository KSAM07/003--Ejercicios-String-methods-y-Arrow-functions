function eliminarRepetidosConsecutivos(cadena) {
    return cadena.replace(/(.)\1+/g, '$1');
  }
  let resultado = eliminarRepetidosConsecutivos("aabbccdde");
  console.log(resultado);
  