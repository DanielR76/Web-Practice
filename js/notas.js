"use strict";

var porcentaje = new Array(3);
var total = 0;

do {
  for (let i = 0; i < porcentaje.length; i++) {
    porcentaje[i] = parseInt(
      prompt("Ingrese el porcentaje del corte " + (i + 1), 0)
    );
  }
  porcentaje.forEach((element) => {
    total += element;
  });
} while (total != 100);

porcentaje.forEach((element, index) => {
  var cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas que serán evaluadas para el corte: " + (index + 1), 0));

  var notas = new Array(cantidadNotas);
  for (let i = 0; i < cantidadNotas; i++) {
    notas[i] = parseInt(prompt("Ingrese la nota # " + (i + 1), 0));
    document.write("<h3>" + notas[i] + "<h3/>");
  }
});
