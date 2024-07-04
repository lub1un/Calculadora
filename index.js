const prompt = require("prompt-sync")();

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
                console.log(`O resultado da adição é ${soma} `);
                imprimirMenu()
                break;
            case '2':
                const subtração1 = parseFloat(prompt("Digite o  primeiro numero: "));
                const subtração2 = parseFloat(prompt("Digite o segundo numero: "));
                let subtracao = subtração1 - subtração2
                console.log(`O resultado da subtração é ${subtracao} `);
                imprimirMenu()
                break;
            case '3':
                const multiplicacao1 = parseFloat(prompt("Digite o  primeiro numero: "));
                const multiplicacao2 = parseFloat(prompt("Digite o segundo numero: "));
                let multiplicacao = multiplicacao1 * multiplicacao2
                console.log(`O resultado da multiplicação é ${multiplicacao}`);
                imprimirMenu()
                break;
            case '4':
                const divisao1 = parseFloat(prompt("Digite o  primeiro numero: "));
                const divisao2 = parseFloat(prompt("Digite o segundo numero: "));
                let divisao = divisao1 / divisao2
                console.log(`O resultado da divisão é ${divisao}`);
                imprimirMenu()
                break;
            case '5':
                const porcentagem1 = parseFloat(prompt("Digite a porcentagem e em seguida o numero que deseja calcuar: "));
                const porcentagem2 = parseFloat(prompt("segundo numero: "));
                let porcentagem = (porcentagem1 * porcentagem2) / 100
                if (porcentagem === 0) {
                    console.log("Divisão inválida")
                }else {
                    console.log(`O resultado da porcentagem é ${porcentagem} `);
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
    
    
