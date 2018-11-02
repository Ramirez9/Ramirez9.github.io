/**
 * 8.- Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:  
 * Array.prototype.forEach(),
 *  Array.prototype.every(),
 *  Array.prototype.some()
 *  y Array.prototype.filter()
 *
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    function init(){

        definirArrays();

    }

    /**
     * funcion para definir las arrays
     */
    let definirArrays = function () {

        //Creo el array práctico
        let array = [1, 2, 3, "hola"];

        let parrafo = document.getElementById("info");

        //Cadena vacía para acumular el texto de la práctica
        let cadena = "";

        /**
         * Arrays prototypes
         * Tipos
         */

        //ForEach
        cadena += "<h3>Array.prototype.forEach()</h3>";
        cadena += "[";
        array.forEach(function (numero) {
            cadena += numero;
    
            if (numero != array[array.length - 1]) {
                cadena += ", ";
            }
        });
        cadena += "]";
    
        //Every
        cadena += "<h3>Array.prototype.every()</h3>";
        cadena += "Los elementos del array son solo números: ";
        cadena += array.every(function (numero) {
            return !isNaN(numero);
        });
    
        //Some
        cadena += "<h3>Array.prototype.some()</h3>";
        cadena += "Existe un elemento de tipo texto: ";
        cadena += array.some(function (numero) {
            return numero;
        });
    
        //Filter
        cadena += "<h3>Array.prototype.filter()</h3>";
        cadena += "Número menor que 3: ";
        cadena += "[";
        cadena += array.filter(function (numero) {
            return numero < 3;
        });
        cadena += "]";
    
        parrafo.innerHTML = cadena;

    }
    window.addEventListener("load", init);
}

  
