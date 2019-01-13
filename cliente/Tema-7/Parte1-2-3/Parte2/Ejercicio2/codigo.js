/**
 * Parte 1 - Ejercicio 2
 * 
 * @author Francisco Ramírez Ruiz
 */

function init() {
    $("<div>Estos elementos los estoy creando en <b>tiempo de ejecución con jQuery</b>.<h1>Título metido en ejecución</h1></div>")
        .appendTo("body")
}

$(init)