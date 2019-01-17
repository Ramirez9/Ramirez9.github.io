/**
 * Parte 7 - Ejercicio 3
 * 
 * @author Francisco Ramírez Ruiz
 */
jQuery.fn.creaTip = function(textoTip, opciones) {
	let configuracion = {
		velocidad: 500,
		animacionMuestra: {width: "show"},
		animacionOculta: {opacity: "hide"},
		claseTip: "tip"
	}
	jQuery.extend(configuracion, opciones);
	
	this.each(function(){
		let elem = $(this);
		let miTip = $('<div class="' + configuracion.claseTip + '">' + textoTip + '</div>');
		$(document.body).append(miTip);
		elem.data("capatip", miTip);
		
		elem.mouseenter(function(e){
			var miTip = $(this).data("capatip");
			miTip.css({
				left: e.pageX + 10,
				top: e.pageY + 5	
			});
			miTip.animate(configuracion.animacionMuestra, configuracion.velocidad);
		});
		elem.mouseleave(function(e){
			let miTip = $(this).data("capatip");
			miTip.animate(configuracion.animacionOculta, configuracion.velocidad);
		});
	});
	
	
};
 function init(){
	$("#elemento1").creaTip("todo bien...");
	$("#elemento2").creaTip("Otra prueba...", {
		velocidad: 1000,
		claseTip: "otroestilotip",
		animacionMuestra: {
			opacity: "show",
			padding: '25px',
			'font-size': '2em'
		},
		animacionOculta: {
			height: "hide",
			padding: '5px',
			'font-size': '1em'
		}
	});
 }

$(init)