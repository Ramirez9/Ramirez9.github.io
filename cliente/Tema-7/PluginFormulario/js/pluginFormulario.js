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
        //Creo un array para añadir los elementos a focusear, guardo elemento JQuery
        let $elementoFocus = [];

        //Patrones de las expresiones por defecto.
        let defaultExpresiones = {
            nombre: [/^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,20}$/, "Mínimo 3 caracteres para el nombre."],
            apellido: [/^[a-zA-Zñúíóáé]{3,}([ ][a-zA-Zñúíóáé]{3,}){0,20}$/, "Mínimo 3 caracteres para el apellido."],
            email: [/^[a-zA-Zñ]{1,10}([.][a-zA-Zñ]{1,10}){0,3}[@][a-z]{1,6}([\.][a-z]{1,4}){1,4}$/, "Correo inválido. Ejemplo:examen@exm.c"],
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

        //Guardo las variables de color, background y border para resetearlas
        let $colorInitial = $inputs.css("color");
        let $backgroundInitial = $inputs.css("background-color");
        let $borderInitial = $inputs.css("border");


        $(this).submit(function (event) {
            event.preventDefault();
            $elementoFocus = []; // Vacío el array para volver al top de los elementos
            $inputs.blur();
            
            if($elementoFocus.length === 0){
                $.get({
                    url: "autor.txt", 
                    success: function(result){
                        $("textarea").text(result);
                  }});
            }
            else{
                //Recorro elemento desde el inicio para seleccionar el primero Foco.
                $elementoFocus[0].focus();
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
                $elementoFocus.push($(this));

                /**
                 * Si está correcto al quitar blur
                 */
            } else {
                $(this).css({
                    color: $colorInitial,
                    background: $backgroundInitial,
                    border: $borderInitial
                });
            }
        });
    };
    return this;

})(jQuery)