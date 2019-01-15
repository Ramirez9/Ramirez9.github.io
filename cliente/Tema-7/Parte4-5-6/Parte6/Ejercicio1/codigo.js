/**
 * Parte 6 - Ejercicio 1
 * 
 * @author Francisco Ramírez Ruiz
 */

{
	function init() {

		$(".mienlace").click(function(event){
			event.preventDefault();
			alert("Has hecho clic\nComo he hecho preventDefault, no te llevaré a DesarrolloWeb.com");
		});
	}
	
	$(init)
}