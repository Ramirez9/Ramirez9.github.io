/**
 * Parte 6 - Ejercicio 2
 * 
 * @author Francisco Ramírez Ruiz
 */

{
	let numClics = 0;
	let numDobleClics = 0;

	function init() {
		$("#micapa").dblclick(function () {
			numDobleClics++;
			mostrarMensaje();
		});
		$("#micapa").click(function () {
			numClics++;
			mostrarMensaje();
		});

	}
	function mostrarMensaje() {
		$("#mensaje").html(`Número de clics: 
		${numClics} <br>Número de doble clics: ${numDobleClics}`);
	}
	$(init)
}