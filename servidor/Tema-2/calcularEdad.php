<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File: calcularEdad.php
     * Description: Cargar fecha de nacimiento en una variable y calcular la edad.
     */
    
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}
?>
<?php include 'top.php'?>

<h2>Edad</h2>
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

    echo "<h3> Mi edad es: ". $edad . "</h3>";
    ?>

    <h1>
    <a href="../../servidor/Tema-2/calcularEdad.php?codigo" target ="_blank">Ver código</a>

    </h1>
<?php include 'bot.php'?>