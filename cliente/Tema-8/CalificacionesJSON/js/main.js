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

    $("#boton1").click(function() {
        console.log("prueba");
        $.getJSON( "json/habilidades.json", function( data ) {
            $( "#lista1").css("display", "block");
            let arrayHabilidades = [];
            $.each( data, function( clave, valor ) {
                arrayHabilidades.push( "<li id='" + clave + "'>" + valor + "</li>" );
            });
            $( "#lista1").html(arrayHabilidades);

          });
    });

    $("#boton2").click(function() {
        console.log("prueba");
        $.getJSON( "json/perfiles.json", function( data ) {
            $( "#lista2").css("display", "block");
            let arrayHabilidades = [];
            $.each( data, function( clave, valor ) {
                arrayHabilidades.push( "<li id='" + clave + "'>" + valor + "</li>" );
            });
            $( "#lista2").html(arrayHabilidades);

          });
    });

}

$(init)

}