/**
 * 
 * Ejercicio 1.- Suma de cadenas y constantes
 * 
 * @author Francisco Ramírez Ruiz
 * 
 */

{

    function init() {
        crearLista();
        crearLista2();
    }

    function crearLista() {
        //Creo la etiqueta ol
        let inicio = document.createElement("ol");

        //Suma de dos variables numércias
        var x = 30;
        var y = 20;
        var z = x + y;
        let lista = document.createElement("li");
        lista.textContent = "Dos variables númericas: 30 + 20 = " + z;
    
        //Dos cadenas con números
        var x = "30";
        var y = "20";
        var z = x + y;
        let lista2 = document.createElement("li");
        lista2.textContent = "Dos cadenas : \"30\" + \"20\"= " + "\"" + z + "\"";

        //Un valor numérico y una cadena
        var x = 30;
        var y = "20";
        var z = x + y;
        let lista3 = document.createElement("li");
        lista3.textContent = "Valor numérico y una cadena: 30 + \"20\" = " + "\"" + z + "\"";

        //Dos variables con una cadena sin números
        var x = 30;
        var y = "20";
        var z = "El resultado de z es: " + x + y ;
        let lista4 = document.createElement("li");
        lista4.textContent = "Dos variables numéricas con una cadena  = "  + "\"" + z + "\"";

        appends();

        document.body.appendChild(inicio);

        function appends() {
            inicio.appendChild(lista);
            inicio.appendChild(lista2);
            inicio.appendChild(lista3);
            inicio.appendChild(lista4);
        }
    }

    function crearLista2() {

        let inicio = document.createElement("ol");

        //Multiplicacion cadenas
        var x = "30";
        var y = "20";
        var z = x  * y;
        let lista = document.createElement("li");
        lista.textContent = "Multiplicación cadenas: 30 * 20 = " + z;
    

        //Division cadenas
        var x = "30";
        var y = "20";
        var z = x  / y;
        let lista2 = document.createElement("li");
        lista2.textContent = "División cadenas: 30 / 20 = " + z;

        //Resta cadenas
        var x = "30";
        var y = "20";
        var z = x - y;
        let lista3 = document.createElement("li");
        lista3.textContent =  "División cadenas: 30 - 20 = " + z;

        appends();

        document.body.appendChild(inicio);

        function appends() {
            inicio.appendChild(lista);
            inicio.appendChild(lista2);
            inicio.appendChild(lista3);
        }
    }

    window.addEventListener("load", init);
}