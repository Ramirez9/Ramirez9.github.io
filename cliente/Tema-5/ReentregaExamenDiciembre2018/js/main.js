/**
 * Reentrega del examen de diciembre de 2018
 * 
 * Clase main.js
 * 
 * @author Francisco Ramírez Ruiz
 */
{

    // Declaro las variables necesarias
    let inputs;
    let xSpan;
    let spans;
    let enviar;

    // Variables checks
    let edad1;
    let edad2;
    let edad3;
    let desayuno;
    let almuerzo;
    let cena;


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
        xSpan = document.getElementById('xSpan'); //Muestro error de fecha no calculable.

        //Id de boton enviar
        enviar = document.getElementById('enviar');

        validarBlur(); //Válido los inputs con blur de la colecction inputs.

        //Evento click del botón
        enviar.addEventListener("click", validarReserva);

    }

    //Objeto literal con los patrones
    let patron = {

        //Expresión reuglar nombre y apellido
        nombre: [/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/,
            "El nombre es erróneo. Ejemplo: Francisco Ramírez"
        ],

        //Expresión reuglar correo electrónico
        correo: [/^[\w]+@[\w]+.[\w]+$/,
            "El correo es inválido, hola@hola.com"
        ],

        //Expresión regular fecha
        fecha: [
            /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/,
            "El formato debe ser YYYY/MM/DD"
        ],

        //Expresión regular hora
        hora: [/\d\d[:]\d\d$/,
            "La hora es errónea. Ejemplo: 11:40"
        ],

        //Expresión regular noches
        noches: [/^[1-9]{1,}$/,
            "El número de noches es inválido"
        ],

        //Expresión regular personas
        personas: [/^[1-9]{1,}$/,
            "El número de personas es inválido"
        ]

    }

    //Objeto tester necesario para reserva.
    let reserva = {
        //Valores por defecto con expresiones
        test(patron, valor, msg) {
            let regex = new RegExp(patron[0]);
            if (!regex.test(valor.value)) {
                msg.textContent = patron[1];
            } else
                reserva.limpiarValores(msg, xSpan);
        },
        //Limpio los valores de la reserva.
        limpiarValores(span, xSpan) {
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
    function validarBlur(input) {
        inputs.forEach(function (valor, indice) {
            //Disparador.
            if (input === "seleccionado") { //Lo asocio más adelante en botonReservar
                valor.addEventListener("blur", function () {
                    validarInputs(valor, indice);
                }());


            } else {
                valor.addEventListener("blur", function () {
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
    function validarInputs(valor, span) {
        //Obtengo la clase de cada input
        if (valor.getAttribute("class")) {
            //Mi objeto tester
            reserva.test(patron[valor.getAttribute("class")], valor, spans[span]);
        }
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
     * Obtengo un array con los indices
     * de los spans
     */
    function indiceErrones() {
        let inputErroneos = [];
        spans.forEach((valor, indice) => {
            if (valor.textContent !== "")
                inputErroneos.push(indice)
        });
        return inputErroneos;
    }

    /**
     * Valido la reserva
     */
    function validarReserva() {
        //Activo el disparador.
        validarBlur("seleccionado");

        //Recorro el array y NO hago uso del map
        if (indiceErrones().length > 0) {
            inputs[indiceErrones()[0]].focus();
            return;
        }

        //Vacio el span global.
        //Muestra el error de fecha.
        xSpan.textContent = "";

        try {
            let reserva = new Reserva(
                //Se asocian en el orden de clase reserva.
                inputs[0].value,
                inputs[1].value,
                new Date(inputs[2].value),
                inputs[3].value,
                inputs[4].value,
                inputs[5].value,
                validarEdad(),
                validarComida()
            );
            reserva.mostrar(); //Mustro los datos
        } catch (e) {
            xSpan.textContent = e.message;
        }
    }
    window.addEventListener('load', init);
}