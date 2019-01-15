/**
 * Parte 4 - Ejercicio 1
 * 
 * @author Francisco Ramírez Ruiz
 */

 function init(){

	$("a").each(function(i){
      alert("Atributo title del enlace " + i + ": " + $(this).prop("title"));
	});
    
 }

$(init)