<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File: tableroBarcos.php
     * Description: Tablero para jugar al juego de los barcos.
     */
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}

    
?>
<?php include 'top.php'?>
    <?php
    $letra = array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L" ,"M", "N");

    echo "<table style='border: 5px solid; '>";


    echo "<td></td>";

    //Muestra la fila de números del 1 al 10.
    for ($i = 0; $i <= 14; $i++) {
        echo "<td style='border: 1px solid;'>" . $i . "</td>";
    }


    for ($i = 0; $i < count($letra); $i++) {
        echo "<tr>";
        echo "<td style='border: 1px solid; '>" . $letra[$i] . "</td>";
        for ($j = 0; $j <= 14; $j++) {
            echo "<td>" . $letra[$i] . $j . "</td>";
        }
        echo "</tr>";
    }

    echo "</table>"
    ?>
     <h1><a href="../../servidor/Tema-3/tableroBarcos.php?codigo" target ="_blank">Ver código</a></h1>
<?php include 'bot.php'?>