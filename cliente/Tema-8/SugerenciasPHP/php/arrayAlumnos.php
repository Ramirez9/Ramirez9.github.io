
<?php
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
$alumnos = [
    "Francisco Ramírez", "Angelo Barbara",
    "Guillermo Boquizo ", "Javier González",
    "Jesús Mejías", "José Bravo",
    "Chema Romero", "José Álvarez",
    "Marcos Gallardo", "Mario Navarro",
    "Rafa Sojo", "Rafa García ",
    "Samueeh"
    ];



//Obtengo el valor del input del archivo main.js
$valorInput = $_REQUEST["valorInput"];

$cadena = "";

if ($valorInput !== "") {
    $valorInput = strtolower($valorInput); //Admito minñusculas, para no ser sensible
    $longitud=strlen($valorInput); //Obtengo longitud del string
    foreach($alumnos as $alumno) {
        if (stristr($valorInput, substr($alumno, 0, $longitud))) {
            if ($cadena === "") {
                $cadena = $alumno;
            } else {
                $cadena .= ", $alumno";
            }
        }
    }
}
//Ternario mensaje salida
echo $cadena === "" ? "No hay coincidencias" : $cadena;
?>