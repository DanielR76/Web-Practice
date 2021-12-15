/* "use strict"; */

var porcentaje = new Array(3);
var notasTotales = new Array(0);
var result = 0;

function realizarPorcentaje() {
	do {
		var total = 0;
		for (let i = 0; i < porcentaje.length; i++) {
			porcentaje[i] = parseInt(
				prompt("Ingrese el porcentaje del corte " + (i + 1), 0)
			);
		}
		porcentaje.forEach((element) => {
			total = total + element;
		});
	} while (total != 100);
}

function notasCorte() {
	porcentaje.forEach((element, index) => {
		let cantidadNotas = parseInt(
			prompt(
				"Ingrese la cantidad de notas que serán evaluadas para el corte: " +
					(index + 1),
				0
			)
		);
		let notas = new Array(cantidadNotas);
		for (let i = 0; i < cantidadNotas; i++) {
			notas[i] = parseFloat(prompt("Ingrese la nota # " + (i + 1), 0));
			document.write("<h3>" + notas[i] + "<h3/>");
		}
		notasTotales.push(notas);
	});
	notasTotales.forEach((resultado1, indice1) => {
		resultado1.forEach((resultado2) => {
			result = result + resultado2;
		});
		porcentaje[indice1] =
			porcentaje[indice1] * (result / notasTotales[indice1].length);
		result = 0;
	});

	return porcentaje;
}

function validarResultado(holi) {
	let valor = 0;
	holi.forEach((element) => {
		valor += element;
	});
	return valor / 100;
}

realizarPorcentaje();
let holi = notasCorte();
let resp = validarResultado(holi);

alert("El resultado de la nota final es " + resp);
