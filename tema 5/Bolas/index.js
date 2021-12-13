import {Bola, Vector, bola_interfaz, aleatorio, colorAleatorio} from "./bolas.js"
import {Rectangulo, InterfazRectangulo} from "./barras.js"


window.onload = () =>{
    var bolas = new Array();
    var svg = document.getElementById("panel");
    var tamanoSVG = svg.getBoundingClientRect();
    var barra = new InterfazRectangulo(new Rectangulo(100,10), svg)
    for (let i = 0; i < 1; i++) {
            bolas.push(new Bola(new bola_interfaz(aleatorio(10,50), aleatorio(70,tamanoSVG.width), aleatorio(70,tamanoSVG.height), aleatorio(1,5),aleatorio(1,5),colorAleatorio()),svg));

    }

    setInterval( loop, 20);
    //elId = window.requestAnimationFrame(loop);
    function loop(){
      for (let i=0; i<bolas.length; i++){
        for (let j=0; j<bolas.length; j++)        
            bolas[i].mueve(tamanoSVG.width, tamanoSVG.height);
          bolas[i].dibuja();
      }
      //elId = window.requestAnimationFrame(loop);
    }
  }
