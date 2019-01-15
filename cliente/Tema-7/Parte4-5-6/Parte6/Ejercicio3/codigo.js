/**
 * Parte 6 - Ejercicio 3
 * 
 * @author Francisco Ramírez Ruiz
 */

{
	function init() {
		$("#mielemento").click(function(event){
			$("#mielemento").html("X: " + event.pageX + " - Y: " + event.pageY)
		});
	}
	$(init)
}