/**
 * 2.- Tanto los arrays javaScript como los Sets permiten almacenar elementos. Indica la diferencia entre ambos.
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    let parrafo; 
    function init(){

        parrafo = document.getElementById('parrafo');

        texto();

    }

    function texto() {
        parrafo.innerHTML = `

        Array -> Posee índices y el valor puede estar siempre<br>

        Sets -> No poseen índices y solo puede estar un valor<br>

        Como no dispone de índices no podríamos acceder al valor según una determinada posición, en cambio en un array si

        `;

    }
    window.addEventListener("load", init);
}

