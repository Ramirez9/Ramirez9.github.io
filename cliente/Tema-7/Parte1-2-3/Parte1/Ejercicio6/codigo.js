/**
 * Parte 1 - Ejercicio 6
 * 
 * @author Francisco Ramírez Ruiz
 */

function init() {
    $("#ocultar").click(function (event) {
        event.preventDefault();
        $("#capaefectos").hide("slow");
    });
    $("#mostrar").click(function (event) {
        event.preventDefault();
        $("#capaefectos").show(5000);
    });
}

$(init)