function extraer(si, inicio, fin) {
    return si.substring(inicio, fin);
}
let texto = "JavaScript";
let inicio = 4;
let fin = 10;
console.log(extraer(texto, inicio, fin));
