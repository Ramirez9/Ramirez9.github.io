/**
 * 
 * Habrá tres niveles de juego: 
 * principiante (8x8, 10 minas), 
 * intermedio (16x16, 40 minas) y 
 * experto (16x30, 99 minas)
 * Separarás la capa de presentación de la capa de negocio
 * Para facilitar la corrección, dejarás público el método mostrarCampoMinas que mostrará la estructura por consola
 * Define el objeto buscaminas que sólo tenga públicos los métodos necesarios. Los invocarás desde el DOM.
 * Define correctamente el estado del buscaminas: campo de minas, dimensiones, número de minas
 * Mostrarás en el marcador el tiempo y el número de minas que quedan por marcar
 * Los eventos del ratón serán tres:
 * click (picar en el campo)
 * click derecho (marcar bandera en el campo o despejar)
 * click con ambos botones (dar pistas con los alrededores)
 * 
 * @author Francisco Ramírez Ruiz
 */
{
    //Declaro variables
    let contenedor;
    let botones;
    let reloj;

    /**
     * Init
     */
    function init() {
        //Obtengo Tag boton e ids.
        botones = document.getElementsByTagName("button");
        contenedor = document.getElementById("contenedorBuscaminas");
        reloj = document.getElementById("reloj");

        for (let i = 0; i < botones.length; i++) {
            botones[i].addEventListener("click", niveles);
        }    
    }

    /**
     * Niveles en funcion de las opciones seleccionadas
     */
    function niveles() {
        //Si el tablero existe lo elimino
        eliminaTablero();
        switch (this.id) {
            //Facil
            case "facil":
                crearPartida(8, 8, 10);
                break;
            //Medio
            case "medio":
                crearPartida(16, 16, 40);
                break;
            //Dificil
            default:
                crearPartida(16, 30, 99);
                break;
        }
    }

    /**
     * Elimino el tablero y el mensaje en caso de acabar la partida
     */
    function eliminaTablero() {

        //Obtengo el tablero y el mensaje
        let tablero = document.getElementById("layout");
        let msg = document.getElementById("msg");

        //Hago uso de removeChild
        if (tablero)
            contenedor.removeChild(tablero);
        if (msg)
            contenedor.removeChild(msg);
    }

    /**
     * Creo la partida de buscaminas
     */
    function crearPartida(filas, columnas, minas) {
        //Sino hay cronometro, creo uno.
        if(!cronometro)
            layoutCronometro();

        //Llamo a los metodos de buscaminas.js        
        buscaminas.inicializar(filas, columnas, minas);
        buscaminas.layout();
        buscaminas.crearTablero();
        buscaminas.colocarValores();
    }

    /**
     * Muestro el cronometro
     */
    function mostrarCronometro() {
        setInterval(cronometro.mostrarCronometro, 1000);
    }

    /**
     * Creo la aparciencia del cronometro
     */
    function layoutCronometro(){
        let cronometroElement = document.createElement("b");
        cronometroElement.id = "cronometro";
        contenedorBuscaminas.appendChild(cronometroElement);
        cronometro = document.getElementById("cronometro");
    }

    window.addEventListener("load", init);
}
function mostrarTablero() {
    console.table(buscaminas.tablero);
}
