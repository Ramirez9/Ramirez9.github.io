/**
 * Parte 1 - Ejercicio 5
 * 
 * @author Francisco Ramírez Ruiz
 */

function init() {
    $("#mayoria_edad").click(function () {

        if ($("#mayoria_edad").attr("checked"))
            $("#formulariomayores").css("display", "block");
        else
            $("#formulariomayores").css("display", "none");
    });
}

$(init)