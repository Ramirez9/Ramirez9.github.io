/**
 * 
 * Creación de un plugin para la validación de un formulario.
 * 
 * @author Francisco Ramírez Ruix
 */

(function ($) {
    /**
     * Plugin denominado examen
     * 
     * @param {*} opciones 
     */
    jQuery.fn.examen = function (opciones) {

        let elementoFocus = new Map();

        //Patrones de las expresiones por defecto.
        let defaultExpresiones = {
            nombre: [/^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,20}$/, "Mínimo 3 caracteres para el nombre."],
            apellido: [/^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,20}$/, "Mínimo 3 caracteres para el apellido."],
            email: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, "Correo inválido. Ejemplo:examen@exm.c"],
        }

        // opciones por defecto
        let defaultOpciones = $.extend({
            css: {
                "color": "#ff0000",
                "backgroundcolor": "#ffDEDE",
                "border": "2px solid #ffD3D7"
            },
            //Expresiones estándar del plugin
            expresiones: defaultExpresiones,

        }, opciones);

        //Obtengo todos los inputs que no sean submit ( botón enviar ) y textarea.
        let $inputs = $("input:not([type='submit']), select, option", $(this));

        $(this).submit(function (event) {

            event.preventDefault();
            $inputs.blur();
            if(elementoFocus.size === 0){
                console.log("correcto");
                /**
                 * let mensaje = "";
                 * $inputs.each(function (indice, valor) {
                 * mensaje += $(valor).attr("tipo") + " --> " + $(valor).val() + "\n";
                 * 
                 * });
                 * $("textarea").text(mensaje);
                 */
                $.ajax({
                    url: "autor.txt", 
                    success: function(result){
                        $("textarea").text(result);
                  }});
            }
            else{
                console.log(elementoFocus);
                //Con next paso al siguiente elemento.
                console.log(elementoFocus.values())
                console.log(elementoFocus.values().next()) //false
                console.log(elementoFocus.value) //Undefined
                console.log(elementoFocus.values().next().value.focus()) // jQuery.fn.init [input#nombre]
                elementoFocus.values().next().value.focus();
                $("textarea").text("");
            }
        });

        /*
         * Asocio a los inputs el evento blur.
         * Obtengo el elemento tipo del html
         */
        $inputs.on("blur", function () {
            if (!defaultOpciones.expresiones[$(this).attr("tipo")][0].test($(this).val())) {

                $(this).css({
                    color: defaultOpciones.css.color,
                    background: defaultOpciones.css.backgroundcolor,
                    border: defaultOpciones.css.border
                });
                //Si hay blur guardo en el map
                elementoFocus.set($(this).attr("tipo"), $(this));

                /**
                 * Si está correcto al quitar blur
                 */
            } else {
                $(this).css({
                    color: "initial",
                    background: "initial",
                    border: "initial"
                });
                //Sino, elimino del map
                elementoFocus.delete($(this).attr("tipo"));
            }
        });

        /*
         * Cuando hago focus sobre un elemento
         * Vuelvo a obtener sus valores de por defecto
         * del HTML
         */
        $inputs.on("focus", function () {
            $(this).css({
                color: "initial",
                background: "initial",
                border: "initial"
            });
        });
    };
    // return this;

})(jQuery)