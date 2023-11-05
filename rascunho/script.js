
var nome
var senha 
var sexo

function getValue(){

    nome = document.getElementById("nome").value
    senha = document.getElementById("idade").value

console.log(senha)
    
document.getElementById('login').style.visibility = 'hidden'
document.getElementById('log').style.textDecoration = 'none'


    if(nome=="adm" && senha=="123"){
        document.getElementById("log").innerHTML = "Seja bem vindo " + nome + " o foda"
    }else{      
        document.getElementById("log").innerHTML = "Seja bem vindo " + nome 
    }

}

function login(){
    document.getElementById('login').style.visibility = 'visible'

    
}