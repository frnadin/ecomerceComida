
var nome
var senha 
var sexo

function getValue(){ // função login script

    nome = document.getElementById("nome").value
    senha = document.getElementById("idade").value

console.log(senha)
    
document.getElementById('login').style.visibility = 'hidden'
document.getElementById('log').style.marginLeft = "80%"
document.getElementById('log').style.textDecorationLine = "none"


    if(nome=="fmg" && senha=="123"){
        document.getElementById("log").innerHTML = "Seja bem vindo " + nome + " o foda"
    }else{      
        document.getElementById("log").innerHTML = "Seja bem vindo " + nome 
    }

}

function login(){ // função para aparecer o login
    document.getElementById('login').style.visibility = 'visible'
    }

 
