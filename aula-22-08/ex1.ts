// Exercício 1: Exercícios de Interfaces e Tipos Avançados:
console.log('Exercício 1: Exercícios de Interfaces e Tipos Avançados');

// Exercício 1:
console.log('Exercício 1:');

interface Produto {
    nome: string
    preco: number
    categoria: string
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix'

function comprar(produto: Produto, formaPagamento: FormaPagamento): string {
    return `Você comprou o produto ${produto.nome} por ${produto.preco} com a forma de pagamento ${formaPagamento}`
}

const produto: Produto = {
    nome: 'Notebook',
    preco: 5000,
    categoria: 'Eletrônicos'
}

console.log(comprar(produto, 'cartão'));

// Exercício 2:
console.log('Exercício 2:');

interface Pessoa {
    nome: string
    idade: number
}

interface Empregado {
    empresa: string
    salario: number
}

type PessoaEmpregado = Pessoa & Empregado

function exibirInformacoes(pessoaEmpregado: PessoaEmpregado): string {
    return `Nome: ${pessoaEmpregado.nome}, Idade: ${pessoaEmpregado.idade}, Empresa: ${pessoaEmpregado.empresa}, Salário: ${pessoaEmpregado.salario}`
}

const pessoaEmpregado: PessoaEmpregado = {
    nome: 'Pedro',
    idade: 21,
    empresa: 'Google',
    salario: 10000
}

console.log(exibirInformacoes(pessoaEmpregado));



