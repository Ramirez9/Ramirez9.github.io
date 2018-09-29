<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla de multiplicar</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="Francisco Ramírez Ruiz">

    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <noscript><h1>Se requiere javascript</h1></noscript>
    <?php
    /**
     * User: Francisco Ramírez Ruiz
     * File: tablaMultiplicar.php
     * Description: Genera la tabla de multiplicar del 1 al 10.
     */

    //generamos para las 10 tablas.
    for ($tabla=1; $tabla<=10 ; $tabla++) { 
        echo "<h2> Tabla del " . $tabla . "</h2>";

        for ($i=1; $i <= 10; $i++) { 
            echo $tabla . " x " . $i . " = " . ($tabla*$i) . "</br>";
        }
    }
    ?>
   
</body>
</html>