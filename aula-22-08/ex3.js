"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exercício 3: Exercícios de Módulos e Namespaces:
console.log('Exercício 3: Exercícios de Módulos e Namespaces');
// Exercício 1:
console.log('Exercício 1:');
var Cliente_1 = require("./Cliente");
var Pedido_1 = require("./Pedido");
var cliente = new Cliente_1.Cliente('Joana', 'email@fiap.com');
var pedido = new Pedido_1.Pedido(cliente, 'Notebook', 3000);
pedido.exibirPedido();
// Exercício 2:
console.log('Exercício 2:');
var Financeiro_1 = require("./Financeiro");
var orcamento = new Financeiro_1.FinanceiroNamespace.Orcamento(1000, ['Notebook', 'Mouse']);
console.log("Valor total: ".concat(orcamento.valorTotal));
var imposto = Financeiro_1.FinanceiroNamespace.calcularImposto(orcamento.valorTotal, 0.1);
var desconto = Financeiro_1.FinanceiroNamespace.calcularDesconto(orcamento.valorTotal, 0.05);
console.log("Imposto: ".concat(imposto));
console.log("Desconto: ".concat(desconto));
orcamento.valorTotal = orcamento.valorTotal + imposto;
console.log("Valor total ap\u00F3s imposto: ".concat(orcamento.valorTotal));
orcamento.valorTotal = orcamento.valorTotal - desconto;
console.log("Valor total ap\u00F3s imposto e desconto: ".concat(orcamento.valorTotal));
