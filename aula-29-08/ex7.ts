// Exercício: Tópico 7: Manipulação de Erros em TypeScript

// Crie uma função chamada verificarEmail que lance um erro personalizado EmailInvalidoError caso o email passado não contenha o caractere @. Utilize try/catch para capturar e tratar esse erro quando a função for chamada.

class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'EmailInvalidoError';
    }
}

function verificarEmail(email: string): void {
    // Lógica da função aqui

    if (!email.includes('@')) {
        throw new EmailInvalidoError('Email inválido');
    }

    console.log('Email válido');

    return;
}

// Exemplo de uso:
try {
    verificarEmail('usuario.com');
} catch (error) {
    console.error(error.message);  // Deve imprimir "Email inválido"
}
