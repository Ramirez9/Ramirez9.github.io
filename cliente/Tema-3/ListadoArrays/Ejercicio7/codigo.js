/**
 *7- Crea una función que elimine todos los undefined de un array.
 *
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    function init(){

        arrayUndefined=[2,,undefined,4,4,undefined,1,2, 9, undefined, 10];
        arrayUndefinded();

    }

    /**
     * funcion que recorre un array con argumentos
     */
    let arrayUndefinded = function () {

        let parrafo = document.getElementById("info");

        for (let i = 0; i < arrayUndefined.length-1; i++){
            if (typeof arrayUndefined[i] == 'undefined') {
                arrayUndefined.splice(arrayUndefined[i], 1);
                i--;
                console.log(arrayUndefined[i]);
            }
        }
        parrafo.innerHTML = "El array sin undefined:  [" + arrayUndefined + "]";

    }
    window.addEventListener("load", init);
}

  
