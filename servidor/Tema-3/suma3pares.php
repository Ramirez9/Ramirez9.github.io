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
     * File:suma3pares.php
     * Description: Sumas los 3 primeros números pares.
     */
    $par = 0;
    for ($i=0; $i < 5 ; $i++) { 
       if($i % 2 == 0)
        $par = $par + $i;
    }
    echo "<h1>Considerando 0 como par</h1>";
    echo "<h2>La súma de los 3 primeros números pares es: " . $par ."</h2>";
    
    ?>

</body>
</html>