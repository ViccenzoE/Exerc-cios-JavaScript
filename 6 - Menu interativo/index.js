let cont = true

do {
    var option = prompt("Escolha uma das opões abaixo:\n1)\n2)\n3)\n4)\n5) Encerrar")
    alert("Opção escolhida: " + option)

    if(option == 5){
        alert("O sistema está encerrando")
        cont = false
    }
} while(cont == true)