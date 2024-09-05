export namespace FinanceiroNamespace {
    export function calcularImposto(valor: number, taxa: number): number {
        return valor * taxa;
    }

    export function calcularDesconto(valor: number, taxa: number): number {
        return valor * taxa;
    }

    export class Orcamento {
        constructor(public valorTotal: number, public itens: string[]) {}
    }
}