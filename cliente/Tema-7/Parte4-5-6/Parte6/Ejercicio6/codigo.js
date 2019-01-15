/**
 * Parte 6 - Ejercicio 6
 * 
 * @author Francisco Ramírez Ruiz
 */

{

	function init() {

		$("html").keypress(operaEvento);
		$("html").keydown(operaEvento);
		$("html").keyup(operaEvento);
	}
	function operaEvento(evento){
		let escrito = $("#loescrito")
		escrito.html((escrito).html() + `${evento.type} : ${evento.which}, `)
	}
	
	$(init)
}


