/**
 * Parte 8 - Ejercicio 6
 * 
 * @author Francisco Ramírez Ruiz
 */

 let capa;
 function init(){

	cambiarColores();
	ocultaMuestra();
	$("#botontamanocola").click(function(){
		muestraRestantesCola();
	});

 }

 function muestraRestantesCola(){
	let funcionesEnCola = $("#micapa").queue("micola").length;
	let funcionesEnColaPredeterminada = $("#micapa").queue().length;
	
	let textoMostrar = "Hay " + funcionesEnCola + " funciones de efectos en la cola 'micola'";
	textoMostrar += "<br>Hay " + funcionesEnColaPredeterminada + " funciones de efectos en la cola por defecto";
	$("#mensaje").html(textoMostrar);
}

function cambiarColores(){
	capa = $("#micapa");
	capa.delay(1000, "micola");
	capa.queue("micola", function(sig){
		$(this).css({
			"background-color": "#339"
		});
		sig()
	});
	capa.delay(1000, "micola");
	capa.queue("micola", function(sig){
		$(this).css({
			"background-color": "#933"
			
		});
		sig();
	});
	capa.delay(1000, "micola");
	capa.queue("micola", function(){
		$(this).css({
			"background-color": "#393"
		});
		cambiarColores();
	});
	capa.dequeue("micola");
}

 function ocultaMuestra(){
	capa = $("#micapa");
	capa.fadeTo(500, 0.3);
	capa.fadeTo(1200, 1);
	capa.animate({
		"left": "350px"
	},1200);
	capa.animate({
		"left": "100px"
	},1000, ocultaMuestra);
}
$(init)