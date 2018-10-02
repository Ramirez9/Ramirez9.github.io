<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File: calcularEdad.php
     * Description: Cargar fecha de nacimiento en una variable y calcular la edad.
     */
    
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}
?>
<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcular la Edad.</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="Francisco Ramírez Ruiz">
    
    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <noscript><h1>Se requiere javascript</h1></noscript>

    <h2>Ejercicio sobre mi edad!</h2>
    <?php

    //La fecha actual del sistema
    $diaAcutal = date("j");
    $mesActual = date("n");
    $anioActual = date("Y");

    //Fecha de nacimiento

    $dia = 11;
    $mes = 01;
    $anio = 1997;

    //Mismo mes, pero no ha llegado el día.

    if(($mes == $mesActual) && ($dia > $diaActual)){
        $anioActual = ($anioActual - 1);
    }

    //Si mi mes es mayor que el actual.
    if ($mes > $mesActual){
        $anioActual = ($anioActual - 1);
    }

    $edad = ($anioActual - $anio);

    echo "<h2> Mi edad es: ". $edad . "</h2>";
    ?>

    <a href="../../servidor/Tema-2/calcularEdad.php?codigo" target ="_blank">Ver código</a>
</body>
</html>