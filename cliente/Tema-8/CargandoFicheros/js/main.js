/**
 * Página html con una caja de texto donde se indica una url que vas a descargar del servidor. Inicialmente aparecerá la propia página
 * Al pulsar el botón "mostrar" mostrará el fichero en un scroller
 * En un div debe mostrarse en todo momento el estado en el que se encuentra la petición AJAX, indicando tanto el valor numérico como su descripción ("No inicializada", "Abierta"... "Completada") (readyState)
 * También se mostrará el código y texto del estado de la respuesta del servidor en otro div (status y statusText)
 * Utiliza estilos y diseña la página de forma equilibrada.
 * En la misma ruta, deja un fichero index2.html para probar la carga de otros ficheros
 * 
 * @author Francisco Ramírez Ruiz
 * @version 1.0
 */

function init() {

    let URLactual = jQuery(location).attr('href');
    $("#url").val(URLactual);

    $("#mostrar").click(function () {
        let cadena = "";
        let url = "index2.html" //URLactual
        $.get({
                url: url,
                cache: "false",

                error: function () {
                    cadena = "No Inicializada";
                    $("#estado").val(cadena);
                },
                success: function (data) {
                    cadena += ", Éxito"
                    $("#estado").val(cadena);
                    $("#scroller").text(data);
                },
                complete: function () {
                    cadena += ", Completada"
                    $("#estado").val(cadena);
                },
                beforeSend: function () {
                    cadena = "Antes de enviar";
                    $("#estado").val(cadena);
                }


            }).done(function () {
                cadena += ", Realizado (done)"
                $("#estado").val(cadena);
            })
            .fail(function () {
                cadena += ", Fallo (fail)"
                $("#estado").val(cadena);
            })
            .always(function () {
                cadena += ", Finalizado (always)"
                $("#estado").val(cadena);
            })

            $("#url").val(url);

    });
}

$(init)