var isPlaying = false;

const resultText = document.getElementById("start-text");//constante del resultado
const userImg = document.getElementById("user-img");//constante de la imagen de player
const machineImg = document.getElementById("machine-img");//constante de la imagen de la maquina

var historial = ""

const TIE = 0;//constante empate
const WIN = 1;//constante gana
const LOST = 2;//constante pierde

const ROCK = "rock";//volvemos a declararlas
const PAPER = "paper";
const SCISSORS = "scissors";

function play(userOption){
    if(isPlaying) return;
    isPlaying = true;
    userImg.src = "img/" + userOption + ".png";
    resultText.innerHTML = "LA MAQUINA ESTÁ ELIGIENDO";
    const interval = setInterval(function(){
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".png";
    }, 200);

    setTimeout(function () {


        clearInterval(interval);//crear intervalo para que cambie la imagen

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".png";

        switch (result) {
            case TIE:
                resultText.innerHTML = "HAS EMPATADO";
                break;
            case WIN:
                resultText.innerHTML = "HAS GANADOO!";
                break;
            case LOST:
                resultText.innerHTML = "HAS PERDIDO :(";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        historial += userOption+" VS "+machineOption+" ==> YOU TIE <br>"
        return TIE;

    } else if (userOption === ROCK) {

        if (machineOption === PAPER){
            historial += "ROCK VS PAPER ==> YOU LOST <br>"
            return LOST
        } ;
        if (machineOption === SCISSORS){
            historial += "ROCK VS SCISSORS ==> YOU WIN <br>"
            return WIN
        };

    } else if (userOption === PAPER) {

        if (machineOption === SCISSORS) {
            historial += "PAPER VS SCISSORS ==> YOU LOST <br>"
            return LOST
        };
        if (machineOption === ROCK){
            historial += "PAPER VS ROCK ==> YOU WIN <br>"
            return WIN
        } ;

    } else if (userOption === SCISSORS) {

        if (machineOption === ROCK){
            historial += "SCISSORS VS ROCK ==> YOU LOST <br>"
            return LOST
        } ;
        if (machineOption === PAPER) {
            historial += "SCISSORS VS PAPER ==> YOU WIN <br>"
            return WIN
        };

    }
}
export {play, historial};