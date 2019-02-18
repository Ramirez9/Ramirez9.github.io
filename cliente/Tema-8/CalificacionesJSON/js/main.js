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

        let contador;

        $("input[type=button]").click(function () {
            let arrayHabilidades = [];
            $("ul").css("display", "none");
            let $id = $(this).attr("id");
            switch ($id) {
                case "boton1":
                    contador = 0;
                    ficheroJson(contador, arrayHabilidades, "#lista1", "habilidades");
                    break;
                case "boton2":
                    contador = 1;
                    ficheroJson(contador, arrayHabilidades, "#lista2", "perfiles");
                    break;
                case "boton3":
                    contador = 2;
                    ficheroJson(contador, arrayHabilidades, "#lista3", "tipos");
                    break;
                default:
                    break;
            }
        });

    }
    function coloAleatorio() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
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
            arrayHabilidades.push("<li style=\"display: none\" title=\" " + valor + "\"> <input type=\"checkbox\">" + "<b>" + clave + "</b></li>");
        });
        $(msg).html(arrayHabilidades);

        $("div").click(function hola() {
            let $id = $(this).attr("id");
            console.log($id)
            switch ($id) {
                case "0":
                    $("li:nth-of-type(1), li:nth-of-type(2), li:nth-of-type(3), li:nth-of-type(4)," + 
                    "li:nth-of-type(5), li:nth-of-type(6) , li:nth-of-type(7) , li:nth-of-type(8) ,"+
                    "li:nth-of-type(9), li:nth-of-type(10)").toggle(1000).css({"color": coloAleatorio, "text-shadow": "2px 0 0 #000,"+ 
                    "-2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,"+
                    "1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000"});
                    break;
                case "1":
                    $("li:nth-of-type(1), li:nth-of-type(2), li:nth-of-type(3), li:nth-of-type(4),"+
                     "li:nth-of-type(5)").toggle(2000).css({"color": coloAleatorio, "text-shadow": "2px 0 0 #000,"+ 
                     "-2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,"+
                     "1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000"});
                    break;
                case "2":
                    $("li:nth-of-type(1), li:nth-of-type(2)," +
                    "li:nth-of-type(3)").toggle(500).css({"color": coloAleatorio, "text-shadow": "2px 0 0 #000,"+ 
                    "-2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,"+
                    "1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000"});
                    break;
                case "3":
                    $("li:nth-of-type(4), li:nth-of-type(5), li:nth-of-type(6) , li:nth-of-type(7) , li:nth-of-type(8),"+ 
                     "li:nth-of-type(9)").toggle(3000).css({"color": coloAleatorio, "text-shadow": "2px 0 0 #000,"+ 
                     "-2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,"+
                     "1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000"});
                    break;
                case "4":
                    $("li:nth-of-type(10)").toggle(1500).css({"color": coloAleatorio, "text-shadow": "2px 0 0 #000,"+ 
                    "-2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,"+
                    "1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000"});
                    break;
                default:
                    break;
            }
        })
    }

    /**
     * Obtengo el fichero json y muestro su cabecera
     * @param {*} arrayHabilidades 
     * @param {*} msg 
     * @param {*} json 
     */
    function ficheroJson(contador, arrayHabilidades, msg, json) {
        $.getJSON("json/" + json + ".json", function (data) {
            $.each(data, function (index, value) {
                arrayHabilidades.push("<div id=" + contador++ + ">" + "<h2>" + index + "</h2>");
                mensaje(value, arrayHabilidades, msg);
            });
        });
    }
    $(init)
}