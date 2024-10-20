function contienePalabra(si, palabra) {
    return si.includes(palabra);
}
let texto =prompt("Ingresa la palabra");
let palabra = "genial";
console.log(contienePalabra(texto, palabra));
