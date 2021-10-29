/*a)*/

function inviertecadena(cad_arg) {
    let invertir = cad_arg.split("").reverse().join("")
    return (invertir);
};
document.write(inviertecadena("Hola me llamo David Hernandez") + '<br>');


/*b)*/

function inviertePalabras(cad_arg) {
    let invertir = cad_arg.split(" ").reverse().join(" ")
    return (invertir);
};
document.write(inviertePalabras("Hola me llamo David Hernandez") + '<br>');


/*c)*/
function encuentraPalabraMasLarga(cad_arg) {
    var arr = cad_arg.split(" ");
    var auxArr = 0;
    var big = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i].length > auxArr) {
            auxArr = arr[i].length;
            big = i;
        }
    }
    document.write(arr[big]);
}

encuentraPalabraMasLarga("Hola me llamo David Hernandez");
document.write('<br>');

/*d)*/

function filtraPalabrasMasLargas(cad_arg, i) {
    var arr = cad_arg.split(" ");
    for (let j = 0; j <= arr.length - 1; j++) {
        if (arr[j].length > i) {
            document.write(arr[j] + " ");
        }
    }
}

filtraPalabrasMasLargas("Hola me llamo David Hernandez", 2);
document.write('<br>');

/*e)*/

function cadenaBienFormada(cad_arg) {
    var arr = cad_arg;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (i == 0) {
            document.write(arr[i].toUpperCase());
        } else {
            document.write(arr[i]);
        }
    }
}
cadenaBienFormada("hola mundo");