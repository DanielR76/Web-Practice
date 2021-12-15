document.writeln("hola mundo");

var listaArray = new Array(6);

for (let i = 0; i < listaArray.length; i++) {
	listaArray[i] = parseInt(prompt("digita el texto", 0));
	document.write("<h3>" + listaArray[i] + "</h3>");
}

console.log(listaArray.sort());
console.log(listaArray.reverse());

listaArray.forEach((element) => {
	document.write(element + "</n>");
});
