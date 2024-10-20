function terminaCon(cadena, palabra) {
    return cadena.endsWith(palabra);
  }
  let resultado = terminaCon("JavaScript es genial", "genial");
  console.log(resultado); 
  