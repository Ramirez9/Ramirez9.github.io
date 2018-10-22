/**
 * Crea una página web con el siguiente comportamiento:
 * Un botón "bajar línea" para bajar una línea.
 * Un botón "subir línea" para subir una línea
 * Un botón "bajar" para bajar una página.
 * Un botón "subir" para subir una página.
 * Un botón "inicio" para ir al inicio del documento
 * Un botón "fin" para ir al final del documento.
 * Puedes utilizar los siguientes métodos de windows: scroll(), scrollBy(), scrollByLines(), scrollTo()
 * 
 * 
 * @author Francisco Ramirez Ruiz
 */


{

    function init() {
       
        let bajarLinea = document.getElementById("bajarLinea");
        let subirLinea = document.getElementById("subirLinea");
        let bajarPagina = document.getElementById("bajarPagina");
        let subirPagina = document.getElementById("subirPagina");
        let inicio = document.getElementById("inicioDocumento");
        let fin = document.getElementById("finDocumento");

        bajarLinea.addEventListener("click",bLinea);
        subirLinea.addEventListener("click",sLinea);
        bajarPagina.addEventListener("click",bPagina);
        subirPagina.addEventListener("click",sPagina);
        inicio.addEventListener("click",inicioPagina);
        fin.addEventListener("click",finPagina);


    }
    /**
     * Lineas
     */
    function bLinea() {
        //scrollByLines No lo soporta GoogleChrome
        //Por lo cual usaré scrollTo bajando ciertas posiciones a la Y
        window.scrollTo(scrollX, scrollY + 10);
    }
    function sLinea() {
        window.scrollTo(scrollX, scrollY - 10);
    }

    /**
     * Paginas
     */
    function bPagina() {
        //window.scrollBy(x-coord, y-coord);
        window.scrollBy(0, window.innerHeight);
    }
    function sPagina() {
        window.scrollBy(0, -window.innerHeight);
    }

    /**
     * Inicio y Fin
     */
    function inicioPagina() {
    //Usamos scrollHeigt así detecta la altura de la página del cliente.
        window.scrollTo(scrollX, scrollY - window.document.body.scrollHeight);
    }
    function finPagina() {
        window.scrollTo(scrollX, scrollY + window.document.body.scrollHeight);
    }


    window.addEventListener("load", init); 
}