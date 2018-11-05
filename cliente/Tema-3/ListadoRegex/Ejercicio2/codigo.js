/**
 * 2.- En una expresión regular, indica la utilidad del campo .global. Indica otros métodos relacionados,
 * @author Francisco Ramirez Ruiz
 */
{
    function init() {
        cExpresion();
    }

    let cExpresion = function () {
        let expresion = /ab+c/igm;

        //Encuentra varias coincidencias
        expresion.global;

        //No es sensible a mayúsculas y minúsuclas
        expresion.ignoreCase;

        //Tratar caracteres de inicio y fin (^ y $) 
        expresion.multiline;

    };

    window.addEventListener("load", init);
}