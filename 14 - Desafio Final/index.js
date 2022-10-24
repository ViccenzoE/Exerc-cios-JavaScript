alert("Bem vindo(a) às vagas de emprego!")
const vagas = []
const vaga = {candidato: '', contador: 0}

do{
    var option = menu()

    switch(option){
        case '1':    
            showVagas()
            break

        case '2':
            cadastroVagas()
            break

        case '3':
            visualizarVaga()
            break

        case '4':
            cadastroCandidato()
            break

        case '5':
            excluirVaga()
            break

        case '6':
            alert("Encerrando...")
            break

        default:
            alert("Opção inválida!")
    }
} while (option != '6')

function menu(){
    return prompt("O que gostaria de fazer?\n\n"+ 
    "1. Listar vagas disponíveis"+ 
    "\n2. Criar uma nova vaga" + 
    "\n3. Visualizar uma vaga" + 
    "\n4. Inscrever um candidato em uma vaga" + 
    "\n5. Excluir uma vaga" + 
    "\n6. Sair")
}

function showVagas(){
    if (vagas[0] != undefined) {
        for(let i = 0; i < vagas.length; i++){
            alert("Vaga nº "+ (i+1) + " - " + vagas[i].nome +
            "\nCandidatos inscritos: " + vagas[i].contador + "\n")
        }  
    } else {
        alert("Não há vagas cadastradas!")
    }   
}

function cadastroVagas(){
    let continuar = true

    do{
        vaga.nome = prompt("Informe o nome da vaga")
    } while (vaga.nome == '')

    if(vaga.nome == null){
        alert("Retornando ao menu inicial.")
        continuar = false
    }

    if(continuar == true){
        do{
            vaga.desc = prompt("Informe uma descrição para a vaga")
        } while (vaga.desc == '')

        if(vaga.desc == null){
            alert("Retornando ao menu inicial.")
            continuar = false
        }
    }   
    
    if(continuar == true){
        do{
            vaga.dataLim = prompt("Informe o valor limite no formato dd/mm/yyyy")
        } while (vaga.dataLim == '') 
    
        if(vaga.dataLim == null){
            alert("Retornando ao menu inicial.")
        } 
    }
    
    if(continuar == true){
        const confirmacao = 
        confirm("DADOS DO USUÁRIO: \n" + 
        "\nNome da vaga: " + vaga.nome + 
        "\nDescrição da vaga: "+ vaga.desc +
        "\nData limite: " + vaga.dataLim +
        "\n\nConfirmar a vaga?")

        if(confirmacao){
            vagas.push(vaga)
            alert("Vaga salva com sucesso!")
        } else {
            alert("Voltando ao menu.")
        }
    }
}

function visualizarVaga(){
    if(vagas[0] == null){
        alert("Não há vagas cadastradas")
    } else {
        var visualizar = parseInt(prompt("Qual vaga deseja ver?"))-1

        if(visualizar <= vagas.length && visualizar > -1){
            alert("Vaga nº " + (visualizar + 1) + 
            "\nNome: " + vagas[visualizar].nome + 
            "\nDescrição: " + vagas[visualizar].desc +
            "\nData limite " + vagas[visualizar].dataLim +
            "\nQuantidade de candidatos: " + vagas[visualizar].contador +
            "\nNome dos candidatos: \n" + vagas[visualizar].candidato)
        } else {
            alert("Índice de vaga não existente!")
        }
    }
}

function cadastroCandidato(){
    let contador = 0
    do {
        var candidato = prompt("Qual o nome do candidato?")
    } while(candidato == '')

    if(candidato == null){
        alert("Retornando ao menu inicial.")
        candidato = false
    }

    if(vagas[0] == null){
        alert("Nenhuma vaga cadastrada.")
        candidato = false
    }
    
    if (candidato != false) {   
        do {
            let candInd = parseInt(prompt("Qual o índice da vaga que deseja cadastrá-lo(a)?")) - 1

            if(candInd != undefined){
                const confCand = confirm("Deseja gravar " + candidato + " para a vaga '" + vagas[candInd].nome + "'?")

                if(confCand){
                    contador += 1
                    vagas[candInd].contador += contador
                    vagas[candInd].candidato += candidato + "\n"
                    alert("Candidato salvo com sucesso!")
                    candidato = true
                } else {
                    "Retornando ao menu inicial."
                }
            } else {
                alert("Índice de vaga inválido!")
                candidato = false
            }
        } while(candidato == false)
    }
}

function excluirVaga(){

    do{
        var excluir = prompt("Qual vaga deseja excluir?")
        if(excluir == '' || excluir == String){
            alert("Índice inválido!")
        }
    } while(excluir == '' || excluir == String)

    if(vagas[0] != undefined){
        const deletar = confirm("Deseja excluir '" + vagas[excluir-1].nome + "'")

        if(deletar){
            vagas.splice((excluir - 1), 1)
            alert("Vaga deletada com sucesso!")
        } else {
            alert("Retornando ao menu inicial.")
        }
    } else {
        alert("Índice inválido!")
    }
}