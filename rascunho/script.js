
var user
var pass 
function getValue(){ // função login script

    user = document.getElementById("nome").value
    pass = document.getElementById("idade").value

console.log(pass)
    
document.getElementById('login').style.display = "none"
document.getElementById('log').style.marginLeft = "80%"
document.getElementById('log').style.textDecorationLine = "none"


    if(user=="fmg" && pass=="2103"){
        document.getElementById("log").innerHTML = "Seja bem vindo " + user + " o foda"
    }else{      
        document.getElementById("log").innerHTML = "Seja bem vindo " + user 
    }

}

function login(){ // função para aparecer o login
    document.getElementById('login').style.display = "block"
    }

let carrinho 
const valuePizza = 7.99
const valueBurguer = 9.99
const valueDog = 4.99
const valuePotato = 2.99
const valueSoda = 4.99
const valueSauce = 0.99

let qtdPizza = 0
let totalPizza = 0

let qtdBurguer = 0
let totalBurguer = 0 

let qtdDog = 0
let totalDog = 0

let qtdPotato = 0
let totalPotato = 0

let qtdSoda = 0
let totalSoda = 0 

let qtdSauce = 0 
let totalSauce = 0

function pizza(){
 qtdPizza = document.getElementById("qtdPiz").value
 totalPizza = qtdPizza*valuePizza
console.log(qtdPizza)
}

function burguer(){
qtdBurguer = document.getElementById("qtdBur").value
totalBurguer = qtdBurguer*valueBurguer
console.log(qtdBurguer)

}

function dog(){
 qtdDog =  document.getElementById("qtdDog").value
 totalDog = qtdDog*valueDog
console.log(qtdDog)
}

function potato(){
qtdPotato =  document.getElementById("qtdPot").value
totalPotato = qtdPotato*valuePotato
console.log(qtdPotato)
}

function soda(){
qtdSoda =  document.getElementById("qtdRef").value
totalSoda = qtdSoda*valueSoda
console.log(qtdSoda)
}

function sauce(){
qtdSauce = document.getElementById("qtdSau").value
totalSauce = qtdSauce*valueSauce
console.log(qtdSauce)
}

function finalizar(){
  document.getElementById('notinha').style.display = "block"   
  console.log("finalizado")

  document.getElementById('saidaQtdPiz').textContent = qtdPizza 
  document.getElementById('saidaPiz').textContent = totalPizza 

  document.getElementById('saidaQtdBur').textContent = qtdBurguer 
  document.getElementById('saidaBur').textContent = totalBurguer

  document.getElementById('saidaQtdDog').textContent = qtdDog
  document.getElementById('saidaDog').textContent = totalDog 

  document.getElementById('saidaQtdPot').textContent = qtdPotato 
  document.getElementById('saidaPot').textContent = totalPotato

  document.getElementById('saidaQtdSof').textContent = qtdSoda 
  document.getElementById('saidaSof').textContent = totalSoda 
  
  document.getElementById('saidaQtdSau').textContent = qtdSauce 
  document.getElementById('saidaSau').textContent = totalSauce
}
