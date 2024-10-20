function capitalizarPrimerasLetras(frase) {
    return frase
      .split(' ')
      .map(palabra => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); 
      })
      .join(' '); 
  }
  let resultado = capitalizarPrimerasLetras("javascript es divertido");
  console.log(resultado); 
  