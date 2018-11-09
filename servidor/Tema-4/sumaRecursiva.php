<?php

/**
 *Función recursiva para sumar los dígitos de un número.
 * 
 * User: Francisco Ramírez Ruiz
 * File:sumaRecursiva.php
 */
if (isset($_GET['codigo'])) {
    highlight_file(__FILE__);
    exit;
}
?>
<?php 
include 'top.php';
$lerrorFormulario=false; 
$numero=0; 
$numeroErr=""; 
?>
    
<div>
    <h2>Suma Recursiva</h2>
</div>

<?php

/**
 * Function sumar, calcula el n
 */
function sumar($numero){
    if($numero==0){
        return 0;
    }
    else{
        //Calculamos el recursivo del numero
        return sumar((int)($numero /10)) + ($numero%10);
    }
}

if (isset($_POST['enviar'])) {
    $numero = $_POST['numero'];

    //Con Filter validamos que se introduzca solo números enteros
    if (empty($_POST['numero']) || !filter_var($numero, FILTER_VALIDATE_INT)) {    
        $numeroErr = "ERROR";
        $lerrorFormulario = true;
    }
}

/**
 * Formulario para pedir el número
 */
if (!isset($_POST['enviar']) || $lerrorFormulario) { ?>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"> 
    <label>Número</label> 
    <input type="text" name="numero"> 
        <?php echo $numeroErr; ?> <br>
    <input type="submit" name="enviar"> 
    </form> 
        <?php 
    } else {
        echo "La suma recursiva es:";
        echo (sumar($numero));
    }
    ?>

    <h1><a href="../../servidor/Tema-4/sumaRecursiva.php?codigo" target ="_blank">Ver código</a></h1>

<?php include 'bot.php' ?>