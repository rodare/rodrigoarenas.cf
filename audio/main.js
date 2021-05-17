const a = new Audio()
const b = new Audio()
const c = new Audio()
const d = new Audio()
const btn1 = document.querySelector("fa-natural")
const btn2 = document.querySelector("la-natural")
const btn3 = document.querySelector("do-natural")
const btn4 = document.querySelector("acorde")
btn1.addEventListener("click", playSound)

function play1() {
    a.src = "audio/fa-natural.mp3"
    a.play()
}

function play2() {
    b.src = "audio/la-natural.mp3"
    b.play()
}

function play3() {
    c.src = "audio/do-natural.mp3"
    c.play()
}

function play4() {
    d.src = "audio/acorde.mp3"
    d.play()
}
// Para reproducir sonido cada vez que se haga click en el botón

// const b = new Audio2()

// button.addEventListener("click", playSound)

// function play2() {
//     b.src = "audio/horse3.mp3"
//     b.play()
// }

// Para reproducir sonido entero una sola vez hasta el final

// var c = document.getElementById("caballo3"); 
// function play3() { 
//    c.play();

// } 

// Para reproducir y pausar sonido con el mismo botón

// var a = document.getElementById("caballo1"); 
// function playPause1() { 
//   if (a.paused)
//    a.play();
//   else
//    a.pause(); 
// } 

// var b = document.getElementById("caballo2"); 
// function playPause2() { 
//   if (b.paused)
//    b.play();
//   else
//    b.pause(); 
// } 

// var c = document.getElementById("caballo3"); 
// function playPause3() { 
//   if (c.paused)
//    c.play();
//   else
//    c.pause(); 
// } 
