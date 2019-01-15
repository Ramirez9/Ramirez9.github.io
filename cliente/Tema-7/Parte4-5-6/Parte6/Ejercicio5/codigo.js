/**
 * Parte 6 - Ejercicio 5
 * 
 * @author Francisco Ramírez Ruiz
 */

{

	let css;
	function init() {

		$("#elemento1").mouseenter(function(){
			css = estilos(event)
			$("#tip1").css(css)
		});
		$("#elemento1").mouseleave(function(){
			$("#tip1").css("display", "none");
		});
		
		$("#elemento2").mouseenter(function(){
			css = estilos(event)
			$("#tip2").css(css)
		});
		$("#elemento2").mouseleave(function(){
			$("#tip2").css("display", "none");
		});
	}

	function estilos(event) {
		return {
			"left": event.pageX + 5,
			"top": event.pageY + 5,
			"display": "block"
		};
	}
	
	$(init)
}


