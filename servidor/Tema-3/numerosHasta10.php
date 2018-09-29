<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Números hasta el 10</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="Francisco Ramírez Ruiz">
    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <noscript><h1>Se requiere javascript</h1></noscript>

    <?php
    /**
     * User: Francisco Ramírez Ruiz
     * File:numerosHasta10.php
     * Description: Muestra los números del 1 al 10.
     */

     for ($i=1; $i <= 11; $i++) { 
        echo "<p><b> número: " . $i ."</b></p>";
     }
    ?>

</body>
</html>