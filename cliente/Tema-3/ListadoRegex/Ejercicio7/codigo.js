/**
 * 7.-Mediante un ejemplo real, indica la utilidad del método test();
 * 
 * @author Francisco Ramirez Ruiz
 */

{
    function init() {
        cExpresion();
    }

    let cExpresion = function () {
        let expresion = /azul/g;

        let string = "hola, me gusta el";
        //Es una propiedad que comprueba si la expresión regular se cumple o no.
        if(!expresion.test(string))
            return console.log("No tengo azul!");
        return console.log("Tengo azul!");
    };

    window.addEventListener("load", init);
}