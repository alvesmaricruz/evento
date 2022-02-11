let dataEvento = new Date("02/15/2022")
let dataHoje = new Date("02/11/2022")
console.log(dataEvento)

if(dataEvento > dataHoje){
    console.log("Evento válido")
}else{
    console.log("Evento negado")
}

let participantes = 100

if(participantes <= 100) {
    console.log ("dentro do limite de participantes, seguir cadastro")
} else {
    console.log("ultrapassado o limite de participantes, cadastro negado.")
}

let listaParticipantes = ["Mariana, Jarbas, Carlos, Juliana"]
for(let contador = 0; contador < listaParticipantes.length; contador ++){
    console.log(listaParticipantes[contador])
}

let idadeParticipante = '19'

console.log("idadeParticipante")

if(idadeParticipante >= 18) {
    console.log("Cadastro permitido")
} else {
    console.log("Cadastro negado")
}