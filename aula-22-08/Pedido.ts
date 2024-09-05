// Módulo chamado Pedido.ts, que importa a classe Cliente e adiciona a classe Pedido, com as propriedades cliente (objeto do tipo Cliente), produto (string) e valor (number).

import { Cliente } from './Cliente';

export class Pedido {
    constructor(public cliente: Cliente, public produto: string, public valor: number
    ) {}

    exibirPedido(): void {
        console.log(`Produto: ${this.produto}, Valor: ${this.valor}, Cliente: ${this.cliente.nome}`);
    }
}
