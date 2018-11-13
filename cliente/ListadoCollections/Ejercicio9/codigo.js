/**
 * 9.- Entrega un código (debidamente comentado) donde demuestres los apartados del ejercicio anterior sobre la collection WeakSet. 
 * Para ello utiliza como elementos los nombres y apellidos de cinco compañeros de clase
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    let parrafo;
    function init(){

        parrafo = document.getElementById('parrafo');

        texto();

    }

    function texto() {
        parrafo.innerHTML = "Demostración - Consola";

        /**
         * Creo un weakSet y añado alumnos
         */
        let weakSet = new WeakSet();
        alumno1 = {nombre: "Guillermo", apellido: "Boquizo"};
        alumno2 = {nombre: "Marcos", apellido: "Gallardo"};
        alumno3 = {nombre: "Jesús", apellido: "Mejías"};
        alumno4 = {nombre: "Javier", apellido: "González"};
        alumno5 = {nombre: "José", apellido: "Manuel"}
        console.log("He creado 5 alumnos");

        /**
         * Uso el metodo add para añadirlos uno a uno
         */
        weakSet.add(alumno1);
        weakSet.add(alumno2);
        weakSet.add(alumno3);
        weakSet.add(alumno4);
        weakSet.add(alumno5);
        console.log("He añadido los 5 alumnos");

        /**
         * Lo compruebo con has
         */
        console.log("Con has compruebo que el alumno número 1 existe -->", weakSet.has(alumno1));

        /**
         * Lo elimino con delete
         */
        console.log("Elimino el alumno con delete -->", weakSet.delete(alumno1));
        
        /**
         * Vuelvo a mostrar el alumno
         */
        console.log("Observamos que el alumno número 1 ya no existe -->", weakSet.has(alumno1));

    }
    window.addEventListener("load", init);
}

