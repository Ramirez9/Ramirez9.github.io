<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File:calendarioFestivosRojo.php
     * Description: Calendario colocan festivos y dia actual en verde.
     */
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}
?>


<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendario</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="Francisco Ramírez Ruiz">

    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <noscript><h1>Se requiere javascript</h1></noscript>
    
    <h2>Calendario</h2>


    <?php

        $diaElegido = 02;
        $mes = 10; //Mes elegido
        $anio = 2018;  //Añoo elegido
        $numeroDias = 31; //Número del mes elegido

       

        $primerDia = 1; //Primer dia del mes.
        
        $dia = 1; 
        $diaActual = date("j");
        $mesActual = date("n");

        echo "
                <table style='border: double; margin: 20px auto'>
                    <tr>
                        <td >Lunes</td>
                        <td >Martes</td>
                        <td >Miércoles</td>
                        <td >Jueves</td>
                        <td >Viernes</td>
                        <td >Sábado</td>
                        <td >Domingo</td>
                    </tr>
                
            ";


        while ($dia <= $numeroDias) {
            echo "<tr>";

            for ($j = 0; $j < 7; $j++) {
                if ($dia == $numeroDias + 1) {
                    break;
                } else if ($dia == $diaActual && $mes == $mesActual ) {
                    echo "<td style=' background-color: green'>" . $dia++ . "</td>";
                } else if ($j == 6) {
                    echo "<td style=' background-color: red'>" . $dia++ . "</td>";
                } else {
                    echo "<td>" . $dia++ . "</td>";
                }

            }

            echo "</tr>";
        }

        echo "</table>";
    
    ?>

    <a href="../../servidor/Tema-3/calendarioFestivosRojo.php?codigo" target ="_blank">Ver código</a>

</div>
</body>
</html>