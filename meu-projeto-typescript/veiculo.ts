// Exercício 3: Classes e Herança
class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}

class Aluno extends Pessoa {
    curso: string;

    constructor(nome: string, idade: number, curso: string) {
        super(nome, idade);
        this.curso = curso;
    }

    exibirInformacoesCompleta(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}`);
    }
}

const aluno1 = new Aluno("Pedro", 21, "Engenharia de Computação");

aluno1.exibirInformacoesCompleta();