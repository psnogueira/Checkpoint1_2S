// Exercício 2: Exercícios de Classes e Herança:
console.log('Exercício 2: Exercícios de Classes e Herança');

// Exercício 1:
console.log('Exercício 1:');

class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) {}

    descricao(): string {
        return `Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: ${this.salario}`
    }
}

class Gerente extends Funcionario {
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
        super(nome, cargo, salario)
    }

    descricao(): string {
        return `${super.descricao()}, Departamento: ${this.departamento}`
    }
}

const gerente: Gerente = new Gerente('Pedro', 'Gerente', 10000, 'TI')

console.log(gerente.descricao());

// Exercício 2:
console.log('Exercício 2:');

class ContaBancaria {
    constructor(public titular: string, public saldo: number) {}

    exibirSaldo(): void {
        console.log(`Saldo: ${this.saldo}`)
    }
}

const contaBancaria: ContaBancaria = new ContaBancaria('Joana', 1000)

contaBancaria.exibirSaldo();

class ContaCorrente extends ContaBancaria {
    constructor(titular: string, saldo: number, public limiteCredito: number) {
        super(titular, saldo)
    }

    exibirSaldo(): void {
        console.log(`Saldo: ${this.saldo}, Limite de Crédito: ${this.limiteCredito}`)
    }
}

const contaCorrente: ContaCorrente = new ContaCorrente('Pedro', 1000, 500)

contaCorrente.exibirSaldo();
