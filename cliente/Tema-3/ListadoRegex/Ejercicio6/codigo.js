/**
 * 6.-Mediante ejemplos, indica valores y utilidad de lastMatch en una expresión regular.
 *  ¿Funciona en todos los navegadores?
 * 
 * @author Francisco Ramirez Ruiz
 */
{
    function init() {
        cExpresion();
    }

    let cExpresion = function () {
        let string = "tres tristes tigres comían trigo en un trigal";
        let expresion = new RegExp("tri","g");
        for(i = 0; i < 3; i++) {
           expresion.test(string);
           console.log(RegExp.lastMatch + " en el índice: " + expresion.lastIndex);
        }
    };

    window.addEventListener("load", init);
}