// Exercício: Tópico 8: Async/Await e Promises em TypeScript
console.log('Exercício: Tópico 8: Async/Await e Promises em TypeScript');

async function buscarDadosDaAPI(): Promise<string> {
    // Lógica da função aqui
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.5;  // Simula 50% de chance de sucesso

            if (sucesso) {
                resolve('Dados recebidos da API');
            } else {
                reject('Falha ao buscar dados da API');
            }
        }, 2000);  // Simula um atraso de 2 segundos
    });
}

// Exemplo de uso:
async function executarBusca() {
    try {
        const dados = await buscarDadosDaAPI();
        console.log(dados);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

executarBusca();  // Simula a busca de dados com async/await
