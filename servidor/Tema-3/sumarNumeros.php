<?php

/**
 * User: Francisco Ramírez Ruiz
 * File:sumarNumeros.php
 * Description: Pide al usuario cuantos números desea sumar
 */
if (isset($_GET['codigo'])) {
    highlight_file(__FILE__);
    exit;
}
?>

<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Suma de números</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="Francisco Ramírez Ruiz">

    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <noscript><h1>Se requiere javascript</h1></noscript>
    

    <form method="post" action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
          
        ¿Cuántos números desea?: <input type="number" name="cantidadNumeros" min ='2' value =''><span
                class="errMsg" style = 'color: red'>*</span>
        <br><br>
        <input type="submit" name="enviar" value="Submit">
    </form>
    
    <?php
    echo "<form method='post' action=''>";
    $bandera = false;
    $cantidadNumeros = "";
    $suma = 0;
   
    $errNumero = "Número erróneo";

    if (isset($_POST["enviar"])) {
        if ($_POST["cantidadNumeros"] <= 0) {
            $bandera = true;
        } else {
            
            $cantidadNumeros = $_POST["cantidadNumeros"];
            echo "<br><br>";
            for ($i = 0; $i < $cantidadNumeros; $i++) {
                echo "<br><br>Número " . ($i + 1) . "<input type='number' required='required' name='numeros[]'>
                <span  style=\"color:red\">* <?php echo $errNumero;?></span>";
            }

            echo "<br><br><input type='submit' name='sumar' value='Submit'>";
        }


    }

    if (isset($_POST["sumar"])) {
        $sumandos = $_POST["numeros"];

        for ($j = 0; $j < count($sumandos); $j++) {
            $suma = $suma + $sumandos[$j];
        }
        echo "La suma es: " . $suma . "<br><br>";

    }

    echo "</form>";


    ?>

</body>
</html>