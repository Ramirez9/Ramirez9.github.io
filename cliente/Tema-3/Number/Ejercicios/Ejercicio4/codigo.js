/**
 * 
 * Ejercicio 4.- Convertir variables en números.
 * 
 * @author Francisco Ramírez Ruiz
 * 
 */

{

    function init() {
        crearLista();
        crearListaDate();

    }

    /**
     * Método toFixed (números decimales)
     */
    function crearLista() {
        //Creo la etiqueta ol

        let inicio = document.createElement("ol");

        let lista6 = document.createElement("h1");
        lista6.textContent = "Valor numérico de una variable";

        var x = 9.5765;
        let lista0 = document.createElement("li");
        lista0.textContent = "Number('function') =  " + Number('function');

        let lista = document.createElement("li");
        lista.textContent = "Number('10') = " + Number('10');
 
        let lista2 = document.createElement("li");
        lista2.textContent = "Number('10.5')=" + Number('10.5');

        let lista3 = document.createElement("li");
        lista3.textContent = "Number('10e-3') =" + Number('10e-3');

        let lista4 = document.createElement("li");
        lista4.textContent = "Number('0x11') =" + Number('0x11');

        let lista5 = document.createElement("li");
        lista5.textContent = "Number('0b11') =" + Number('0b11');

        let lista9 = document.createElement("li");
        lista9.textContent = "Number('0o11') =" + Number('0o11');

        let lista10 = document.createElement("li");
        lista10.textContent = "Number('') =" + Number('');

        let lista11 = document.createElement("li");
        lista11.textContent = "Number(true) =" + Number(true);

        let lista12 = document.createElement("li");
        lista12.textContent = "Number(false) =" + Number(false);


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
            inicio.appendChild(lista11);
            inicio.appendChild(lista12);

        }
    }

        
    /**
     * Trabajar con  Date 1/1/1970
     */
    function crearListaDate() {
        //Creo la etiqueta ol

        let inicio = document.createElement("ol");

        let lista6 = document.createElement("h1");
        lista6.textContent = "Date - 01/01/1970";

        let lista0 = document.createElement("li");
        lista0.textContent = "Transformar el valor de Date en milisegundos =  " + (Number(new Date()));;

        let lista = document.createElement("li");
        lista.textContent = "Seleccionado nosotros la fecha \"2018/03/28\" = " +(Number(new Date("2018/03/28")));;
    
        let lista2 = document.createElement("li");
        lista2.textContent = "Tiempo transcurrido en milisegundos ( un día )\"1970/01/02\" = " +(Number(new Date("1970/01/02")));

        let lista3 = document.createElement("li");
        lista3.textContent = "Paso a días de la fecha anterior = " + (Number(new Date("1970/01/02"))/8.64e+7) + " días";

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

    window.addEventListener("load", init);
}