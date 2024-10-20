function convertirASnakeCase(frase) {
    return frase
      .toLowerCase() 
      .replace(/\s+/g, '_'); 
  }
  let resultado = convertirASnakeCase("Hola Mundo");
  console.log(resultado); 
  