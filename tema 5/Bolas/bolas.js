class Bola
{
      constructor(bola_interfaz, svgContenedor) {
        this.bola_interfaz = bola_interfaz

        this.color = this.bola_interfaz.color
        this.radio = this.bola_interfaz.radio;

        this.position = this.bola_interfaz.position
        this.velocity = this.bola_interfaz.velocity
        // Creación del tag

        this.tagCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.tagCircle.setAttributeNS(null, "fill", bola_interfaz.color);
        this.tagCircle.setAttributeNS(null, "cx", bola_interfaz.position.x);
        this.tagCircle.setAttributeNS(null, "cy", bola_interfaz.position.y);
        this.tagCircle.setAttributeNS(null, "r", bola_interfaz.radio);
        svgContenedor.appendChild(this.tagCircle);
    }
    
    mueve(anchoContenedor, altoContenedor)
    {
        // Comprobamos ahora si está fuera de los límites
        // Eje X
        if (this.position.x-this.radio<=0 || this.position.x+this.radio >= anchoContenedor )
            this.velocity = new Vector(-this.velocity.x, this.velocity.y);
        
        // Eje Y
        if (this.position.y-this.radio <=0 || this.position.y+this.radio >= altoContenedor-10)
          this.velocity = new Vector(this.velocity.x, -this.velocity.y);
        
          const newX = Math.max(
            Math.min(this.position.x + this.velocity.x, anchoContenedor),
            0
          );
      
          const newY = Math.max(
            Math.min(this.position.y + this.velocity.y, altoContenedor-10),
           0
          );
          
         this.position= new Vector(newX, newY);
    }


    dibuja()
    {
        this.tagCircle.setAttributeNS(null, "cx", this.position.x);
        this.tagCircle.setAttributeNS(null, "cy", this.position.y);
    }

    get sphereArea() {
      return 4 * Math.PI * this.radio ** 2;
    }

}

class bola_interfaz
{
      constructor(radio, posicionX, posicionY, velocidadX, velocidadY, color) {
        this.color = color
        this.radio = radio;

        this.position = new Vector(posicionX, posicionY);
        this.velocity = new Vector(velocidadX,velocidadY);
    }
}

class Vector {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function colorAleatorio()
{
    return "#"+ Math.floor(Math.random()*16777215).toString(16);
}


export {Bola, Vector, bola_interfaz, aleatorio,colorAleatorio};
