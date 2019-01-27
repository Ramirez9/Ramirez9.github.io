/**
 * Reentrega del examen de diciembre de 2018
 * 
 * Clase main.js
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    // Declaro las variables necesarias
    // let nombre;
    // let correo;
    // let fecha;
    // let hora;
    // let noches;
    // let personas;
    let inputs;

    // Variables checks
    let edad1;
    let edad2;
    let edad3;
    let desayuno;
    let almuerzo;
    let cena;

    //Span de errores de los datos
    // let xNombre;
    // let xCorreo;
    // let xFecha;
    // let xHora;
    // let xNoches;
    // let xPersonas;
    let xSpan;
    let spans;

    //Enviar
    let enviar;

    let map = new Map();

    function init() {

        //Obtengo id de los inputs
        inputs = Array.from(document.querySelectorAll("input:not([type='button']):not([type='checkbox']):not([type='radio'])"));

        //Id de los checks
        edad1 = document.getElementById('edad1');
        edad2 = document.getElementById('edad2');
        edad3 = document.getElementById('edad3');
        desayuno = document.getElementById('desayuno');
        almuerzo = document.getElementById('almuerzo');
        cena = document.getElementById('cena');

        //Id de los spans
        spans = Array.from(document.querySelectorAll("body form span"));
        xSpan = document.getElementById('xSpan');

        //Id de boton enviar
        enviar = document.getElementById('enviar');

        //Eventos de Blur en las cajas.
        // nombre.addEventListener('blur', validarNombre);
        // correo.addEventListener('blur', validarCorreo);
        // fecha.addEventListener('blur', validarFecha);
        // hora.addEventListener('blur', validarHora);
        // noches.addEventListener('blur', validarNoches);
        // personas.addEventListener('blur', validarPersonas);
        validarBlur(); //Válido los inputs con blur de la colecction inputs.

        //Evento click del botón
        enviar.addEventListener("click", validarReserva);

    }

    //Objeto literal con los patrones
    let patron = {

        correo: [/^[\w]+@[\w]+.[\w]+$/,
            "El correo es inválido, hola@hola.com"

        ],
        hora: [/\d\d[:]\d\d$/,
            "La hora es errónea. Ejemplo: 11:40"
        ],
    }

    //Objeto tester necesario para reserva.
    let reserva = {
        //Valores por defecto con expresiones
        test(patron, valor, msg) {
            if (!patron[0].test(valor.value)) {
                msg.textContent = patron[1];
            } else
                reserva.limpiarValores(msg, xSpan);
        },
        //Limpio los valores de la reserva.
        limpiarValores(span, xSpan){
            span.textContent = "";
            xSpan.textContent = "";
        }
    };

    /**
     * Recorro mi collection de inputs, dependiendo del tipo se asocia.
     * 
     * @param {*} input acción del valor blur.
     * Activa la validación en los eventos.
     */
    function validarBlur(input){
        inputs.forEach(function(valor, indice){
            //Disparador.
            if(input === "seleccionado"){ //Lo asocio más adelante en botonReservar
                valor.addEventListener("blur", function(){
                    validarInputs(valor, indice);
                }());

            
            } else{
                valor.addEventListener("blur", function(){
                   validarInputs(valor, indice); 
                });
            }
        });
    }

    /**
     * Se encarga de validar los inputs.
     * 
     * @param {*} valor obtengo la classe de los elementos del DOM
     * @param {*} span es el indice del elemento ( se muestra mensaje.)
     */
    function validarInputs(valor, span){
        //Obtengo la clase de cada input
        if (valor.getAttribute("class")) {
            //Mi objeto tester
            reserva.test(patron[valor.getAttribute("class")], valor, spans[span]);
          }
    }
    // /**
    //  * Valido el nombre
    //  */
    // function validarNombre() {
    //     reserva.testValores(nombre, xNombre, "nombre");
    // }

    // /**
    //  * Valido las noches
    //  */
    // function validarNoches() {
    //     reserva.testValores(noches, xNoches, "noches");
    // }

    // /**
    //  * Valido las personas
    //  */
    // function validarPersonas() {
    //     reserva.testValores(personas, xPersonas, "personas");
    // }

    // /**
    //  * Valido el correo
    //  */
    // function validarCorreo() {
    //     reserva.test(patron.correo, correo, xCorreo, "correo");
    // }

    // /**
    //  * Valido la hora
    //  */
    // function validarHora() {
    //     reserva.test(patron.hora, hora, xHora, "hora");
    // }

    // /**
    //  * Valido la fecha
    //  */
    // function validarFecha() {
    //     reserva.testFecha(fecha, xFecha, "fecha");
    // }

    /**
     * Valido la edad, dependiendo de los checkeds
     */
    function validarEdad() {
        if (edad1.checked)
            return edad1.value;
        else if (edad2.checked)
            return edad2.value;
        else
            return edad3.value;
    }

    /**
     * Valido las comidas
     */
    function validarComida() {
        if (desayuno.checked)
            return desayuno.value;
        else if (almuerzo.checked)
            return almuerzo.value;
        else if (cena.checked)
            return cena.value;
        return "No hay comidas";
    }

    /**
     * Valido la reserva
     */
    function validarReserva() {
        try {
            validarNombre();
            validarCorreo();
            validarFecha();
            validarHora();
            validarNoches();
            validarPersonas();

            if (map.size > 0) {
                xSpan.textContent = "";
                map.forEach(element => {
                    element.focus();
                    throw false;
                });
            } else if (map.size === 0) {
                xSpan.textContent = "";
                try {
                    let reserva = new Reserva(
                        nombre.value,
                        correo.value,
                        new Date(fecha.value),
                        hora.value,
                        noches.value,
                        personas.value,
                        validarEdad(),
                        validarComida()
                    );
                    reserva.mostrar();
                } catch (e) {
                    xSpan.textContent = e.message;
                }
            }
        } catch (e) {}
    }
    window.addEventListener('load', init);
}