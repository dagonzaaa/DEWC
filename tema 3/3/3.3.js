

guia = new Array(5);
for(i=0; i<5; i++)
    guia[i] = new Array(5);

for(i=0; i<5; i++)
    for(j=0; j<5; j++)
    {
        guia[i][j] = (i+1)*10+(j+1);
}

array = [
[34,21,32,41,25],
[14,42,43,14,31],
[54,45,52,42,23],
[33,15,51,31,35],
[21,52,33,13,23]
];

function descomponer(numero) {
    if (numero-10<0) {
        return numero
    }else{
        return descomponer(numero-10)
    }
}

function buscaTesoro(array) {
    let pista = 11
    while (pista != array[((pista-descomponer(pista))/10)-1][descomponer(pista)-1]) {
        document.write(pista+' ')
        pista = array[((pista-descomponer(pista))/10)-1][descomponer(pista)-1]
    }
    document.write(`<h1>El tesoro esta en ${pista}</h1>`)
    
}
buscaTesoro(array);