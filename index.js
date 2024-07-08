const prompt = require("prompt-sync")();

let number = 0;

function imprimirMenu() {
    console.log(`
    -+ MENU +-
    1. Adição 
    2. Subtração 
    3. Multiplicação
    4. Divisão 
    5. Porcentagem
    6. Encerrar
    `);

    const result = prompt("Escolha uma operação: ");

        switch(result) {
            case '1':
                const soma1 = parseFloat(prompt("Digite o  primeiro numero: "));
                const soma2 = parseFloat(prompt("Digite o segundo numero: "));
                let soma = soma1 + soma2
                if (!isNaN(soma)) {
                    number = parseFloat(soma);  // Converte para número, se possível
                    console.log(`O resultado da soma é ${soma}`);
                } else {
                    console.log("Erro: Operação inválida.");
                }
                imprimirMenu()
                break;

            case '2':
                const subtração1 = parseFloat(prompt("Digite o  primeiro numero: "));
                const subtração2 = parseFloat(prompt("Digite o segundo numero: "));
                let subtracao = subtração1 - subtração2
                if (!isNaN(subtracao)) {
                    number = parseFloat(subtracao);  // Converte para número, se possível
                    console.log(`O resultado da subtração é ${subtracao}`);
                } else {
                    console.log("Erro: Operação inválida.");
                }
                imprimirMenu()
                break;

            case '3':
                const multiplicacao1 = parseFloat(prompt("Digite o  primeiro numero: "));
                const multiplicacao2 = parseFloat(prompt("Digite o segundo numero: "));
                let multiplicacao = multiplicacao1 * multiplicacao2
                if (!isNaN(multiplicacao)) {
                    number = parseFloat(multiplicacao);  // Converte para número, se possível
                    console.log(`O resultado da multiplicação é ${multiplicacao}`);
                } else {
                    console.log("Erro: Operação inválida.");
                }
                imprimirMenu()
                break;

            case '4':
                const divisao1 = parseFloat(prompt("Digite o  primeiro numero: "));
                const divisao2 = parseFloat(prompt("Digite o segundo numero: "));
                if (isNaN(divisao1) || isNaN(divisao2)) {
                    console.log("Erro: Algum dos valores digitados não é um número válido.");
                } else if (divisao2 === 0) {
                    console.log("Erro: Não é possível dividir por zero.");
                } else {
                    let divisao = divisao1 / divisao2;
                    console.log(`O resultado da divisão é ${divisao}`);
                }
                imprimirMenu()
                break;

            case '5':
                const porcentagem1 = parseFloat(prompt("Digite a porcentagem: "));
                const porcentagem2 = parseFloat(prompt("Segundo numero: "));
                let porcentagem = (porcentagem1 * porcentagem2) / 100
                if (!isNaN(porcentagem)) {
                    number = parseFloat(porcentagem);  // Converte para número, se possível
                    console.log(`O resultado da porcentagem é ${porcentagem}`);
                } else {
                    console.log("Erro: Operação inválida.");
                }
                imprimirMenu()
                break;

                case '6':
                    console.log("Processo finalizado com sucesso")
                return;
                default:
                console.log("Opção inválida. Por favor, escolha uma opção de 1 a 6.");
                imprimirMenu()
                
        }
        }
        imprimirMenu()
    
    
