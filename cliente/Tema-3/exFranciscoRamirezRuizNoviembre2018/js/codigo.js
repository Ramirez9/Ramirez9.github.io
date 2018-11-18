/**
 * 
 * Examen JavaScript Noviembre 2018
 * 
 * • Reproduce la siguiente página principal.
 * • No uses CSS.
 * • Introduce el script en el head del documento sin utilizar ni defer ni async.
 * • Los enlaces abrirán una ventana en la misma pestaña actual.
 * • Todas las páginas volverán a esta primera con el enlace atrás. Usa el objeto
 *   predefinido que lo permite.
 * 
 * @author Francisco Ramírez Ruiz
 */

{
    /*
     * Función inicial, la cuál dispone de los botones 
     * count y name del index.html
     */
    function init() {

        //Declaro y obtengo los Ids
        let count = document.getElementById("count");
        let name = document.getElementById("name");

        events(count, name);
    }

    /**
     * Envio a la url de contador
     */
    function countPage() {
        //Hago uso de window.location.href, se puede omitir window.
        location.href = "contador.html";
    }

    /**
     * Envio a la url nombre
     */
    function namePage() {
        location.href = "nombre.html";
    }

    /**
     * Eventos en los botones del index.html
     * @param {*} count 
     * @param {*} name 
     */
    function events(count, name) {
        count.addEventListener("click", countPage);
        name.addEventListener("click", namePage);
    }

    window.addEventListener("load", init);

}