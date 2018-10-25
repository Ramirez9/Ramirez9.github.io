<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File:paletaColores.php
     * Description: Paleta de colores
     */
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}
?>
<?php include 'top.php'?>
<div><h2>Paleta de colores</h2></div>
    <?php


    //Creamos una tabla para almacenarlos
    //los colores tienen 3 combinaciones con RGB
    $color = "";
    echo "<table style='margin: 0 auto;  border-spacing: 4px'>";
    for ($i = 0; $i < 300; $i += 120) {
        for ($j = 0; $j < 300; $j += 120) {

            echo "<tr>";

            for ($k = 0; $k < 300; $k += 24) {
                $color = "rgb($i,$j,$k)";
                $hex = "#";
                $hex .= dechex($i);
                $hex .= dechex($j);
                $hex .= dechex($k);
                echo "<td style=\"background-color:$color\">$hex</td>";
               
            }
    echo "</tr>";
        }
    }

    echo "</table>";
    
    ?>
    <h1> <a href="../../servidor/Tema-3/paletaColores.php?codigo" target ="_blank">Ver código</a></h1>
   
<?php  include 'bot.php'?>