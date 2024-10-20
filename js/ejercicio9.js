function capitalizarPrimeraLetra(si) {
    return si.charAt(0).toUpperCase() + si.slice(1);
}
let texto = prompt("javascript");
console.log(capitalizarPrimeraLetra(texto));
