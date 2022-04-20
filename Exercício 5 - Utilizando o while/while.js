let name = prompt("Boa noite! Poderia informar o nome da nave, por favor?")
let choseoption = "" // Mantê-la vazia para que possa variar //
let pontodesaida = 0

choseoption = prompt("Deseja entrar em dobra espacial? \n 1- SIM \n 2-NÃO")

while(choseoption == "1") {
    pontodesaida ++
    choseoption = prompt("Deseja realizar uma próxima dobra? \n 1-SIM \n 2-NÃO")
} 
   

alert("Nome da nave: " + name + "\n Vezes em que fora feitas as dobras: " + pontodesaida)