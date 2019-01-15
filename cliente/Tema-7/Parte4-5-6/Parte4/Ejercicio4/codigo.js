/**
 * Parte 4 - Ejercicio 3
 * 
 * @author Francisco Ramírez Ruiz
 */
{

let fecha = new Date();
 function init(){

	$('.fecha').attr("value", function(){
		return fecha.getDate()+ "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear();
	});
 }

$(init)
}