/**
 * Parte 8 - Ejercicio 2
 * 
 * @author Francisco Ramírez Ruiz
 */

 function init(){

	$("#ocultartoda").click(function(){
		$("#milista").fadeOut();
	});
	$("#mostrartoda").click(function(){
		$("#milista").fadeIn();
	});
	$("#ocultarmostrar").click(function(){
		$("#milista").fadeOut(function(){
			$(this).fadeIn();
		});
	});
	$("#selopacidad").change(function(event){
		let opacidad_deseada = event.target.options[e.target.selectedIndex].value
		$("h1").fadeTo(1000,opacidad_deseada);
	});
	$("#pororden").click(function(){
		let opacidad_deseada = $("#selopacidad").attr("value");
		$("#e1").fadeTo(500, opacidad_deseada, function(){
			$("#e2").fadeTo(500, opacidad_deseada, function(){
				$("#e3").fadeTo(500, opacidad_deseada);
			});
		});
	})
 }

$(init)