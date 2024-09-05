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
console.log("Olá, mundo");
var nome = "João";
var idade = 30;
var ativo = true;
var numeros = [1, 2, 3];
var tupla = ["Alice", 25];
var Cor;
(function (Cor) {
    Cor[Cor["Vermelho"] = 0] = "Vermelho";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
var cor = Cor.Verde;
function cumprimentar(nome) {
    return "Ol\u00E1, ".concat(nome);
}
function somar(a, b) {
    return a + b;
}
var pessoa = {
    nome: "Ana",
    idade: 28
};
var idUsuario = "123";
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.falar = function () {
        console.log("".concat(this.nome, " faz um barulho."));
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.latir = function () {
        console.log("".concat(this.nome, " late."));
    };
    return Cachorro;
}(Animal));
var cachorro = new Cachorro("Buddy");
cachorro.falar();
cachorro.latir();
