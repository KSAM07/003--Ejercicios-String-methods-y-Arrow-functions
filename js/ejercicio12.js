function Palindromo(palabra) {
    let palabraInvertida = palabra.split('').reverse().join('');
    return palabra === palabraInvertida;
  }
  let palabra = "ana";
  console.log(Palindromo(palabra)); 
  