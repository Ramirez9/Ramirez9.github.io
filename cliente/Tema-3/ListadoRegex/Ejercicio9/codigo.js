/**
 * 9.- Busca en el objeto String funciones que simulen la funcionalidad de test()
 * 
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
        //El método search() ejecuta una búsqueda que encaje entre una expresión regular
        // y el objeto String desde el que se llama.
        console.log(string.search(expresion));      
    };

    window.addEventListener("load", init);
}