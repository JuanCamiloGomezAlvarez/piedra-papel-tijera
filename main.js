console.log("en linea")
// selectores
const resultadoFinal = document.querySelector("#resultadoFinal")
const plantilla = document.querySelector("#plantilla")
const eleccion1 = document.querySelector("#eleccion1")
const eleccion2 = document.querySelector("#eleccion2")
const eleccion3 = document.querySelector("#eleccion3")
const piedra = document.querySelector("#piedra")
const papel = document.querySelector("#papel")
const tijera = document.querySelector("#tijera")
const pcEligio = document.querySelector("#pcEligio")
const intento = document.querySelector("#intento")
const jugar = document.querySelector("#jugar")

// variables
let jugadorElige = 0
let pcElige = 0
let ganaJugador = 0
let ganaPC = 0


function eligePiedra(e){
    e.preventDefault()
    eleccion2.classList.add("inactive")
    eleccion3.classList.add("inactive")
    plantilla.classList.add("move")
    resultadoFinal.classList.remove("inactive")
    jugadorElige = 1
    pcElige = numeroAleatorio(1,3)
    return resultado(jugadorElige, pcElige)

}
piedra.addEventListener("click", eligePiedra)
//piedra.addEventListener("click", jugarPartida)

function eligePapel(e){
    e.preventDefault()
    eleccion1.classList.add("inactive")
    eleccion3.classList.add("inactive")
    plantilla.classList.add("move")
    resultadoFinal.classList.remove("inactive")
    jugadorElige = 2
    pcElige = numeroAleatorio(1,3)
    return resultado(jugadorElige, pcElige)
}
papel.addEventListener("click", eligePapel)
//papel.addEventListener("click", jugarPartida)

function eligeTijera(e){
    e.preventDefault()
    eleccion1.classList.add("inactive")
    eleccion2.classList.add("inactive")
    plantilla.classList.add("move")
    resultadoFinal.classList.remove("inactive")
    jugadorElige = 3
    pcElige = numeroAleatorio(1,3)
    return resultado(jugadorElige, pcElige)
}
tijera.addEventListener("click", eligeTijera)
//tijera.addEventListener("click", jugarPartida)


// function jugarPartida(e){
//     e.preventDefault()
//     return resultado(jugadorElige)
// }

intento.addEventListener("click", (e) =>{
    e.preventDefault()
    eleccion1.classList.remove("inactive")
    eleccion2.classList.remove("inactive")
    eleccion3.classList.remove("inactive")
    plantilla.classList.remove("move")
    pcEligio.classList.add("inactive")
    resultadoFinal.classList.add("inactive")
    if(ganaJugador == 2){
        alert("ganaste la ronda")
        intento.classList.add("inactive")
        plantilla.classList.add("inactive")
        jugar.classList.remove("inactive")
    }else if(ganaPC == 2){
        alert("PC gana la ronda")
        intento.classList.add("inactive")
        plantilla.classList.add("inactive")
        jugar.classList.remove("inactive")
    }
})

jugar.addEventListener("click", () => {
    location.reload()
})

// Está funcion me genera un numero aleatorio dentro del rango establecido en sus parametros
function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max - min +1) + min)
}


function resultado(jugadorElige, pcElige){

    // pc elige
    if(pcElige == 1){
        pcEligio.classList.remove("inactive")
        pcEligio.innerHTML = "✊"
    }else if(pcElige == 2){
        pcEligio.classList.remove("inactive")
        pcEligio.innerHTML = "✋"
    }
    else if(pcElige == 3){
        pcEligio.classList.remove("inactive")
        pcEligio.innerHTML = "✌"
    }

    // comparación
    if( jugadorElige == pcElige){
        resultadoFinal.innerHTML = "¡EMPATE!"
    }else if(jugadorElige == 1 && pcElige == 3){
        resultadoFinal.innerHTML = "¡GANASTE!"
        ganaJugador = ganaJugador + 1
    }else if(jugadorElige == 2 && pcElige == 1){
        resultadoFinal.innerHTML = "¡GANASTE!" 
        ganaJugador = ganaJugador + 1
    }else if(jugadorElige == 3 && pcElige == 2){
        resultadoFinal.innerHTML = "¡GANASTE!"
        ganaJugador = ganaJugador + 1
    }else{
        resultadoFinal.innerHTML = "¡PERDISTE!"
        ganaPC = ganaPC + 1
    }

    
}




