/**
 * 3.-En una expresión regular, indica la utilidad de los campos .flag .options ¿Funciona en todos los navegadores?
 * @author Francisco Ramirez Ruiz
 */
{
    function init() {
        cExpresion();
    }

    let cExpresion = function () {
        let expresion = /ab+c/ig;

        console.log(expresion.flags);

        //Obsoleto
        console.log(expresion.options);

    };

    window.addEventListener("load", init);
}