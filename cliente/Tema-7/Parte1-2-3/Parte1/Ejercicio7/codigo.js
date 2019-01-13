/**
 * Parte 1 - Ejercicio 7
 * 
 * @author Francisco Ramírez Ruiz
 */

function init() {

    $("#pilallamadas").click(function (event) {
        event.preventDefault();
        //Estilo de salida, es el primero
        $("#micapa").fadeOut(10);
        $("#micapa").css({
            top: 100,
            left: 600
        });
        //Estilo de entrada, es el segundo
        $("#micapa").fadeIn(10);
    });

}

$(init)