let spacename = prompt("Digite o nome da sua espaçonave")

let invertspacename = ""

for(let i = spacename.length - 1; i >= 0; i--) {
    if(spacename[i] == "e") {
        break
    } invertspacename += spacename[i]
}
alert(invertspacename)
alert("Nome original da nave: " + spacename +"\n Nome invertido e após ocultação: " + invertspacename)
