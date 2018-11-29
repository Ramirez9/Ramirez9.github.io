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

 /**
  * Declaro un objeto literal buscaminas
  */
let buscaminas = {
    //Inicializo a 0
    minas: 0,
    cajas: 0,
    filas: 0,
    columnas: 0,
    tablero: [],
    partidaFinalizada: false,
    cronometro: null,

    /**
     * Inicializo los paramatros del tablero
     * Reseteo cronometro
     */
    inicializar(filas, columnas, minas) {
        buscaminas.filas = filas;
        buscaminas.columnas = columnas;
        buscaminas.minas = minas;
        buscaminas.cajas = (filas * columnas) - minas;
        buscaminas.partidaFinalizada = false;
        cronometroFinaliza();
        resetear();
    },

    /**
     * Creo el tablero de array y lo relleno de 0
     */
    crearTablero() {
        //Creo un array con las filas
        buscaminas.tablero = new Array(buscaminas.filas);
        for (let i = 0; i < buscaminas.filas; i++) {
            //En las filas voy añadiendo columnas
            buscaminas.tablero[i] = new Array(buscaminas.columnas);
            for (let j = 0; j < buscaminas.columnas; j++) {
                //i-j se completan de 0
                buscaminas.tablero[i][j] = 0;
            }
        }
    },
    /**
     * Layout del buscaminas
     */
    layout() {

        //Realizo una tabla con filas y cajas
        let tabla = document.createElement("table");
        let fila, caja;

        //Añado id para sus estilos
        tabla.setAttribute("id", "layout");

        //Creo filas y columnas tr-td
        for (let i = 0; i < this.filas; i++) {
            fila = document.createElement("tr");

            for (let j = 0; j < this.columnas; j++) {
                caja = document.createElement("td");
                //Añado un id a cada caja 00 01 02 ...
                caja.setAttribute("id", i + " " + j);
                //Color azul
                caja.style.backgroundColor = "blue";
                //Tamaños de las cajas
                caja.width = "35px";
                caja.height = "35px";
                //Evento de click en cada caja.
                caja.addEventListener("click", buscaminas.cajaPulsada);
                fila.appendChild(caja);
            }
            tabla.appendChild(fila);
        }
        contenedorBuscaminas.appendChild(tabla);
    },

    /**
     * Obtengo la caja fila-columna
     * @param {*} fila 
     * @param {*} columna 
     */
    obtenerCaja(fila, columna) {
        return document.getElementById(fila + " " + columna);
    },

    /**
     * Evento en las cajas al ser pulsado
     * @param {*} fila 
     * @param {*} columna 
     */
    cajaPulsada(fila, columna) {
        //Si la partid estaba acabada no deja pulsar cajas.
        if (buscaminas.partidaFinalizada)
            return -1;

        //Si no tiene cronometro se inicia ,1000 1segundo
        if (!buscaminas.cronometro) 
            buscaminas.cronometro = setInterval(mostrarCronometro, 1000);

        //Controlo dependiendo elvalor de los argumentos
        if (arguments.length == 1) {
            let array = this.id.split(" ");
            fila = array[0];
            columna = array[1];
        }

        //Obtengo la caja y su valor.
        let caja = buscaminas.obtenerCaja(fila, columna);
        let valor = buscaminas.tablero[fila][columna];

        //Una vez pulsada la desactivo.
        caja.disabled = true;

        //Switch con el valor obtenido
        switch (valor) {
            //Si el valor es 0, cambio de color y abro sus huecos
            case 0:
                caja.style.backgroundColor = "#97E4E0";
                buscaminas.cajas--;
                buscaminas.abrirNumeros(fila, columna);
                break;
            //Si el valor es una x, muestra las minas y el mensaje
            case "x":
                buscaminas.mostrarMinas();
                buscaminas.terminarJuego("Perdedor.");
                break;
            default:
                if (valor != -1) {
                    caja.style.backgroundColor = "#97E4E0";
                    caja.textContent = valor;
                    buscaminas.tablero[fila][columna] =-1;
                    buscaminas.cajas--;
                    break;
                }
        }
        if (buscaminas.cajas == 0) {
            buscaminas.terminarJuego("Ganador.");
        }
    },
    /**
     * Recorro todo el tablero, si su valor es x la muestro con el color
     */
    mostrarMinas() {
        for (let i = 0; i < buscaminas.tablero.length; i++) {
            for (let j = 0; j < buscaminas.tablero[i].length; j++) {
                if (buscaminas.tablero[i][j] == "x") {
                    let caja = buscaminas.obtenerCaja(i, j);
                    caja.textContent = "x";
                    caja.style.backgroundColor = "#40908C";
                }
            }
        }
    },

    /**
     * Si el juego termina, activo la bandera, finalizo el cronometro
     * y muestro el mensaje
     * @param {cadena de texto} str 
     */
    terminarJuego(str) {
        //Llamo a generaCadena
        buscaminas.generaCadena(str);
        buscaminas.partidaFinalizada = true;
        cronometroFinaliza();
    },

    /**
     * Creo un nodo para el mensaje
     * @param {*} mensaje 
     * @param {*} color 
     */
    generaCadena(str) {
        let parrafo = document.createElement("h2");
        parrafo.id = "msg";
        parrafo.innerHTML = str;
        contenedorBuscaminas.appendChild(parrafo);
    },

    /**
     * Recursividad para sumar números con los alrededores de las minas
     */
    colocarValores() {
        for (let i = 0; i < buscaminas.minas; i++) {
            do {
                x = Math.floor(Math.random() * buscaminas.filas), y = Math.floor(Math.random() * buscaminas.columnas);
            } while (buscaminas.tablero[x][y] === "x")
            buscaminas.tablero[x][y] = "x";
            for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, buscaminas.filas - 1); j++)
                for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, buscaminas.columnas - 1); k++)
                    if (buscaminas.tablero[j][k] !== "x")
                    buscaminas.tablero[j][k] += 1;
        }
    },

    /**
     * Ab
     * @param {*} x 
     * @param {*} y 
     */
    abrirNumeros(x, y) {
        if (buscaminas.tablero[x][y] == 0) {
            buscaminas.tablero[x][y] = -1;
            for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, buscaminas.filas - 1); j++)
                for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, buscaminas.columnas - 1); k++) {
                    buscaminas.cajaPulsada(j, k);
                }
        }
    },
}