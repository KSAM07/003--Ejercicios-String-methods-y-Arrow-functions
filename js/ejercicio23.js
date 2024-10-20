function truncarCadena(cadena, limite) {
    if (cadena.length > limite) {
      return cadena.slice(0, limite) + '...';
    }
    return cadena;
  }
  let resultado = truncarCadena("JavaScript es genial", 10);
  console.log(resultado);
  