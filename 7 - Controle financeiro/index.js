let startMoney = parseFloat(prompt("Quanto dinheiro está disponível?"))
let totalMoney
let continueProgram = true

do {
    var option = prompt("Selecione a opção desejada:\n1 - Adicionar dinheiro\n2 - Remover dinheiro\n3 - Encerrar o programa")

    if(option == 1){
        var addMoney = parseFloat(prompt("Quanto dinheiro deseja adicionar?"))

        totalMoney = parseFloat(startMoney + addMoney)
        
        totalMoney = parseFloat(totalMoney)

        alert("Novo valor total: " + totalMoney)
    } else if (option == 2){
        var lessMoney = parseFloat(prompt("Quanto dinheiro deseja retirar?"))

        totalMoney = parseFloat(startMoney - lessMoney)

        totalMoney = parseFloat(totalMoney)

        alert("Novo valor total: " + totalMoney)
    } else if (option == 3){
        continueProgram = false
    }
} while(continueProgram == true)