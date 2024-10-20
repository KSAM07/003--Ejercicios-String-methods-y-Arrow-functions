function contarLetras(si, letra) {
    let contador = 0;
    for (let i = 0; i < si.length; i++) {
        if (si[i] === letra) {
            contador++;
        }
    }
    return contador;
}
let texto = "javascript";
let letra = "a";
console.log(contarLetras(texto, letra)); 
