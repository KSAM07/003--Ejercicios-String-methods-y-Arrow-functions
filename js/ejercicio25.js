function eliminarCaracteresEspeciales(cadena) {
    return cadena.replace(/[^\w\s]/g, '');
  }
  let resultado = eliminarCaracteresEspeciales("Hola@mundo!");
  console.log(resultado);
  