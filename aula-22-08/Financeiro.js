"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceiroNamespace = void 0;
var FinanceiroNamespace;
(function (FinanceiroNamespace) {
    function calcularImposto(valor, taxa) {
        return valor * taxa;
    }
    FinanceiroNamespace.calcularImposto = calcularImposto;
    function calcularDesconto(valor, taxa) {
        return valor * taxa;
    }
    FinanceiroNamespace.calcularDesconto = calcularDesconto;
    var Orcamento = /** @class */ (function () {
        function Orcamento(valorTotal, itens) {
            this.valorTotal = valorTotal;
            this.itens = itens;
        }
        return Orcamento;
    }());
    FinanceiroNamespace.Orcamento = Orcamento;
})(FinanceiroNamespace || (exports.FinanceiroNamespace = FinanceiroNamespace = {}));
