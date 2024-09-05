// Exercício 2: Funções e Interfaces

interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

function exibirInformacoes(livro: Livro): string {
    return `O livro "${livro.titulo}" foi escrito por ${livro.autor} e publicado em ${livro.anoPublicacao}.`;
}

const livro1: Livro = {
    titulo: "Seminário dos Ratos",
    autor: "Lygia Fagundes Telles",
    anoPublicacao: 1977
};

console.log(exibirInformacoes(livro1));