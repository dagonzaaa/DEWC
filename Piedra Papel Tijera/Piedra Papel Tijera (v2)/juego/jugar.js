import {historial} from "./js/functions.js";

window.onload = function(){
    document.getElementById('jugar').addEventListener('click', ()=>{window.open("juego/juego.html","","width=720,height=435")})
    document.getElementById("historial_b").addEventListener('click', ()=>{
        console.log(historial)
        document.getElementById("partida").innerHTML = historial;
    })
    
}


