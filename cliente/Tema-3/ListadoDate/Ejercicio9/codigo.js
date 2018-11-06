/**
 * 9.- Implementa el método calcularEdad() que devuelva la edad indicando la fecha de nacimiento. 
 *  En caso de tener menos de un año, indicar días y meses transcurridos. Indicar errores.
 * 
 * @author Francisco Ramirez Ruiz
 */
{

    let fecha;
    let fechaActual
    let parrafo;

    function init(){

        let boton = document.getElementById("button");

        boton.addEventListener("click", calcularEdad);
    }

    /**
     * Calculo la edad.
     */
    function calcularEdad(){
        fecha = new Date(document.getElementById("fecha").value);
        fechaActual = new Date();
        parrafo = document.getElementById("texto");
        try {
            if(isNaN(Date.parse(fecha)))
                throw new Error("ERROR");
                //Compruebo que si el año es igual, para indicar día y meses
            if(fecha.getFullYear() == fechaActual.getFullYear()){
                let dia = fechaActual.getDate() - fecha.getDate();
                let mes = fechaActual.getMonth() - fecha.getMonth();
               return parrafo.innerHTML =  dia + " dias y " + mes + " meses";
            }
            //Si tiene mas de un año, indico su edad en años
            parrafo.innerHTML = "Edad: " + (fechaActual.getFullYear() - fecha.getFullYear());
        } catch (e) {
            parrafo.innerHTML = e.message;
        }
    }
    window.addEventListener("load", init);
}
