/**
 * Parte 1 - Ejercicio 5
 * 
 * @author Francisco Ramírez Ruiz
 */

 function init(){
    $("div").each(function(){
		elemento = $(this);
		if(elemento.html() == "white")
			return true;
		if(elemento.html() == "nada")
			return false;
		elemento.css("color", elemento.html());
	});
    
 }

$(init)