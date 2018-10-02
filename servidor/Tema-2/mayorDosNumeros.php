<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File: mayorDosNumeros.php
     * Description: Carga en dos números en variables y escribir el mayor de ellos
     */
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}
?>
<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mayor de dos números</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="Francisco Ramírez Ruiz">
    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <noscript><h1>Se requiere javascript</h1></noscript>

    <h2>Mayor de dos números</h2>
    <?php

    $num1 = 6;
    $num2 = 9;
    echo "<h3> Los dos números elegidos son: $num1 y $num2 </h3>";
    if($num1 >$num2){
        echo " El número mayor es $num1";
    }else if ($num1 < $num2){
        echo " El número mayor es $num2";
    }else{
        echo "Son iguales.";
    }
    ?>

    <a href="../../servidor/Tema-2/mayorDosNumeros.php?codigo" target ="_blank">Ver código</a>

</body>
</html>