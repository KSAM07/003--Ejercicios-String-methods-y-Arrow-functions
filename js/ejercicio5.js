function reemplazarPalabra(si, palabrav, palabran) {
    return si.replace(palabrav, palabran);
}
let texto = "tonto mundo";
let palabrav = "mundo";
let palabran = "amigo";
console.log(reemplazarPalabra(texto, palabrav, palabran));
