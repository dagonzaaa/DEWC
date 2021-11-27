class Jugador {
    constructor(datos_jugador) {
        this.nombre = datos_jugador[0];
        this.rondas_ganadas = datos_jugador[1];
        this.rondas_perdidas = datos_jugador[2];
        this.tirada = null;
    }

    mano() {
        let tirada = prompt(this.nombre+"==>¿Piedra, Papel o Tijera?") // Saca un valor entre 1 y 3 incluido
        if (tirada == "Piedra") {
            tirada = 1
        }else if (tirada == "Papel") {
            tirada = 2
        }else{
            tirada = 3
        }
        switch (tirada) {
            case 1:
                this.tirada='Piedra';
                break;
            case 2:
                this.tirada='Papel';
                break;
            case 3:
                this.tirada='Tijera';
                break;
        }
    }

    resultados() {
        return `El jugador ${this.nombre} ha ganado ${this.rondas_ganadas} y perdido ${this.rondas_perdidas}`
    }
}

class Juego {
    constructor(jugador1, jugador2) {
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
    }

    ronda() {
        if (this.jugador1.tirada == this.jugador2.tirada) {
            return("Empate");
        } else if (this.jugador1.tirada == "Piedra" && this.jugador2.tirada == "Tijera") {
            this.jugador1.rondas_ganadas++;
            this.jugador2.rondas_perdidas++;
            return(this.jugador1.nombre+" ha ganado");
        } else if (this.jugador1.tirada == "Piedra" && this.jugador2.tirada == "Papel") {
            this.jugador2.rondas_ganadas++;
            this.jugador1.rondas_perdidas++;
            return(this.jugador2.nombre+" ha ganado");
        } else if (this.jugador1.tirada == "Papel" && this.jugador2.tirada == "Piedra") {
            this.jugador1.rondas_ganadas++;
            this.jugador2.rondas_perdidas++;
            return(this.jugador1.nombre+" ha ganado");
        } else if (this.jugador1.tirada == "Papel" && this.jugador2.tirada == "Tijera") {
            this.jugador2.rondas_ganadas++;
            this.jugador1.rondas_perdidas++;
            return(this.jugador1.nombre+" ha ganado");
        } else if (this.jugador1.tirada == "Tijera" && this.jugador2.tirada == "Papel") {
            this.jugador1.rondas_ganadas++;
            this.jugador2.rondas_perdidas++;
            return(this.jugador1.nombre+" ha ganado");
        } else if (this.jugador1.tirada == "Tijera" && this.jugador2.tirada == "Piedra") {
            this.jugador2.rondas_ganadas++;
            this.jugador1.rondas_perdidas++;
            return(this.jugador2.nombre+" ha ganado");
        }
    }
}


export {Jugador, Juego};