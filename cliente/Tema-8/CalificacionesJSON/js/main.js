/**
 * 
 * Entrega un ejemplo donde utilices el formato JSON

 * Implementa dos versiones: directamente con javaScrip y con jQuery.getJSON().

 * Para ello implementa una página con tres botontones donde descargues y muestres, según el botón:

 * Habilidades para la vida y una breve descripción.
 * Perfiles IT más demandados y una breve descripción
 * Tipos de desarrolladores web y una lista de habilidades
 * o https://www.eoi.es/blogs/madeon/2013/05/21/habilidades-y-destreza-en-una-persona/
 * o https://es.wikipedia.org/wiki/Habilidades_para_la_vida
 * o https://www.observatoriorh.com/orh-posts/los-5-perfiles-it-mas-demandados-en-las-empresas-espanolas.html
 * o https://www.campusmvp.es/recursos/post/Desarrollador-web-Front-end-back-end-y-full-stack-Quien-es-quien.aspx
 *
 * @author Francisco Ramírez Ruiz
 * @version 1.0
 */
{
    function init() {

        $("input[type=button]").click(function () {
            let arrayHabilidades = [];
            $("ul").css("display", "none");
            let $id = $(this).attr("id");
            switch ($id) {
                case "boton1":
                    habilidades(arrayHabilidades, "#lista1", "habilidades");
                    break;
                case "boton2":
                    perfiles(arrayHabilidades, "#lista2", "perfiles");
                    break;
                case "boton3":
                    tipos(arrayHabilidades, "#lista3", "tipos");
                    break;
                default:
                    break;
            }

        });

    }

    /**
     * Obtengo elementos de habilidades.json
     */
    function habilidades(arrayHabilidades, msg, json) {
        ficheroJson(arrayHabilidades, msg, json);
    }
    /**
     * Obtengo elementos de perfiles.json
     */
    function perfiles(arrayHabilidades, msg, json) {
        ficheroJson(arrayHabilidades, msg, json);
    }

    /**
     * Obtengo elementos de tipos.json
     */
    function tipos(arrayHabilidades, msg, json) {
        ficheroJson(arrayHabilidades, msg, json);
    }
    /**
     * Recorro el array y muestro en una lista
     * @param {*} data 
     * @param {*} arrayHabilidades 
     * @param {*} msg 
     */
    function mensaje(data, arrayHabilidades, msg) {
        $(msg).css("display", "block");
        $.each(data, function (clave, valor) {
            arrayHabilidades.push("<li>" + "<b>" + clave + "</b>" + ": " + valor + "</li>");
        });
        $(msg).html(arrayHabilidades);
    }

    /**
     * Obtengo el fichero json y muestro su cabecera
     * @param {*} arrayHabilidades 
     * @param {*} msg 
     * @param {*} json 
     */
    function ficheroJson(arrayHabilidades, msg, json) {
        $.getJSON("json/" + json + ".json", function (data) {
            $.each(data, function (index, value) {
                arrayHabilidades.push("<h2>" + index + "</h2>");
                mensaje(value, arrayHabilidades, msg);
            });
        });
    }
    $(init)
}