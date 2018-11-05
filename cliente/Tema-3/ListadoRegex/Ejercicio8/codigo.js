/**
 * 8.-Mediante un ejemplo real, indica la utilidad del método exec();
 *
 * @author Francisco Ramirez Ruiz
 */

{
    function init() {
        cExpresion();
    }

    let cExpresion = function () {
        let expresion = /a/;

        let string = "hola, me gusta el azul";
        //Este método devuelve el texto 
        //coincidente si encuentra una coincidencia; de lo contrario, devuelve un valor nulo.
        console.log(expresion.exec(string));      
    };

    window.addEventListener("load", init);
}