console.log("Olá, mundo");

let nome: string = "João";
let idade: number = 30;
let ativo: boolean = true;
let numeros: number[] = [1, 2, 3];
let tupla: [string, number] = ["Alice", 25];

enum Cor {
 Vermelho,
 Verde,
 Azul
}

let cor: Cor = Cor.Verde;

function cumprimentar(nome: string): string {
 return `Olá, ${nome}`;
}

function somar(a: number, b: number): number {
 return a + b;
}

interface Pessoa {
 nome: string;
 idade: number;
}

let pessoa: Pessoa = {
 nome: "Ana",
 idade: 28
};

type ID = string | number;

let idUsuario: ID = "123";

class Animal {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
    
    falar(): void {
        console.log(`${this.nome} faz um barulho.`);
    }
}

class Cachorro extends Animal {
    latir(): void {
        console.log(`${this.nome} late.`);
    }
}

let cachorro = new Cachorro("Buddy");
cachorro.falar();
cachorro.latir();