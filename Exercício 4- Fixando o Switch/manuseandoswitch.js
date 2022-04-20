alert("Olá! Seja bem-vindo")
let dal = prompt("Qual a distância a ser trabalhada em anos-luz?")
let OL = prompt("Qual a unidade que seja converter? " + "\n1.Parsec (PC)" + "\n2.Unidade Astronômica (AU)" + "\n3.Quilômetros (KM)" + "\n\n (Digite o número da opção desejada)")
let OLR = confirm("Distância a ser calculada é: " + dal)


let CO
let CD

switch (OL) {
    case "1":
        CO = "Parsec"
        CD = dal * 0.306601
        break;
    case "2":
        CO = "Unidade Astronômica"
        CD = dal * 63241.1
        break
    case "3":
        CO = "Quilômetros"
        CD = dal * 9.5 * Math.pow(10, 12)
        break
    default:
        CO = " Unidade não identificada"
        CD = " Conversor fora do escopo"
        break;
}
alert("Distância em Anos-Luz: " + dal + "\n" + CO + ": " + CD)

