let touristName = prompt("Informe o nome do turista:")
let arledyVisitCities = prompt("Digite 'sim' se você já visitou alguma cidade. Caso contrário, digite 'não'.")
let addCities = true
let counter = 0
let visitedCities = []

while(addCities == true){
    if(arledyVisitCities == 'sim'){
        counter += 1
        visitedCities.push(" " + prompt("Qual cidade você já visitou?"))
        addCities = confirm('Clique em "Ok" para adicionar mais uma cidade que já tenha visitado. Caso não tenha mais nenhuma, clique em "Cancelar"')
    }
}

alert("Nome: " + touristName + "\nNúmero de cidades visitadas: " + counter + "\nNome das cidades visitadas: " + visitedCities)