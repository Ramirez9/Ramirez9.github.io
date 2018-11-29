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
    
    
    //Creo las variables de tiempo
    let horas = 0;
    let minutos = 0;
    let segundos = 0;
    let cronometro;


    /**
     * Muestro el reloj
     */
    function mostrarCronometro() {

        //Si llega a 60 segundos coloco 1 minuto
        if (segundos == 59) {
            segundos = -1;
            minutos = parseInt(minutos) + 1;
        }
        //Si llega a 60 minutos coloco 1 hora
        if (minutos == 59) {
            minutos = -1;
            horas = parseInt(horas) + 1;
        }

        //Parseo los segundos y le añado 1
        segundos = (parseInt(segundos) + 1);

        minutos = minutos;
        horas = horas;

        cronometro.innerHTML = horas + ":" + minutos + ":" + segundos;
    }

    /**
     * Coloco el cronometro a 00:00:00
     */
    function resetear() {
        horas = "00";
        minutos = "00";
        segundos = "00";

        cronometro.innerHTML = horas + ":" + minutos + ":" + segundos;
    }

    /**
     * Si finaliza la partida se acaba
     */
    function cronometroFinaliza() {
        if (buscaminas.cronometro != null) {
            clearInterval(buscaminas.cronometro);
            buscaminas.cronometro = null;
        }
    }