import * as funciones from "./functions.js"//importamos play desde functions

//declaramos las constantes ROCK, PAPER, SCISSORS
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

//tambien las constantes de los botones para usarlas en los eventos
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

//generamos los eventos de cada boton asociados a sus respectivas funciones play()
rockBtn.addEventListener("click", () => {
    funciones.play(ROCK);// llamamos a la funcion play() que hemos importado previamente
});
paperBtn.addEventListener("click", () => {
    funciones.play(PAPER);// llamamos a la funcion play() que hemos importado previamente
});
scissorsBtn.addEventListener("click", () => {
    funciones.play(SCISSORS);// llamamos a la funcion play() que hemos importado previamente
});




