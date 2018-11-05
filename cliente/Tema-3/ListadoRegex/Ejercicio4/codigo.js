/**
 * 4.-En una expresión regular, indica la utilidad del campo .source. Diferencia con toString()
 * @author Francisco Ramirez Ruiz
 */

{
    function init() {
        cExpresion();
    }

    let cExpresion = function () {
        let expresion = /ab+c/ig;

        //Devuelve la expresión regular sin sus banderas
        expresion.source;

        //Devuelve la expresión regular tal cual.
        expresion.toString();

    };

    window.addEventListener("load", init);
}