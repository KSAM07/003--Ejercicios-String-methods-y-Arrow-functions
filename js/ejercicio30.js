function contarFrecuencia(cadena) {
    const frecuencia = {}; 
    for (let caracter of cadena) {
      if (frecuencia[caracter]) {
        frecuencia[caracter]++;
      } else {
        frecuencia[caracter] = 1;
      }
    }
    return frecuencia;
  }
  let resultado = contarFrecuencia("abbccc");
  console.log(resultado);
  