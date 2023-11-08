
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
    $("#login").fadeIn(); 
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
let totalPizza = "-"

let qtdBurguer = 0
let totalBurguer = "-"

let qtdDog = 0
let totalDog =  "-"

let qtdPotato = 0
let totalPotato =  "-"

let qtdSoda = 0
let totalSoda =  "-" 

let qtdSauce = 0 
let totalSauce =  "-"

function pizza(){
 qtdPizza = document.getElementById("qtdPiz").value
 totalPizza = qtdPizza*valuePizza
console.log(qtdPizza)

notifacaoCompra()
}

function burguer(){
qtdBurguer = document.getElementById("qtdBur").value
totalBurguer = qtdBurguer*valueBurguer
console.log(qtdBurguer)

notifacaoCompra()
}

function dog(){
 qtdDog =  document.getElementById("qtdDog").value
 totalDog = qtdDog*valueDog
console.log(qtdDog)

notifacaoCompra()
}

function potato(){
qtdPotato =  document.getElementById("qtdPot").value
totalPotato = qtdPotato*valuePotato
console.log(qtdPotato)

notifacaoCompra()
}

function soda(){
qtdSoda =  document.getElementById("qtdRef").value
totalSoda = qtdSoda*valueSoda
console.log(qtdSoda)

notifacaoCompra()
}

function sauce(){
qtdSauce = document.getElementById("qtdSau").value
totalSauce = qtdSauce*valueSauce
console.log(qtdSauce)

notifacaoCompra()
}

let totalCompra = 0

function fechamentoCompra(value){
    if(value!="-"){
 totalCompra += value 
    }else{
        // console.log("error")
    }
}

function finalizar(){
  document.getElementById('notinha').style.display = "block"   
  console.log("finalizado")

  document.getElementById('saidaQtdPiz').textContent = qtdPizza 
  document.getElementById('saidaPiz').textContent = totalPizza 
  fechamentoCompra(totalPizza)

  document.getElementById('saidaQtdBur').textContent = qtdBurguer 
  document.getElementById('saidaBur').textContent = totalBurguer
  fechamentoCompra(totalBurguer)

  document.getElementById('saidaQtdDog').textContent = qtdDog
  document.getElementById('saidaDog').textContent = totalDog 
  fechamentoCompra(totalDog)

  document.getElementById('saidaQtdPot').textContent = qtdPotato 
  document.getElementById('saidaPot').textContent = totalPotato
  fechamentoCompra(totalPotato)

  document.getElementById('saidaQtdSof').textContent = qtdSoda 
  document.getElementById('saidaSof').textContent = totalSoda 
  fechamentoCompra(totalSoda)

  document.getElementById('saidaQtdSau').textContent = qtdSauce 
  document.getElementById('saidaSau').textContent = totalSauce
  fechamentoCompra(totalSauce)

  document.getElementById('totalProd').textContent =  totalCompra 

}

// document.getElementsByClassName("btnBuy").addEventListener("click", notifacaoCompra)

function notifacaoCompra(){ 

    var notificacao = document.querySelector('#notificaoCompra');
    var styles = window.getComputedStyle(notificacao);
    var display = styles.getPropertyValue("display")

   console.log(display)

 if(display == "none"){
    $("#notificaoCompra").fadeIn(); 
    console.log("colocou ")
  
}

function tiraNotificação(){
    $("#notificaoCompra").fadeOut();
    console.log("tirou ")
}
setTimeout(tiraNotificação, 1000)
}

