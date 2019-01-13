/**
 * Parte 1 - Ejercicio 7
 * 
 * @author Francisco Ramírez Ruiz
 */

function init(){
	$("#enlaceajax").click(function(evento){
		evento.preventDefault();
		$("#destino").load("recibe-parametros.php", {nombre: "Pepe", edad: 45}, function(){
            alert("recibidos los datos por ajax");
		});
	});

}

$(init)