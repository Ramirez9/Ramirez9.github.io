/**
 * Parte 8 - Ejercicio 4
 * 
 * @author Francisco Ramírez Ruiz
 */

 function init(){

	$("#botonfade").click(function(){
		let capa = $("#micapa");
		capa.fadeOut(500);
		capa.fadeIn(500);
		muestraRestantesCola();
	});
	$("#botonslide").click(function(){
		capa = $("#micapa");
		capa.slideUp(500);
		capa.slideDown(500);
		muestraRestantesCola();
	});
	$("#botontamanocola").click(function(){
		muestraRestantesCola();
	});
 }
 function muestraRestantesCola(){
	let funcionesEnCola = $("#micapa").queue("fx").length;
	$("#mensaje").text("En el momento de hacer el último clic en los botones hay " + funcionesEnCola + " funciones de efectos en cola");
}

$(init)