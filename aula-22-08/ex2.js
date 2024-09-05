var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercício 2: Exercícios de Classes e Herança:
console.log('Exercício 2: Exercícios de Classes e Herança');
// Exercício 1:
console.log('Exercício 1:');
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    Funcionario.prototype.descricao = function () {
        return "Nome: ".concat(this.nome, ", Cargo: ").concat(this.cargo, ", Sal\u00E1rio: ").concat(this.salario);
    };
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, cargo, salario, departamento) {
        var _this = _super.call(this, nome, cargo, salario) || this;
        _this.departamento = departamento;
        return _this;
    }
    Gerente.prototype.descricao = function () {
        return "".concat(_super.prototype.descricao.call(this), ", Departamento: ").concat(this.departamento);
    };
    return Gerente;
}(Funcionario));
var gerente = new Gerente('Pedro', 'Gerente', 10000, 'TI');
console.log(gerente.descricao());
// Exercício 2:
console.log('Exercício 2:');
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.exibirSaldo = function () {
        console.log("Saldo: ".concat(this.saldo));
    };
    return ContaBancaria;
}());
var contaBancaria = new ContaBancaria('Joana', 1000);
contaBancaria.exibirSaldo();
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(titular, saldo, limiteCredito) {
        var _this = _super.call(this, titular, saldo) || this;
        _this.limiteCredito = limiteCredito;
        return _this;
    }
    ContaCorrente.prototype.exibirSaldo = function () {
        console.log("Saldo: ".concat(this.saldo, ", Limite de Cr\u00E9dito: ").concat(this.limiteCredito));
    };
    return ContaCorrente;
}(ContaBancaria));
var contaCorrente = new ContaCorrente('Pedro', 1000, 500);
contaCorrente.exibirSaldo();
// Exercício 3:
