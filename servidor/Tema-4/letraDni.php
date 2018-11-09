<?php

/**
 *Escribir una función que permita calcular la letra que corresponde a un dni y utilizarla en
 *script que presente un formulario de cálculo de nif.
 * 
 * User: Francisco Ramírez Ruiz
 * File:letraDni.php
 */
if (isset($_GET['codigo'])) {
    highlight_file(__FILE__);
    exit;
}
?>
<?php 
include 'top.php'; 
?>
    
<div>
    <h2>Letra DNI</h2>
</div>
<!-- Formularo para pedir los numeros del DNI maximo 8 -->
    <form method="post" action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <h4></h4>
        <input type="text" name="dni" maxlength="8">
        <input type="submit" name="enviar" value="Calcular Letra">        
    </form>

<?php    
//Si le he dado a enviar, comprueba si es numérico.
        if(isset($_POST['enviar'])){
            if (!is_numeric($_POST['dni'])) {
                echo ("Numero de DNI");
                //Compruena que haya 8 caracteres
            } else if (strlen($_POST['dni'])!=8) {
                echo ("<p>Mínimo 8!</p>");
            } else {
                $letra=calcularLetraDNI($_POST['dni']);
                echo "<p>La letra del DNI ".$_POST['dni']. " es $letra.</p>";
            }
        }
/**
 * Funcion para calcular la letra compuesta en un array
 */
function calcularLetraDNI($numero){
    $letra=array("T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E");
    return $letra[$numero%23];
}



?>

    <h1><a href="../../servidor/Tema-4/letraDNI.php?codigo" target ="_blank">Ver código</a></h1>

<?php include 'bot.php'?>