function encontrarPalabraMasLarga(cadena) {
    let palabras = cadena.split(' ');
    let palabraMasLarga = '';
  
    for (let palabra of palabras) {
      if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra; 
      }
    }
  
    return palabraMasLarga;
  }
  let resultado = encontrarPalabraMasLarga("Aprender JavaScript es emocionante");
  console.log(resultado);
  