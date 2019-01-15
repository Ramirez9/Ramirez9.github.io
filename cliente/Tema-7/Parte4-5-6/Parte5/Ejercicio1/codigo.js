/**
 * Parte 5 - Ejercicio 1
 * 
 * @author Francisco Ramírez Ruiz
 */

function init() {

	$("#micapa").css({
		"color": "green",
		"background-color": "#ff8800",
		"position": "absolute",
		"width": "100px",
		"top": "100px",
		"left": "200px"
	})
	
	$("#micapa").click(function () {
		$(this).css("width", function (value) {
			return (parseInt(value) + parseInt(prompt("cuanto quieres aumentar?", "25"))) + "px";
		});
	})

	$("#fondogris").click(function (e) {
		e.preventDefault();
		$("#micapa").css("background-color", "#999");
	})

	$("#fondonaranja").click(function (e) {
		e.preventDefault();
		$("#micapa").css("background-color", "#f80");
	})

	$("#ocultarmostrar").click(function (e) {
		e.preventDefault();
		let capa = $("#micapa");
		if ( capa.css("display") == "block") {
			capa.css("display", "none");
		} else {
			capa.css("display", "block");
		}
	})

	$("#micapa").mouseover(function () {
		$(this).css("left", parseInt($(this).css("left")) + 10 + "px");
	})
}

$(init)