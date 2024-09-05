// Exercício 1: Exercícios de Interfaces e Tipos Avançados:
console.log('Exercício 1: Exercícios de Interfaces e Tipos Avançados');
// Exercício 1:
console.log('Exercício 1:');
function comprar(produto, formaPagamento) {
    return "Voc\u00EA comprou o produto ".concat(produto.nome, " por ").concat(produto.preco, " com a forma de pagamento ").concat(formaPagamento);
}
var produto = {
    nome: 'Notebook',
    preco: 5000,
    categoria: 'Eletrônicos'
};
console.log(comprar(produto, 'cartão'));
// Exercício 2:
console.log('Exercício 2:');
function exibirInformacoes(pessoaEmpregado) {
    return "Nome: ".concat(pessoaEmpregado.nome, ", Idade: ").concat(pessoaEmpregado.idade, ", Empresa: ").concat(pessoaEmpregado.empresa, ", Sal\u00E1rio: ").concat(pessoaEmpregado.salario);
}
var pessoaEmpregado = {
    nome: 'Pedro',
    idade: 21,
    empresa: 'Google',
    salario: 10000
};
console.log(exibirInformacoes(pessoaEmpregado));
