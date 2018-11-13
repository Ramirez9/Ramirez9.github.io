/**
 * 4.- Entrega un código (debidamente comentado) donde demuestres los apartados del ejercicio anterior sobre la collection Map. 
 * Para ello utiliza como elementos los nombres y apellidos de cinco compañeros de clase.
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    function init(){

        parrafo = document.getElementById('parrafo');

        texto();

    }

    function texto() {
        parrafo.innerHTML = "Demostración - Consola";
        
        let array = [[1,"Guillermo"],[2,"Marcos"],[3,"Jesús"],[4,"Javier"]];
   
        //Creo un objeto map con el array de los alumnos
        let map = new Map(array);

        /**
         * 1.-Muestro sus elementos
         */
        mostrar(map,"Array de alumnos");

        /**
         * Introduzco un alumno nuevo con set
         * Muestro el array de nuevo
         */
        map.set(5,"Samuel");
        mostrar(map,"Array con alumno nuevo");

        /**
         * Elimino el alumno nuevo con delete (índice)
         * Muestro el array de nuevo
         */
        map.delete(5);
        mostrar(map,"Samuel ha dejado el grupo");

        /**
         * Muestro un alumno con get(índice)
         */
        console.log("Muestro un alumno-> ", map.get(2));

        /**
         * Muestro todos sus elementos con size
         */
        console.log("Número de alumnos de mi array --> " ,map.size);

        /**
         * Elimino mis alumnos clear
         * Y muestro su tamaño
         */
        map.clear();
        console.log("Número de alumnos de mi array una vez limpiado (map.clear()) --> " ,map.size);

    }

    /**
     * Recorro los alumnos para las posteriores pruebas
     * @param {*} map 
     * @param {*} str 
     */
    function mostrar(map,str){
        console.log(str);
        map.forEach(function(key,value){
            console.log(value + " ---> " + key);
        }); 
    }

    window.addEventListener("load", init);
}

