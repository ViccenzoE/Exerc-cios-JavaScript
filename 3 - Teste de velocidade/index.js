const firstVelocity = parseInt(prompt("Digite a primeira velocidade:"))
const secondVelocity = parseInt(prompt("Digite a segunda velocidade:"))

if(firstVelocity > secondVelocity){
    alert("O primeiro veículo é mais rápido")
} else if(secondVelocity > firstVelocity){
    alert("O segundo veículo é mais rápido")
} else {
    alert("Ambos possuem a mesma velocidade")
}