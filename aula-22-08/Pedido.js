"use strict";
// Módulo chamado Pedido.ts, que importa a classe Cliente e adiciona a classe Pedido, com as propriedades cliente (objeto do tipo Cliente), produto (string) e valor (number).
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(cliente, produto, valor) {
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
    }
    Pedido.prototype.exibirPedido = function () {
        console.log("Produto: ".concat(this.produto, ", Valor: ").concat(this.valor, ", Cliente: ").concat(this.cliente.nome));
    };
    return Pedido;
}());
exports.Pedido = Pedido;
