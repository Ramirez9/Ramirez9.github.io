/**
 * 5.-Crea  una función que devuelva un array con cada uno de los argumentos.
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    function init(){
        let parrafo = document.getElementById("info");

        cArray();
        parrafo.innerHTML = cArray("argumento1", "argumento2", "argumento3");

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

  
