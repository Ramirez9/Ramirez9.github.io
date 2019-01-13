/**
 * Parte 1 - Ejercicio 1
 * 
 * @author Francisco Ramírez Ruiz
 */

function init() {
    $("#capa").mouseenter(function () {
        $("#mensaje").css("display", "block");
    });
    $("#capa").mouseleave(function () {
        $("#mensaje").css("display", "none");
    });

}

$(init)