/**
 * Parte 8 - Ejercicio 3
 * 
 * @author Francisco Ramírez Ruiz
 */

 function init(){

	colaEfectos();
 }
 function colaEfectos(){
	let capa = $("#micapa");
	capa.animate({
		"font-size": "1.5em"
	}, 2000);
	capa.hide(1000);
	capa.show(1000);
	capa.animate({
		"left": "350px",
		"top": "50px"
	},1500);
	capa.animate({
		"font-size": "0.75em"
	}, 2000);
	capa.animate({
		"left": "100px",
		"top": "20px"
	}, 1500, colaEfectos);
}

$(init)