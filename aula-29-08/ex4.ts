// Exercício: Tópico 4: Generics em TypeScript
console.log('Exercício: Tópico 4: Generics em TypeScript');

function encontrarMaiorElemento<T>(array: T[]): T {
    if (array.length === 0) {
        throw new Error("O array está vazio!");
    }

    let maiorElemento: T = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorElemento) {
            maiorElemento = array[i];
        }
    }

    return maiorElemento;
}

// Exemplo de uso:
const maiorNumero = encontrarMaiorElemento([10, 20, 30]);  // 30
const maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']);  // 'zebra'

console.log(maiorNumero);
console.log(maiorPalavra);