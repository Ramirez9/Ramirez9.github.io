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
    /*
     * Declaro las variables necesarias.
     */
    let filas;
    let columnas;
    let minas;

    //Nivel de juego
    let nivel;

    let tablero = [];

    //Posiciones del juego
    let x, y;

    function init() {

        dificultad();
        crear();
        rellenarTablero();
        console.table(tablero);
    }

    /**
     * Compruebo el nivel
     */
    function dificultad() {
        nivel = pedirDificultad();
        //Comrpruebo que sea válido, sino pregunto de nuevo.
        if (isNaN(nivel) || nivel < 0 || nivel > 3)
            return dificultad();
        //Modificar variables y minas
        switch (nivel) {
            case 1:
                filas = columnas = 8;
                minas = 5;
                break;
            case 2:
                filas = columnas = 16;
                minas = 10;
                break;
            default:
                filas = 16
                columnas = 30;
                minas = 20;
                break;
        }
    }

    /**
     * Pido al usuario con prompt la dificultad 
     */
    function pedirDificultad() {
        return parseInt(prompt("1--> Fácil | 2--> Medio | 3--> Experto"));
    }

    /**
     * Creo el tablero dependiendo de las filas y columnas
     */
    function crear() {
        for (let i = 0; i < filas; i++) {
            tablero[i] = [];
            for (let j = 0; j < columnas; j++)
                tablero[i][j] = 0;
        }
    }

    /**
     * Relleno el tablero con los números dependiendo de las bombas
     */
    function rellenarTablero() {

        //Recorro el número de minas
        for (let i = 0; i < minas; i++) {
            x = Math.floor(Math.random() * minas);
            y = Math.floor(Math.random() * minas);
            //Colo coloco en las posiciones los nueves = bombas.
            tablero[x][y] = 9;

            /*
             * Recursividad
             * Buscaminas php
             */
            for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, filas - 1); j++)
                for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, columnas - 1); k++)
                    if (tablero[j][k] !== 9)
                        tablero[j][k] += 1;
        }
    }

    window.addEventListener("load", init);

}