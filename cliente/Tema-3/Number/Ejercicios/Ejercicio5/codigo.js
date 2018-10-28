/**
 * 
 * Ejercicio 5.- ParseInt y ParseFloat
 * 
 * @author Francisco Ramírez Ruiz
 * 
 */

{

    function init() {
        crearListaParseInt();
        crearListaParseFloat();

    }

    /**
     * Método parseInt 
     */
    function crearListaParseInt() {
        //Creo la etiqueta ol

        let inicio = document.createElement("ol");

        let lista6 = document.createElement("h1");
        lista6.textContent = "ParseInt - Enteros";

        var x = 9.5765;
        let lista0 = document.createElement("li");
        lista0.textContent = "parseInt('10') =  " + parseInt("10");

        let lista = document.createElement("li");
        lista.textContent = "parseInt('10.567') = " + parseInt("10.567");

        let lista2 = document.createElement("li");
        lista2.textContent = "parseInt('43 50') = " + parseInt("43 50");

        let lista3 = document.createElement("li");
        lista3.textContent = "parseInt('23 Hola') = " +  parseInt("23 Hola");

        let lista4 = document.createElement("li");
        lista4.textContent = "parseInt('hola 50') = " +  parseInt("hola 50");

        let lista5 = document.createElement("li");
        lista5.textContent = "parseInt('40' + '3hola') = " +  parseInt("40"+"3hola");


        let lista9 = document.createElement("li");
        lista9.textContent = "parseInt('40' + 'hola3') = " + parseInt("40"+"hola3");

        let lista10 = document.createElement("li");
        lista10.textContent = "parseInt('Cadena') = " + parseInt("Hola");

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
            inicio.appendChild(lista9);
            inicio.appendChild(lista10);

        }
    }

        
    /**
     * Método parseFloat 
     */
    function crearListaParseFloat() {
        //Creo la etiqueta ol

        let inicio = document.createElement("ol");

        let lista6 = document.createElement("h1");
        lista6.textContent = "ParseFloat - Decimales";

        var x = 9.5765;
        let lista0 = document.createElement("li");
        lista0.textContent = "parseFloat('10') =  " + parseFloat("10");

        let lista = document.createElement("li");
        lista.textContent = "parseFloat('10.567') = " + parseFloat("10.567");

        let lista2 = document.createElement("li");
        lista2.textContent = "parseFloat('43.4 50.6') = " + parseFloat("43.4 50.6");

        let lista3 = document.createElement("li");
        lista3.textContent = "parseFloat('23.67 Hola') = " +  parseFloat("23.67 Hola");

        let lista4 = document.createElement("li");
        lista4.textContent = "parseFloat('hola 50.45') = " +  parseFloat("hola 50.45");

        let lista5 = document.createElement("li");
        lista5.textContent = "parseFloat('40' + '3hola') = " +  parseFloat("40"+"3hola");

        let lista9 = document.createElement("li");
        lista9.textContent = "parseFloat('40.33' + 'hola.453') = " + parseFloat("40.33"+"hola.453");

        let lista10 = document.createElement("li");
        lista10.textContent = "parseFloat('Cadena') = " + parseFloat("Hola");

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
            inicio.appendChild(lista9);
            inicio.appendChild(lista10);

        }
    }

    window.addEventListener("load", init);
}