<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File: estacionAnio.php
     * Description: Cabecera en funcion de la estacion del año
     */
if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}
?>
<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estación del Año</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="Francisco Ramírez Ruiz">
    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <noscript><h1>Se requiere javascript</h1></noscript>

    <h2>Estación del año</h2>
    <?php
  
    $mes = date("n");
    $dia = date("j");

    switch ($mes){
        case 1:
        case 2:
            $estacion = "invierno";
            break;

        case 4:
        case 5:
            $estacion = "primavera";
            break;

        case 7:
        case 8:
            $estacion = "verano";
            break;

        case 10:
        case 11:
            $estacion = "otonio";
            break;

        case 3:
            if ($dia < 21)
                $estacion = "invierno";
            else
                $estacion = "primavera";
            break;

        case 6:
            if ($dia < 21)
                $estacion = "primavera";
            else
                $estacion = "verano";
            break;

        case 9:
            if ($dia < 23)
                $estacion = "verano";
            else
                $estacion = "otonio";
            break;

        case 12:
            if ($dia < 21)
                $estacion = "otonio";
            else
                $estacion = "invierno";
            break;
    }
 
    $fileDir = "../../servidor/Tema-2/" . $estacion . ".jpg";

    echo "<img src=\"$fileDir\" style='width: 1200px; height: 500px; margin: 10px auto; display: block'>";

    ?>

    <a href="../../servidor/Tema-2/estancionAnio.php?codigo" target ="_blank">Ver código</a>
 
</body>
</html>