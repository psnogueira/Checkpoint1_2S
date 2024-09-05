// Exercício: Tópico 5: Decorators em TypeScript
console.log('Exercício: Tópico 5: Decorators em TypeScript');

function medirTempoDeExecucao(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Lógica do decorator aqui

    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Medindo o tempo de execução do método ${propertyKey}`);
        const t1 = performance.now();
        const resultado = metodoOriginal.apply(this, args);
        const t2 = performance.now();
        console.log(`O método ${propertyKey} demorou ${t2 - t1} ms para ser executado`);
        return resultado;
    }

    return descriptor;
}

class Calculadora {
    @medirTempoDeExecucao
    somarNumeros(array: number[]): number {
        // Simula uma soma de números
        return array.reduce((a, b) => a + b, 0);
    }
}

// Exemplo de uso:
const calc = new Calculadora();