/**
 * 10.- Implementa el método calcularHastaFinDeAnno() que devuelva los días que quedan hasta fin de año
 * 
 * @author Francisco Ramirez Ruiz
 */

 {
    let date = new Date(Date.now());

    let dias ;

    function init(){

        escribir(date);

        dias =  document.getElementById("dias");
        
        dias.innerHTML = calcularHastaFinDeAnno("Dec, 31, 2018");

    }

    function calcularHastaFinDeAnno(str){
        return (Date.parse(str) - Date.now())/(8.64e+7) +" días";
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