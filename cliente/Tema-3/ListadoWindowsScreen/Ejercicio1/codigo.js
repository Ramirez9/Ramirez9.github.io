/**
 * 1-Muestra en  una lista la siguiente información. Cada uno de las etiquetas <ol> y <li> han de crearse mediante los métodos de document. Explica en cada uno la diferencia con respecto a los demás. 
 * window.outerHeight
 * window.innerHeight
 * window.screen.availHeight
 * window.screen.height
 * window.document.clientHeight
 *
 * @author Francisco Ramírez Ruiz
 */

{

    function init() {
        crearLista();
    }

    function crearLista() {
        //Creo la etiqueta ol
        let inicio = document.createElement("ol");

        /**
         * Listas de la etiqueta ol
         */

        //Lista 1
        let lista = document.createElement("li");
        lista.textContent = "window.outerHeight: Altura de la página = " + window.outerHeight;

        //Lista2
        let lista2 = document.createElement("li");
        lista2.textContent = "window.innerHeight: Altura del documento = " + window.innerHeight;

        //Lista3
        let lista3 = document.createElement("li");
        lista3.textContent = "window.screen.availHeight: Muestra la altura de la pantalla del usuario menos las"+
        "las barras superior e inferior = " + window.screen.availHeight;

        //Lista4
        let lista4 = document.createElement("li");
        lista4.textContent = "window.screen.height: Altura de la pantalla del usuario ( total ) = "
         + window.screen.height;

        //Lista5
        let lista5 = document.createElement("li");
        lista5.textContent = "window.document.clientHeight(body): Altura del elemento seleccionado, he puesto body = "
         +  window.document.body.clientHeight;

        appends();

        document.body.appendChild(inicio);

        function appends() {
            inicio.appendChild(lista);
            inicio.appendChild(lista2);
            inicio.appendChild(lista3);
            inicio.appendChild(lista4);
            inicio.appendChild(lista5);
        }
    }
    window.addEventListener("load", init);
}