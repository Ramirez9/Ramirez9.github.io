/**
 * Parte 1 - Ejercicio 4
 * 
 * @author Francisco Ramírez Ruiz
 */

 function init(){
    $("p").each(function(i){
		if(i%2==0)
			$(this).css("background-color", "#eee");
		else
			$(this).css("background-color", "#ccc");
		
	});
 }

$(init)