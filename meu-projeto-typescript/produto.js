// Exercício 2: Funções e Interfaces
function exibirInformacoes(livro) {
    return "O livro \"".concat(livro.titulo, "\" foi escrito por ").concat(livro.autor, " e publicado em ").concat(livro.anoPublicacao, ".");
}
var livro1 = {
    titulo: "Seminário dos Ratos",
    autor: "Lygia Fagundes Telles",
    anoPublicacao: 1977
};
console.log(exibirInformacoes(livro1));
