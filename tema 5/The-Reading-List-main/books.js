class BookList{
    constructor(read,notReadYet,next,current,last) {
        this.readBooks = read;
        this.notReadYet = notReadYet;
        this.next = next;
        this.current = current;
        this.last = last;
        this.all = [];
    }

    add(book){
        this.all.push(book);
    }

    finishCurrentBook(){
        this.notReadYet -= 1;
        this.readBooks = this.current;
        this.last.readDate = new Date(Date.now());
        this.last = this.current;
        this.current = this.next;
        this.last.read = true;
        var i = 0;
        if(this.notReadYet != 0){
            while(this.all[i].read == true || this.all[i] == this.current)
                i++;
            
            this.next = this.all[i];
        }
        else
            return "no hay mas libros para leer";
    }
}

class Book{
    constructor(tit, aut, gen, date)
    {
        this.title = tit;
        this.genre = gen;
        this.author = aut;
        this.read = false;
        this.readDate = date;
    }
}

window.onload = function(){
    var milista = new BookList();
    if (localStorage.milistaguardad) {
        for (libro of JSON.parse(localStorage.milistaguardad).all) {
            imprimirLibro(libro)
            milista.add(libro)
        }
    }
    document.getElementById("enviarymostrar").addEventListener("click", (e)=>{
      e.preventDefault()
        let titulo = document.getElementById("titulo").value;
        let genero = document.getElementById("genero").value;
        let autor = document.getElementById("autor").value; 
        let fecha = document.getElementById("fecha").value;

        milista.add(new Book(titulo, autor, genero, fecha));

        localStorage.setItem('milistaguardad',JSON.stringify(milista))

        imprimirLibro(milista.all[milista.all.length-1])
        
    });
}

function imprimirLibro(libro) {
    let linueva = document.createElement("li");
    linueva.innerHTML = libro.title+"-"+libro.author;
    document.getElementById("lista").appendChild(linueva);
}


