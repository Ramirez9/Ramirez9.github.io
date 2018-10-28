/**
 * 
 * Ejercicio 3.- Métodos.
 * 
 * @author Francisco Ramírez Ruiz
 * 
 */

{

    function init() {
        crearListaPrecision();
        crearListaFixed();
        crearListaExponential();
        crearListaString();
    }

    /**
     * Método toFixed (números decimales)
     */
    function crearListaFixed() {
        //Creo la etiqueta ol

        let inicio = document.createElement("ol");

        let lista6 = document.createElement("h1");
        lista6.textContent = "Método toFixed - decimales";

        var x = 9.5765;
        let lista0 = document.createElement("li");
        lista0.textContent = "El valor de X es: " + x;

        //x.toFixed(2) 
        let lista = document.createElement("li");
        lista.textContent = "x.toFixed(2) =" + x.toFixed(2);
    
        //x.toFixed(6) 
        let lista2 = document.createElement("li");
        lista2.textContent = "x.toFixed(6) =" + x.toFixed(6);

        //x.toFixed(9) 
        let lista3 = document.createElement("li");
        lista3.textContent = "x.toFixed(9) =" + x.toFixed(9);

        //x.toFixed(0) 
        let lista4 = document.createElement("li");
        lista4.textContent = "x.toFixed(0) =" + x.toFixed(0);

        //x.toFixed(NaN) 
        let lista5 = document.createElement("li");
        lista5.textContent = "x.toFixed(NaN) =" + x.toFixed(NaN);


        appends();

        document.body.appendChild(inicio);

        function appends() {
            inicio.appendChild(lista6);
            inicio.appendChild(lista0);
            inicio.appendChild(lista);
            inicio.appendChild(lista2);
            inicio.appendChild(lista3);
            inicio.appendChild(lista4);
            inicio.appendChild(lista5);
            
        }
    }

    
    /**
     * Método toPrecision (números de cifras)
     */
    function crearListaPrecision() {
        //Creo la etiqueta ol

        let inicio = document.createElement("ol");

        let lista6 = document.createElement("h1");
        lista6.textContent = "Método toPrecision - número de cifras";

        var x = 4.6678;
        let lista0 = document.createElement("li");
        lista0.textContent = "El valor de X es: " + x;

        let lista = document.createElement("li");
        lista.textContent = "x.toPrecision(2) =" + x.toPrecision(2);
    
        let lista2 = document.createElement("li");
        lista2.textContent = "x.toPrecision(6) =" + x.toPrecision(6);

        let lista3 = document.createElement("li");
        lista3.textContent = "x.toPrecision(9) =" + x.toPrecision(9);

        appends();

        document.body.appendChild(inicio);

        function appends() {
            inicio.appendChild(lista6);
            inicio.appendChild(lista0);
            inicio.appendChild(lista);
            inicio.appendChild(lista2);
            inicio.appendChild(lista3);
            
        }
    }

    /**
     * Método toExponential
     */
    function crearListaExponential() {
        //Creo la etiqueta ol

        let inicio = document.createElement("ol");

        let lista6 = document.createElement("h1");
        lista6.textContent = "Método toExponential";

        var x = 122.3343;
        let lista0 = document.createElement("li");
        lista0.textContent = "El valor de X es: " + x;

        let lista = document.createElement("li");
        lista.textContent = "x.toExponential(2) =" + x.toExponential(2);
    
        let lista2 = document.createElement("li");
        lista2.textContent = "x.toExponential(6) =" + x.toExponential(6);

        let lista3 = document.createElement("li");
        lista3.textContent = "x.toExponential(9) =" + x.toExponential(9);

        let lista4 = document.createElement("li");
        lista4.textContent = "x.toExponential(0) =" + x.toExponential(0);

        let lista5 = document.createElement("li");
        lista5.textContent = "x.toExponential(NaN) =" + x.toExponential(NaN);


        appends();

        document.body.appendChild(inicio);

        function appends() {
            inicio.appendChild(lista6);
            inicio.appendChild(lista0);
            inicio.appendChild(lista);
            inicio.appendChild(lista2);
            inicio.appendChild(lista3);
            inicio.appendChild(lista4);
            inicio.appendChild(lista5);
            
        }
    }

    
    /**
     * Método toString
     */
    function crearListaString() {
        //Creo la etiqueta ol

        let inicio = document.createElement("ol");

        let lista6 = document.createElement("h1");
        lista6.textContent = "Método toString ";

        var x = 13.23864;
        let lista0 = document.createElement("li");
        lista0.textContent = "El valor de X es: " + x;

        let lista = document.createElement("li");
        lista.textContent = "x.toString() =" + "\"" + x.toString() + "\"";
    
        let lista2 = document.createElement("li");
        lista2.textContent = "x.toString(36) ="  + "\"" + x.toString(36) + "\"";

        let lista3 = document.createElement("li");
        lista3.textContent = "(10+3)toString() =" + "\"" + (10+3).toString() + "\"";

        let lista4 = document.createElement("li");
        lista4.textContent = "(7)toString() =" + "\"" + (7).toString() + "\"";


        appends();

        document.body.appendChild(inicio);

        function appends() {
            inicio.appendChild(lista6);
            inicio.appendChild(lista0);
            inicio.appendChild(lista);
            inicio.appendChild(lista2);
            inicio.appendChild(lista3);
            inicio.appendChild(lista4);
            
        }
    }

    

    window.addEventListener("load", init);
}