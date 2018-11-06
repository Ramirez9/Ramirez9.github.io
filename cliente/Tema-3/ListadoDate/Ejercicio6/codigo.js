/**
 * 6.- Crea el método incrementaDias() que incremente/decremente los días indicados. 
 * Admitirá como primer argumento un entero positivo/negativo que reperesente el número de días. 
 * El resto de argumentos representarán una fecha, similar a los argumentos del constructor Date(). 
 * 
 * @author Francisco Ramirez Ruiz
 */

{
    let date = new Date(Date.now());
    let newDate;
    let fec;

    function init(){
        escribir(date);
        
        let boton = document.getElementById("button");

        boton.addEventListener("click", incrementaDias);
    }

    /**
     * Sumo los dias escritos
     */
    function incrementaDias(){
        let parrafo = parseInt(document.getElementById("fecha").value);
        if(isNaN(parrafo))
            return;
        newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + parrafo)
        fec.innerHTML = new Date(newDate);
        date = newDate;
    }

    /**
     * Escribo la fecha actual
     * @param {*} date 
     */
    function escribir(date) {
        fec = document.getElementById("texto");
        fec.innerHTML = date;
    }

    window.addEventListener("load", init);

}



