let name = prompt("Qual o seu nome, piloto?")
let VI = 0
let VA = prompt("A que velocidade o senhor gostaria de acelerar a nave?")
let VC = confirm("Estamos indo à velocidade: " + VA + "km/s")
if(VC) {
    VI=VA
}
if(VI <= 0) {
    alert("A nave está parada. Considere partir e aumentar a velocidade.")
}
else if(VI < 40) {
    alert("Você está devagar! Podemos aumentar mais.")
}
else if(VI >= 40 && VI < 80) {
    alert("Parece uma boa velocidade para manter.")
}
else if(VI >= 80 && VI < 100) {
    alert("Velocidade alta. Considere diminuir.")
}
else if(VI >= 100) {
    alert("Velocidade Perigosa! Controle automático forçado.")
}
alert("Nome do piloto: " + name + "\nVelocidade Atual: " + VI + "Km/s")


