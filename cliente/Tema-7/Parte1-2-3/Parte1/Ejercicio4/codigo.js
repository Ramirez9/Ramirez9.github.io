/**
 * Parte 1 - Ejercicio 4
 * 
 * @author Francisco Ramírez Ruiz
 */

function init(){
    $("a").mouseover((function(){
       $("#capa").addClass("clasecss")
    }));
    $("a").mouseout((function(){
       $("#capa").removeClass("clasecss")
    }));
}

$(init)