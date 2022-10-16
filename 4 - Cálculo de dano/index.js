const nomePrimeiro = prompt("Informe o nome do primeiro personagem: ")
const poderPrimeiro = prompt("Informe o poder de ataque de " + nomePrimeiro + ":")

const nomeSegundo = prompt("Informe o nome do segundo personagem: ")
const vidaSegundo = prompt("Informe os pontos de vida de " + nomeSegundo+ ":")
const defesaSegundo = prompt("Informe o poder de defesa de " + nomeSegundo + ":")
const escudoSegundo = confirm("Se " + nomeSegundo + " possui um escudo, então clique em \"Ok\"")

let danoCausado

if(poderPrimeiro > defesaSegundo){
    if(escudoSegundo == false){
        danoCausado = poderPrimeiro - defesaSegundo
    }else{
        danoCausado = (poderPrimeiro - defesaSegundo)/2
    }
}else{
    danoCausado = 0
}

let vidaSubtraida = vidaSegundo - danoCausado

alert("Nome do atacante: " + nomePrimeiro + "\nPoder de ataque: " + poderPrimeiro)

alert("Nome do atacado: " + nomeSegundo + "\nPontos de defesa: " + defesaSegundo + "\nDano recebido: " + danoCausado + "\nPontos de vida atual: " + vidaSubtraida)