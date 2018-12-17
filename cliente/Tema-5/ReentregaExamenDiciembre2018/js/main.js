/**
 * Reentrega del examen de diciembre de 2018
 * 
 * Clase main.js
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    // Declaro las variables necesarias
    let nombre;
    let correo;
    let fecha;
    let hora;
    let noches;
    let personas;

    // Variables checks
    let edad1;
    let edad2;
    let edad3;
    let desayuno;
    let almuerzo;
    let cena;

    //Span de errores de los datos
    let xNombre;
    let xCorreo;
    let xFecha;
    let xHora;
    let xNoches;
    let xPersonas;
    let xSpan;

    //Enviar
    let enviar;

    let map = new Map();

    function init() {

        //Obtengo id de los inputs
        nombre = document.getElementById('nombre');
        correo = document.getElementById('correo');
        fecha = document.getElementById('fecha');
        hora = document.getElementById('hora');
        noches = document.getElementById('noches');
        personas = document.getElementById('personas');

        //Id de los checks
        edad1 = document.getElementById('edad1');
        edad2 = document.getElementById('edad2');
        edad3 = document.getElementById('edad3');
        desayuno = document.getElementById('desayuno');
        almuerzo = document.getElementById('almuerzo');
        cena = document.getElementById('cena');

        //Id de los spans
        xNombre = document.getElementById('xNombre');
        xCorreo = document.getElementById('xCorreo');
        xFecha = document.getElementById('xFecha');
        xHora = document.getElementById('xHora');
        xNoches = document.getElementById('xNoches');
        xPersonas = document.getElementById('xPersonas');
        xSpan = document.getElementById('xSpan');

        //Id de boton enviar
        enviar = document.getElementById('enviar');

        //Eventos de Blur en las cajas.
        nombre.addEventListener('blur', validarNombre);
        correo.addEventListener('blur', validarCorreo);
        fecha.addEventListener('blur', validarFecha);
        hora.addEventListener('blur', validarHora);
        noches.addEventListener('blur', validarNoches);
        personas.addEventListener('blur', validarPersonas);

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

    //Objeto literal de la reserva a validar.
    let reserva = {
        //Controlo los valores de noches y personas
        testValores(valor, msg, key) {
            map.set(key, valor);
            if (valor.value === "")
                msg.textContent = "El valor no puede ser nulo";
            else if(valor.value <= 0)
                msg.textContent = "Mínimo 1";
            else
                limpiarValores(key, msg, xSpan);

        },
        //Valores por defecto con expresiones
        test(patron, valor, msg, key) {
            if (!patron[0].test(valor.value)) {
                map.set(key, valor);
                msg.textContent = patron[1];
            } else
                limpiarValores(key, msg, xSpan);
        },
        //Valor de la fecha
        testFecha(valor, msg, key) {
            let fecha = Date.parse(valor.value);
            if (isNaN(fecha)) {
                map.set(key, valor);
                msg.textContent = "La fecha no puede ser nula";
            } else
                limpiarValores(key, msg, xSpan);
        }
    };

    /**
     * Valido el nombre
     */
    function validarNombre() {
        reserva.testValores(nombre, xNombre, "nombre");
    }

    /**
     * Valido las noches
     */
    function validarNoches() {
        reserva.testValores(noches, xNoches, "noches");
    }

    /**
     * Valido las personas
     */
    function validarPersonas() {
        reserva.testValores(personas, xPersonas, "personas");
    }

    /**
     * Valido el correo
     */
    function validarCorreo() {
        reserva.test(patron.correo, correo, xCorreo, "correo");
    }

    /**
     * Valido la hora
     */
    function validarHora() {
        reserva.test(patron.hora, hora, xHora, "hora");
    }

    /**
     * Valido la fecha
     */
    function validarFecha() {
        reserva.testFecha(fecha, xFecha, "fecha");
    }

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
     * Limpio los valores de los inputs
     * @param {*} key 
     * @param {*} msg 
     * @param {*} xSpan 
     */
    function limpiarValores(key, msg, xSpan) {
        if (map.has(key))
            map.delete(key);
        msg.textContent = "";
        xSpan.textContent = "";
    };

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