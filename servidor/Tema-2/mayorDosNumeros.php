<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File: mayorDosNumeros.php
     * Description: Carga en dos números en variables y escribir el mayor de ellos
     */
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}
?>
<?php include 'top.php'?>
    <?php

    $num1 = 6;
    $num2 = 9;
    echo "<h2> Los dos números elegidos son: $num1 y $num2 </h2>";
    if($num1 >$num2){
        echo " El número mayor es $num1";
    }else if ($num1 < $num2){
        echo " El número mayor es $num2";
    }else{
        echo "Son iguales.";
    }
    ?>
    <h1><a href="../../servidor/Tema-2/mayorDosNumeros.php?codigo" target ="_blank">Ver código</a></h1>
<?php include 'bot.php'?>