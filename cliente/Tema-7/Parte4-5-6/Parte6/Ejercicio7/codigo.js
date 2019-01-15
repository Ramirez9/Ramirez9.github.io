/**
 * Parte 6 - Ejercicio 7
 * 
 * @author Francisco Ramírez Ruiz
 */

{
	function init() {
		$("#mitexto").keypress(function(event){
			event.preventDefault();
			$("#loescrito").html(`${event.which} : ${String.fromCharCode(event.which)} `)
		});
	}

	$(init)
}


