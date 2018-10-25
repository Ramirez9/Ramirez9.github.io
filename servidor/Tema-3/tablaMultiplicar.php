<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File: tablaMultiplicar.php
     * Description: Genera la tabla de multiplicar del 1 al 10.
     */
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}
?>

<?php include 'top.php' ?>

<div><h2>Tabla de multiplicar</h2></div>
    <?php


    //generamos para las 10 tablas.
    for ($tabla=1; $tabla<=10 ; $tabla++) { 
        echo "<h3> Tabla del " . $tabla . "</h3>";

        for ($i=1; $i <= 10; $i++) { 
            echo $tabla . " x " . $i . " = " . ($tabla*$i) . "</br>";
        }
    }
    ?>
    <h1> <a href="../../servidor/Tema-3/tablaMultiplicar.php?codigo" target ="_blank">Ver código</a></h1>
   
   
    <?php include 'bot.php' ?>