/**
 * Página html con un input 
 * Conforme se introduzca texto, se buscarán las coincidencias en un array php que contendrá los nombres de los compañeros del módulo (introduce nombre y apellidos, para ver más coincidencias, de al menos 10 compañeros)
 * Las sugerencias (coincidencias en el array) se mostrarán.
 * En caso de no haber coincidencia, se mostrará el mensaje "No hay coincidencias" 
 * 
 * Responde a las siguientes preguntas: 
 * ¿Cómo se trata el envío de una parámetro a php?.Indica todos los pasos (html, javascript, php) 
 * Atributo donde se recibe la respuesta 
 * 
 * @author Francisco Ramírez Ruiz
 * @version 1.0
 */

function init() {
    $("#buscador").keyup(function(str) {
        let valorInput = $('#buscador').val();
            if (str.length == 0) { 
            $("#sugerencia").text("");
            console.log("Estoy vacío")
            return;
        } else {
            $.get({
                url: ("php/arrayAlumnos.php?q=" + str),
                data:{"valorInput":valorInput},
                cache:"false",
                success: function (response) {
                    console.log(str);
                    console.log("Mostando cadena")
                    $("#sugerencia").text(response);
                }
            })
        } 
    });
}

$(init)