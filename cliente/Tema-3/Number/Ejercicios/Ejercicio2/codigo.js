/**
 * 
 * Ejercicio 2.- MAX_VALUE Y MIN_VALUE
 * 
 * @author Francisco Ramírez Ruiz
 * 
 */

{

    function init() {
        crearLista();
        crearLista2();
    }

    /**
     * MAX_VALUE
     */
    function crearLista() {
        //Creo la etiqueta ol
        let inicio = document.createElement("ol");

        //MaxValue
        var x = Number.MAX_VALUE;
        let lista0 = document.createElement("li");
        lista0.textContent = "Number.MAX_VALUE = " + x;
        
        //Suma MaxValue
        var x = Number.MAX_VALUE;
        var z = x + x;
        let lista = document.createElement("li");
        lista.textContent = "Number.MAX_VALUE + Number.MAX_VALUE = " + z;
    
        //Multiplicacion MaxValue
        var x = Number.MAX_VALUE;
        var z = x * x ;
        let lista2 = document.createElement("li");
        lista2.textContent = "Number.MAX_VALUE * Number.MAX_VALUE = " + z;

        //Division MaxValue
        var x = Number.MAX_VALUE;
        var z = x / x ;
        let lista3 = document.createElement("li");
        lista3.textContent = "Number.MAX_VALUE / Number.MAX_VALUE = " + z;

        //Dos variables con una cadena sin números
        var x = Number.MAX_VALUE;
        var z = x - x ;
        let lista4 = document.createElement("li");
        lista4.textContent = "Number.MAX_VALUE - Number.MAX_VALUE = " + z;

        appends();

        document.body.appendChild(inicio);

        function appends() {
            inicio.appendChild(lista0);
            inicio.appendChild(lista);
            inicio.appendChild(lista2);
            inicio.appendChild(lista3);
            inicio.appendChild(lista4);
        }
    }

    /**
     * MIN_VALUE
     */
    function crearLista2() {
        //Creo la etiqueta ol
        let inicio = document.createElement("ol");

        //MinValue
        var x = Number.MIN_VALUE;
        let lista0 = document.createElement("li");
        lista0.textContent = "Number.MIN_VALUE = " + x;

        //Suma MinValue
        var x = Number.MIN_VALUE;
        var z = x + x;
        let lista = document.createElement("li");
        lista.textContent = "Number.MIN_VALUE + Number.MIN_VALUE = " + z;

        //Multiplicacion MinValue
        var x = Number.MIN_VALUE;
        var z = x * x ;
        let lista2 = document.createElement("li");
        lista2.textContent = "Number.MIN_VALUE * Number.MIN_VALUE = " + z;

        //Division MinValue
        var x = Number.MIN_VALUE;
        var z = x / x ;
        let lista3 = document.createElement("li");
        lista3.textContent = "Number.MIN_VALUE / Number.MIN_VALUE = " + z;

        //Resta MinValue
        var x = Number.MIN_VALUE;
        var z = x - x ;
        let lista4 = document.createElement("li");
        lista4.textContent = "Number.MIN_VALUE - Number.MIN_VALUE = " + z;

        appends();

        document.body.appendChild(inicio);

        function appends() {
            inicio.appendChild(lista0);
            inicio.appendChild(lista);
            inicio.appendChild(lista2);
            inicio.appendChild(lista3);
            inicio.appendChild(lista4);
        }
    }

    window.addEventListener("load", init);
}