/**
 * Parte 1 - Ejercicio 1
 * 
 * @author Francisco Ramírez Ruiz
 */

 function init(){
     $("#botonA").click((function(){
        $("#capa").html("Has hecho clic en el botón <b>A</b>")
     }));
     $("#botonB").click((function(){
        $("#capa").html("Recibido un clic en el botón <b>B</b>")
     }));
 }

$(init)