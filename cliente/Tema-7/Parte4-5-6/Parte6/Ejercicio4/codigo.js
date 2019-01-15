/**
 * Parte 6 - Ejercicio 4
 * 
 * @author Francisco Ramírez Ruiz
 */

{
	function init() {
		$("html").click(function(event){
			alert("X: " + event.pageX + " - Y: " + event.pageY)
		});
	}
	$(init)
}