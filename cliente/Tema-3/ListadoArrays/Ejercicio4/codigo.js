/**
 * 4.- Crea  una función que cree un array de la dimensión indicada, 
 * cuyo contenido sean los números naturales comenzando desde 0
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    function init(){

        //(); valor dimension
        cArray(9);

    }

    /**
     * Creo una array con la dimensión indicada en init.
     * @param {*} dimension 
     */
    let cArray = function (dimension) {
        let parrafo = document.getElementById("info");

        let arrayNumeros = [];
        for (let i = 0; i < dimension; i++) {
            //Hago un push de cada número natural
            arrayNumeros.push(i);
        }
        parrafo.innerHTML = "El Aray de numero naturales es:  [" + arrayNumeros + "]";
    }
        
        window.addEventListener("load", init);

}

  
