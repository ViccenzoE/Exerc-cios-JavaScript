let area
let forma
let menu

function areaRetangulo(base, altura){
    area = base * altura  
    forma = "retângulo" 
    alert("Área do " + forma + ": " + area)
}

function areaTriangulo(base, altura){
    area = base * altura / 2
    forma = "triângulo" 
    alert("Área do " + forma + ": " + area)
}

function areaQuadrado(lado){
    area = lado * lado
    forma = "quadrado" 
    alert("Área do " + forma + ": " + area)
}

function areaTrapezio(baseMaior, baseMenor, altura){
    area = ((baseMaior + baseMenor) * altura)/2
    forma = "trapézio"
    alert("Área do " + forma + ": " + area)
}

function areaCirculo(raio){
    area = 3.14 * raio * raio
    forma = "círculo"
    alert("Área do " + forma + ": " + area)
}

function opcao(){
    return menu = prompt("Qual das seguintes áreas deseja calcular?"+
    "\n1. Triângulo"+
    "\n2. Retângulo"+
    "\n3. Quadrado"+
    "\n4. Trapézio"+
    "\n5. Círculo"+
    "\n6. Sair")
}

function executar(){
    do {
        opcao()
    
        switch(menu){
            case "1":
                let baseTri = prompt("Informe o valor da base")
                let alturaTri = prompt("Informe o valor da altura")
                areaTriangulo(baseTri, alturaTri)
                break
            
            case "2":
                let baseRet = prompt("Informe o valor da base")
                let alturaRet = prompt("Informe o valor da altura")
                areaRetangulo(baseRet, alturaRet)
                break
    
            case "3":
                let lado = prompt("Informe o valor do lado")
                areaQuadrado(lado)
                break
    
            case "4":
                let baseMaior = prompt("Informe o valor da base maior")
                let baseMenor = prompt("Informe o valor da base menor")
                let alturaTrap = prompt("Informe o valor da altura")
                areaTrapezio(baseMaior, baseMenor, alturaTrap)
                break
    
            case "5":
                let raioCirculo = prompt("Informe o raio")
                areaCirculo(raioCirculo)
                break
    
            case "6":
                break
            
            default:
                alert("Opção inválida!")
        }
    } while (menu !== "6")
}

executar()