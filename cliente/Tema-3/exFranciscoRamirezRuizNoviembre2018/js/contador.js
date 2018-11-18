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

        //Primera vez = primer mensaje
        if (contador === '1')
            sentence.textContent = `Bienvenido a mi humilde morada. Esta es la primera vez que entras. Espero que vuelvas`;
        //Segunda vez = segundo mensaje
        else if (contador === '2')
            sentence.textContent = `Hola de nuevo. Ya estas aquí por segunda vez. ¿Volveremos a vernos?. `;
        //Tercera > mismo mensaje enseñando contador.
        else
            sentence.textContent = `Ya empiezas a ser pesado.
            Esta es la vez número ${parseInt(
            contador++
            )} que entras. Sigue con tus cosas.`;
    }

    /**
     * Creo un contador con localStorage usando:
     * getItem
     * setItem
     */
    function action() {
        //Si cotnador es null, lo inicializo a 1 con setItem
        if (localStorage.getItem("contador") === null) {
            localStorage.setItem("contador", 1);
            generaMensaje(localStorage.getItem("contador"));
        } else {
            //Si ya poseo un contador le sumo + 1 al entrar
            localStorage.setItem(
                "contador",
                parseInt(localStorage.getItem("contador")) + 1
            );
            generaMensaje(localStorage.getItem("contador"));
        }
    }

    /**
     * Reseteo el la Key contador a un value de 0
     */
    function reset() {
        //Si contador es distinto de null = está creado.
        //Le coloco valor 0
        if (localStorage.getItem("contador") !== null) {
            localStorage.setItem("contador", 0);
            sentence.textContent = "RESETEADO";
        }
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