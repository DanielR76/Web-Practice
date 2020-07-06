'use strict'


var cantidadNotas = parseInt(prompt("Ingrese la notas que serán evaluadas", 0));
var notas = new Array(cantidadNotas);
var porcentaje = new Array(3);
var total = 0;


for (let i = 0; i < cantidadNotas; i++) {
    notas[i] = parseInt(prompt("Ingrese la nota # " + (i + 1), 0));
    document.write("<h3>" + notas[i] + "<h3/>");
}

do {
    for (let i = 0; i == 3; i++) {
        porcentaje[i] = parseInt(prompt("Ingrese el porcentaje de la nota " + (i + 1), 0));
    }
    porcentaje.forEach(element => {
        total += element;
    });

} while (total != 100);