// Exercício 3: Exercícios de Módulos e Namespaces:
console.log('Exercício 3: Exercícios de Módulos e Namespaces');

// Exercício 1:
console.log('Exercício 1:');

import { Cliente } from './Cliente';
import { Pedido } from './Pedido';

const cliente: Cliente = new Cliente('Joana', 'email@fiap.com');
const pedido: Pedido = new Pedido(cliente, 'Notebook', 3000);

pedido.exibirPedido();

// Exercício 2:
console.log('Exercício 2:');

import { FinanceiroNamespace } from './Financeiro';

const orcamento: FinanceiroNamespace.Orcamento = new FinanceiroNamespace.Orcamento(1000, ['Notebook', 'Mouse']);
console.log(`Valor total: ${orcamento.valorTotal}`);

const imposto: number = FinanceiroNamespace.calcularImposto(orcamento.valorTotal, 0.1);
const desconto: number = FinanceiroNamespace.calcularDesconto(orcamento.valorTotal, 0.05);
console.log(`Imposto: ${imposto}`);
console.log(`Desconto: ${desconto}`);

orcamento.valorTotal = orcamento.valorTotal + imposto;
console.log(`Valor total após imposto: ${orcamento.valorTotal}`);

orcamento.valorTotal = orcamento.valorTotal - desconto;
console.log(`Valor total após imposto e desconto: ${orcamento.valorTotal}`);
