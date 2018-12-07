/**
 * Formulario completito
 * Crea un formulario con todos los tipos de controles y realiza todas las validaciones posibles mediante JavaScript.
 * Utiliza el modelo de registro avanzado de eventos según W3C (addEventListener), así como las expresiones regulares.
 *
 * Asegúrate de validar lo siguiente:
 * Obligatoriedad (campo de texto, opción seleccionada (checkbox, radio button y selección)
 * Tipo de dato introducido (numérico...)
 * Dirección de correo válida
 * Número de DNI válido
 * Fecha válida
 * Número de teléfono
 * Número de cuenta corriente
 * URL
 * Asegúrate de que:
 *
 * Al perder el foco de cada control se comprueba su validación.
 * Los errores los muestras mediante css.
 * Al enviar el formulario se realizan TODAS LAS VALIDACIONES, yéndose el foco al primer error.
 * Procura aislar las validaciones del interfaz del usuario (arquitectura de tres capas)
 * 
 * @author Francisco Ramírez Ruiz
 */

{
    //Declaro las variables de los inputs.
    let nombre, dni, email, url, cuenta, telefono, fecha;

    //Declaro sus respectivos span para los errores.
    let xNombre, xDni, xEmail, xUrl, xCuenta, xTelefono, xFecha;

    //Botón de enviar
    let envia;

    //Mensaje de error
    let msgNew;

    let map = new Map();

    /**
     * Expresiones regulares para validar.
     */
    let regex = {
        nombre: [
            /^([A-Z][a-z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
            "Comienza por mayúsculas, al menos nombre y apellido"
        ],
        dni: [
            /[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]/i,
            "Formato válido 12345678Z"
        ],
        email: [
            /[\w]+@{1}[\w]+\.[a-z]{2,3}/i,
            "Formato de email no válido"
        ],
        cuenta: [
            /[/\d]{10}/,
            "La cuenta corriene es de mínimo 10 números"
        ],
        telefono: [
            /[9|6]{1}([\d]{2}[-]*){3}[\d]{2}/,
            "ERROR: Ejemplo 667123415"
        ],
        url: [
            /http[s]?:\/\/[\w]+([\.]+[\w]+)+/,
            "ERROR: https://hola.com"
        ],
        fecha: [
            /\d\d([-/ ])\d\d([-/ ])\d\d\d\d/,
            "Formatos válidos: 11/12/2018, 11 12 2018, 11-12-2018"
        ]

    };

    function init() {

        //Obtengo los respectivos ids de los inputs
        nombre = document.getElementById('nombre');
        dni = document.getElementById('dni');
        email = document.getElementById('email');
        url = document.getElementById('url');
        cuenta = document.getElementById('cuenta');
        telefono = document.getElementById('telefono');
        fecha = document.getElementById('fecha');

        //Obtengo los respectivos ids de los span
        xNombre = document.getElementById('xNombre');
        xDni = document.getElementById('xDni');
        xEmail = document.getElementById('xEmail');
        xUrl = document.getElementById('xUrl');
        xCuenta = document.getElementById('xCuenta');
        xTelefono = document.getElementById('xTelefono');
        xFecha = document.getElementById('xFecha');

        //Obtengo el id de enviar
        envia = document.getElementById('envia');

        //Mensaje nuevo para informar.
        msgNew = document.getElementById('newMsg');

        //Añado los eventos de perder el foco 'blur'
        nombre.addEventListener('blur', validarNombre);
        dni.addEventListener('blur', validarDni);
        email.addEventListener('blur', validarEmail);
        url.addEventListener('blur', validarUrl);
        cuenta.addEventListener('blur', validarCuenta);
        telefono.addEventListener('blur', validarTelefono);
        fecha.addEventListener('blur', validarFecha);

        envia.addEventListener("click", function (event) {
            event.preventDefault();
            validarFormulario();
        });
    }

    function validarNombre() {

        let regexN = new RegExp(regex.nombre[0]);

        if (!regexN.test(nombre.value)) {
            map.set("nombre", nombre);
            xNombre.textContent = regex.nombre[1];
        } else {
            if (map.has("nombre"))
                map.delete("nombre");

            xNombre.textContent = "";
        }
    }

    function validarDni() {

        let regexD = new RegExp(regex.dni[0]);

        if (!regexD.test(dni.value)) {
            map.set("dni", dni);
            xDni.textContent = regex.dni[1];
        } else {
            if (map.has("dni"))
                map.delete("dni");

            xDni.textContent = "";
        }

    }

    function validarEmail() {

        let regexE = new RegExp(regex.email[0]);

        if (!regexE.test(email.value)) {
            map.set("email", email);
            xEmail.textContent = regex.email[1];
        } else {
            if (map.has("email"))
                map.delete("email");

            xEmail.textContent = "";
        }
    }

    function validarUrl() {
        let regexU = new RegExp(regex.url[0]);

        if (!regexU.test(url.value)) {
            map.set("url", url);
            xUrl.textContent = regex.url[1];
        } else {
            if (map.has("url"))
                map.delete("url");

            xUrl.textContent = "";
        }
    }

    function validarCuenta() {

        let regexC = new RegExp(regex.cuenta[0]);

        if (!regexC.test(cuenta.value)) {
            map.set("cuenta", cuenta);
            xCuenta.textContent = regex.cuenta[1];
        } else {
            if (map.has("cuenta"))
                map.delete("cuenta");

            xCuenta.textContent = "";
        }
    }

    function validarTelefono() {

        let regexT = new RegExp(regex.telefono[0]);

        if (!regexT.test(telefono.value)) {
            map.set("telefono", telefono);
            xTelefono.textContent = regex.telefono[1];
        } else {
            if (map.has("telefono"))
                map.delete("telefono");

            xTelefono.textContent = "";
        }
    }

    function validarFecha() {

        let regexF = new RegExp(regex.fecha[0]);

        if (!regexF.test(fecha.value)) {
            map.set("fecha", fecha);
            xFecha.textContent = regex.fecha[1];
        } else {
            if (map.has("fecha"))
                map.delete("fecha");

            xFecha.textContent = "";
        }
    }

    function validarFormulario() {

        if (
            nombre.value === "" ||
            email.value === "" ||
            cuenta.value === "" ||
            fecha.value === "" ||
            telefono.value === "" ||
            url.value === ""
        ) {
            msgNew.textContent = "Por favor rellene el formulario";
            map.forEach(element => {
                element.focus();
                throw false;
            });
        } else {
            if (map.size === 0) {
                msgNew.textContent = "Formulario correcto";
            } else {
                msgNew.textContent = "";
                map.forEach(element => {
                    element.focus();
                });
            }
        }
    }
    window.addEventListener('load', init);
}