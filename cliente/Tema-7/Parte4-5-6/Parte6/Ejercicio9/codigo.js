/**
 * Parte 6 - Ejercicio 9
 * 
 * @author Francisco Ramírez Ruiz
 */

{
	function init() {
	
		//.live Está deprecated desde la versión 1.7
		
		$(".verde").on("click", cambiarTexto)
		
		$("#insertarelem").click(function(){
			let nuevoElemento = $('<div class="verde">Este elemento se ha creado e insertado dinamicamente (haz clic)</div>');
			
			nuevoElemento.appendTo($("html"));
			$(".verde").on("click", cambiarTexto)
		});
		
		$("#ponerclaseverde").click(function(){
			$("#noverde").addClass("verde");
		});

		function cambiarTexto() {
			let elem = $(this);
			if (elem.html() != "Hiciste clic!!")
				elem.html("Hiciste clic!!");
			else
				elem.html("Hiciste de nuevo clic!!");
		}
	}

	$(init)
}


