/**
 * 9.- Averigua qué método es el más eficiente para manejarse con arrays.  Compruébalo mediante performance.now() o similares
 * Introduce 100 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...
 * Eliminar 100 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...
 *
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    function init(){

        arrayEficiente();

    }

    /**
     * funcion para definir las arrays
     * 
     * Hago uso de perfomance.now
     * t1();
     * acción();
     * t2();
     * 
     * trabaja en milisegundos.
     */
    let arrayEficiente = function () {

        let parrafo = document.getElementById("info");

        let { tiempo1, tiempo2, tiempoPush, cadena, array, tiempoUnshift, tiempoPop, tiempoShift } = variables();
    
        //Push
        ({ tiempo1, tiempo2, tiempoPush, cadena } = push(tiempo1, array, tiempo2, tiempoPush, cadena));
    
        //Unshift
        ({ array, tiempo1, tiempo2, tiempoUnshift, cadena } = unshift(array, tiempo1, tiempo2, tiempoUnshift, cadena, tiempoPush));
    
        //Pop
        ({ array, tiempo1, tiempo2, tiempoPop, cadena } = pop(array, tiempo1, tiempo2, tiempoPop, cadena));
    
        //Shift
        ({ array, tiempo1, tiempo2, tiempoShift, cadena } = shift(array, tiempo1, tiempo2, tiempoShift, cadena));

        //Texto de Pop-Shift
        cadena = textPopShift(tiempoPop, tiempoShift, cadena);
        //Texto eficiente
        cadena = masEficiente(tiempoPush, tiempoShift, tiempoUnshift, tiempoPop, cadena);
    
        parrafo.innerHTML = cadena;

    }
    window.addEventListener("load", init);
}

/**
 * Declaro las variables de cadena.
 * Array
 * Y tiempos para calcularlos
 */
function variables() {
    let cadena = "";
    let array = [];
    let tiempo1;
    let tiempo2;
    let tiempoPush;
    let tiempoUnshift;
    let tiempoPop;
    let tiempoShift;
    return { tiempo1, tiempo2, tiempoPush, cadena, array, tiempoUnshift, tiempoPop, tiempoShift };
}

/**
 * Averigua el más eficiente
 * @param {*} tiempoPush 
 * @param {*} tiempoShift 
 * @param {*} tiempoUnshift 
 * @param {*} tiempoPop 
 * @param {*} cadena 
 */  
function masEficiente(tiempoPush, tiempoShift, tiempoUnshift, tiempoPop, cadena) {
    if (tiempoPush < tiempoShift && tiempoPush < tiempoUnshift && tiempoPush < tiempoPop)
        cadena += "<h4>push --> eficiente";
    else if (tiempoShift < tiempoPush && tiempoShift < tiempoUnshift && tiempoShift < tiempoPop)
        cadena += "<h4>shift --> eficiente</h4>";
    else if (tiempoPop < tiempoPush && tiempoPop < tiempoUnshift && tiempoPop < tiempoShift)
        cadena += "<h4>pop --> eficiente</h4>";
    else
        cadena += "<h4>unshift --> eficiente</h4>";
    return cadena;
}

/**
 * Textos de Pop y shift
 * @param {*} tiempoPop 
 * @param {*} tiempoShift 
 * @param {*} cadena 
 */
function textPopShift(tiempoPop, tiempoShift, cadena) {
    if (tiempoPop < tiempoShift) {
        cadena += "<h4>pop es más eficiente.</h4>";
    }
    else if (tiempoPop > tiempoShift) {
        cadena += "<h4>shift es más eficiente.</h4>";
    }
    else {
        cadena += "<h4>Ambos lo son</h4>";
    }
    return cadena;
}

/**
 * Método Pop
 * @param {*} array 
 * @param {*} tiempo1 
 * @param {*} tiempo2 
 * @param {*} tiempoPop 
 * @param {*} cadena 
 */
function pop(array, tiempo1, tiempo2, tiempoPop, cadena) {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    tiempo1 = performance.now();
    for (let i = 0; i < 100; i++) {
        array.pop();
    }
    tiempo2 = performance.now();
    tiempoPop = tiempo2 - tiempo1;
    cadena += "<h4>pop: </h4>" + tiempoPop;
    return { array, tiempo1, tiempo2, tiempoPop, cadena };
}

/**
 * Método shift
 * @param {*} array 
 * @param {*} tiempo1 
 * @param {*} tiempo2 
 * @param {*} tiempoShift 
 * @param {*} cadena 
 */
function shift(array, tiempo1, tiempo2, tiempoShift, cadena) {
    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    tiempo1 = performance.now();
    for (let i = 0; i < 100; i++) {
        array.shift();
    }
    tiempo2 = performance.now();
    tiempoShift = tiempo2 - tiempo1;
    cadena += "<h4>shift: </h4>" + tiempoShift;


    return { array, tiempo1, tiempo2, tiempoShift, cadena };
}

/**
 * Método unshift
 * @param {*} array 
 * @param {*} tiempo1 
 * @param {*} tiempo2 
 * @param {*} tiempoUnshift 
 * @param {*} cadena 
 * @param {*} tiempoPush 
 */
function unshift(array, tiempo1, tiempo2, tiempoUnshift, cadena, tiempoPush) {
    array = [];
    tiempo1 = performance.now();
    for (let i = 0; i < 100; i++) {
        array.unshift(i);
    }
    tiempo2 = performance.now();
    tiempoUnshift = tiempo2 - tiempo1;
    cadena += "<h4>unshift: </h4>" + tiempoUnshift;

    cadena = textPushUnshift(tiempoPush, tiempoUnshift, cadena);
    return { array, tiempo1, tiempo2, tiempoUnshift, cadena };
}

/**
 * Texto para calcular el más eficiente
 * @param {*} tiempoPush 
 * @param {*} tiempoUnshift 
 * @param {*} cadena 
 */
function textPushUnshift(tiempoPush, tiempoUnshift, cadena) {
    /**
     * Compruebo entre push y unshift
     */
    //push < unshift
    if (tiempoPush < tiempoUnshift) {
        cadena += "<h4>push es más eficiente</h4>";
    }
    //push  > unshift
    else if (tiempoPush > tiempoUnshift) {
        cadena += "<h4>unshift es más eficiente</h4>";
    }
    //push = unsfift
    else {
        cadena += "<h4>Ambos lo son</h4>";
    }
    return cadena;
}

/**
 * Método push
 * @param {*} tiempo1 
 * @param {*} array 
 * @param {*} tiempo2 
 * @param {*} tiempoPush 
 * @param {*} cadena 
 */
function push(tiempo1, array, tiempo2, tiempoPush, cadena) {
    tiempo1 = performance.now();
    for (let i = 0; i < 100; i++) {
        array.push(i);
    }
    tiempo2 = performance.now();
    tiempoPush = tiempo2 - tiempo1;
    cadena += "<h4>Push: </h4>" + tiempoPush;
    return { tiempo1, tiempo2, tiempoPush, cadena };
}

