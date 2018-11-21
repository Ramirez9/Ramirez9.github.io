/**
 * Ejercicio 1: Contador
 * Contabiliza el número de veces que se entra en esa página.
 * • Utiliza plantillas de cadena de texto en la función generaMensaje, que devuelve una cadena
 * e incrusta el contador almacenado en el storage de la ventana.
 * • El mensaje variará en función del argumento recibido
 * • A partir de la tercera visita sólo cambiará el número
 * 
 * @author Francisco Ramírez Ruiz
 */
{
    /*
     * Declaro variables para los correspondientes ids de contador.html
     */
    let sentence;
    let del;
    let back;

    function init() {
        sentence = document.getElementById("sentence");
        del = document.getElementById("delete");
        back = document.getElementById("back");

        action();

        events(del, back);
    }

    /**
     * Creo la función obligatoria generaMensaje
     * Controlo los textos dependiendo del contador
     */
    function generaMensaje(contador) {

        //Los devuelvo en formato cadena usando un switch
        switch (contador) {
            case 0:
                return `Bienvenido a mi humilde morada.
                Esta es la primera vez que entras. 
                Espero que vuelvas.`
            case 1:
                return `Hola de nuevo.
                Ya estás aquí por segunda vez. ¿Volveremos a vernos?.`

            default:
                return `Ya empiezas a ser pesado.
                Esta el la vez número ${contador +1} que entras. Sigue con tus cosas.`

        }
    }

    /**
     * Creo un contador con localStorage usando:
     * getItem
     * setItem
     */
    function action() {

        /*
        * Creo un localStorage numero con getItem
        * Si es null, lo parseo y muestro un mensaje
        * Dependiendo del número de contador en generaMensaje
        */
        let contador = localStorage.getItem("numero");
        contador = (contador === null) ? 0 : parseInt(contador);
        sentence.innerHTML = generaMensaje(contador);

        localStorage.setItem("numero", ++contador);
    }

    /**
     * Reseteo el la Key contador a un value de 0
     */
    function reset() {
        //Elimino haciendo uso de removeItem
        localStorage.removeItem("numero");
        sentence.textContent = "RESETEADO";
    }


    /**
     * Vuelvo atrás con el método back de history
     */
    function backIndex() {
        window.history.back();
    }

    /**
     * Eventos del código contador.js
     */
    function events(del, back) {
        del.addEventListener("click", reset);
        back.addEventListener("click", backIndex);
    }

    window.addEventListener("load", init);
}