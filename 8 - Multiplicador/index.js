let number = parseInt(prompt("Informe um número:"))
let total = 0
let results = []
let i = 1

for(i; i <= 20; i++){
    total = number * i
    results.push(total)
}

alert("1 x " + number + " = " + results[0] + "\n2 x " + number + " = " + results[1] + "\n3 x " + number + " = " + results[2] + "\n4 x " + number + " = " + results[3] + "\n5 x " + number + " = " + results[4] + "\n6 x " + number + " = " + results[5] + "\n7 x " + number + " = " + results[6] + "\n8 x " + number + " = " + results[7] + "\n9 x " + number + " = " + results[8] + "\n10 x " + number + " = " + results[9] + "\n11 x " + number + " = " + results[10] + "\n12 x " + number + " = " + results[11] + "\n13 x " + number + " = " + results[12] + "\n14 x " + number + " = " + results[13] + "\n15 x " + number + " = " + results[14] + "\n16 x " + number + " = " + results[15] + "\n17 x " + number + " = " + results[16] + "\n18 x " + number + " = " + results[17] + "\n19 x " + number + " = " + results[18] + "\n20 x " + number + " = " + results[19] + "\n")