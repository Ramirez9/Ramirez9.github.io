{
	let numero = prompt("Introduce un número");
	let resultado = 1;

	for (let i = 1; i <= numero; i++) {
		resultado = resultado * i;
	}

	alert("El factorial es: " + resultado);
}