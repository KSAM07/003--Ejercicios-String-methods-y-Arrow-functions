function convertirACamelCase(frase) {
    return frase
      .split(' ')
      .map((palabra, index) => {
        return index === 0 ? palabra.toLowerCase() : palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
      })
      .join('');
  }
  let resultado = convertirACamelCase("hola mundo en javascript");
  console.log(resultado);
  