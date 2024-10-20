function eliminarVocales(cadena) {
    return cadena.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, '');
  }
  let resultado = eliminarVocales("javascript");
  console.log(resultado);
  