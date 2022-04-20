let oldname = prompt("Digite o nome da sua espaçonave")
let Charsubs = prompt("Qual caractere você deseja substituir?")
let Charsubs2 = prompt("Por qual caractere você deseja substituir?")
let newname = ""

for(let position = 0; position < oldname.length; position++) {
    if(oldname[position] == Charsubs) {
        newname += Charsubs2
    }  else {newname += oldname[position]
    }
}
alert("Novo nome da nave: " + newname)