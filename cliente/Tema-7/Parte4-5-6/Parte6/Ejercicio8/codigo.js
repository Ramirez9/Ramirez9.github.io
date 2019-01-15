/**
 * Parte 6 - Ejercicio 8
 * 
 * @author Francisco Ramírez Ruiz
 */

{
	function init() {

		$("p").bind("click mouseenter mouseleave", function () {
			let referencia = $(this)
			if (referencia.css("color") != "rgb(250, 100, 0)")
				referencia.css("color", "rgb(250, 100, 0)");
			else
				referencia.css("color", "rgb(150, 0, 255)");
		})

		function clicAlerta() {
			alert("Has hecho clic");
		}

		$(".miclase").bind("click", clicAlerta);

		$("#quitarevento").bind("click", function () {
			$(".miclase").unbind("click", clicAlerta);
		})
	}

	$(init)
}