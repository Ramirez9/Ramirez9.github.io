/**
 * Parte 1 - Ejercicio 8
 * 
 * @author Francisco Ramírez Ruiz
 */

function init() {
    $("#guardar").click(function () {
        let valor = document.formul.valor.value;

        $("#division").data("midato", valor)
            .html('He guardado en este elemento (id="division") un dato llamado "midato" con el valor "' + valor + '"');
    });

    $("#leer").click(function () {
        valor = $("#division").data("midato")
            .html('En este elemento (id="division") leo un dato llamado "midato" con el valor "' + valor + '"');
    });

    $("#eliminar").click(function () {
        $("#division").removeData("midato")
            .html('Acabo de eliminar del elemento (id="division") el dato llamado "midato"');
    });

}

$(init)