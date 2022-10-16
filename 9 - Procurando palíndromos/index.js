const word = prompt("Qual palavra deseja verificar se é um palíndromo?")
let invertedWord = ''

for(let i = word.length - 1; i >= 0; i--){
    invertedWord += word[i]
}

if(invertedWord === word){
    alert(invertedWord + " é um palíndromo!")
}else {
    alert(invertedWord + " NÃO é um palíndromo!\n\n" + word + " !== " + invertedWord)
}