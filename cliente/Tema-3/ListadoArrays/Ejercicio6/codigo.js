/**
 * 6.-Crea  una función que devuelva un array con cada uno de los argumentos. 
 * En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    function init(){
        let parrafo = document.getElementById("info");

        cArray();
        parrafo.innerHTML = cArray("argumento1", " argumento2", " argumento3",[" a1"," a2"," a3"],
        [" b1"," b2"," b3"]);

    }

    /**
     * funcion que recorre un array con argumentos
     */
    let cArray = function () {

        let arrayArg = [];

        for (let i = 0; i < arguments.length; i++){
            arrayArg.push(arguments[i]);
            console.log(arguments[i]);
        }

        return arrayArg;

    }
    window.addEventListener("load", init);
}

  
