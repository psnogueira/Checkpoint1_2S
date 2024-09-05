// Exercício: Tópico 4: Generics em TypeScript
console.log('Exercício: Tópico 4: Generics em TypeScript');
function encontrarMaiorElemento(array) {
    if (array.length === 0) {
        throw new Error("O array está vazio!");
    }
    var maiorElemento = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > maiorElemento) {
            maiorElemento = array[i];
        }
    }
    return maiorElemento;
}
// Exemplo de uso:
var maiorNumero = encontrarMaiorElemento([10, 20, 30]); // 30
var maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']); // 'zebra'
console.log(maiorNumero);
console.log(maiorPalavra);
