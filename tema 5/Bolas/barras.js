class Rectangulo {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    mueve(action)
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
}

class InterfazRectangulo {
    constructor(rectangulo, svg) {
        this.rectangulo = rectangulo;
        this.tagrectangulo = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.tagrectangulo.setAttribute("width", rectangulo.width);
        this.tagrectangulo.setAttribute("height", rectangulo.height);
        this.tagrectangulo.setAttribute("fill", "teal")
        this.svg = svg;
        this.tagrectangulo.setAttribute("y", (svg.getBoundingClientRect().height)-rectangulo.height)
        this.tagrectangulo.setAttribute("x", (svg.getBoundingClientRect().width)-rectangulo.width)
        this.svg.appendChild(this.tagrectangulo);


    }

    dibuja() {
        this.tagrectangulo.setAttribute("width", this.rectangulo.width);
        this.tagrectangulo.setAttribute("height", this.rectangulo.height);

    }
}

export {Rectangulo, InterfazRectangulo}