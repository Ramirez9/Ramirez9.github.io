<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paleta de colores</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="Francisco Ramírez Ruiz">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <noscript><h1>Se requiere javascript</h1></noscript>

    <h2>Paleta de colores</h2>

    <?php
    /**
     * User: Francisco Ramírez Ruiz
     * File:paletaColores.php
     * Description: Paleta de colores
     */

    //Creamos una tabla para almacenarlos
    //los colores tienen 3 combinaciones con RGB
    $color = "";
    echo "<table style='margin: 0 auto;  border-spacing: 4px'>";
    for ($i = 0; $i < 300; $i += 100) {
        for ($j = 0; $j < 300; $j += 100) {

            echo "<tr>";

            for ($k = 0; $k < 300; $k += 10) {
                $color = "rgb($i,$j,$k)";
               
                echo "<td style=\"background-color:$color\"; ><p style= \"color:$color\";>color</p></td>";
            }
    echo "</tr>";
        }
    }

    echo "</table>";
    
    ?>
</body>
</html>