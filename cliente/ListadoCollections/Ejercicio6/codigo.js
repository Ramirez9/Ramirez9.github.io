/**
 * 6.- Entrega un código (debidamente comentado) donde demuestres los apartados del ejercicio anterior sobre la collection Set. 
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
        
        let array = ["Guillermo","Marcos","Jesús","Javier"];
        
        //Creo un objeto set con el array de los alumnos
        let set = new Set(array);

        /**
         * 1.-Muestro sus elementos
         */
        mostrar(set,"Array de alumnos");

        /**
         * Introduzco un alumno nuevo con add
         * Muestro el array de nuevo
         */
        set.add("Samuel");
        mostrar(set,"Array con alumno nuevo");

        /**
         * Elimino el alumno nuevo con delete (valor)
         * Muestro el array de nuevo
         */
        set.delete("Samuel");
        mostrar(set,"Samuel ha dejado el grupo");

        /**
         * Muestro un alumno con has()
         */
        console.log("Muestro un alumno-> ", set.has("Guillermo"));

        /**
         * Muestro todos sus elementos con set
         */
        console.log("Número de alumnos de mi array --> " ,set.size);

        /**
         * Elimino mis alumnos clear
         * y muestro su tamaño
         */
        set.clear();
        console.log("Número de alumnos de mi array una vez limpiado (set) --> " ,set.size);

    }

    function mostrar(set,str){
        console.log(str);
        set.forEach(function(value){
            console.log(value);
        }); 
    }
    window.addEventListener("load", init);
}

