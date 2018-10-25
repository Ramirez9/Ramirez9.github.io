<?php

/**
 * Formulario de ejemplo realizado en clase .
 * 
 * User: Francisco Ramírez Ruiz
 * File:curriculum.php
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
    <h2>Formulario Ejemplo</h2>
</div>
    <?php
    //Se pulsa enviar. cargamos en las variables los datos del formulario
    $lcolocaFormulario = false;
    $msgErrorNombre = $msgErrorApellido = '';
    if (isset($_POST['enviar'])) {

        $vNombre = $_POST['name'];
        $vApellidos = $_POST['apellido'];
        if (empty($vNombre)) {
            $msgErrorNombre = "Nombre requerido";
            $lcolocaFormulario = true;
        }
        if (empty($vApellidos)) {
            $msgErrorApellido = "Apellido requerido";
            $lcolocaFormulario = true;
        }

    }   //No enviar, variables vacías
    else {
        $vNombre = '';
        $vApellidos = '';
    }
    ?>

    <?php if (!isset($_POST['enviar']) or $lcolocaFormulario) { ?>
    <form  method ="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    
    Name: <input type="text" name="name" size="20" value="<?php echo $vNombre ?>">
    
    <?php echo "<span style=\"color:red\">$msgErrorNombre</span>" ?>
    <br>

    Apellidos: <input type="text" name="apellido" size="15" value="<?php echo $vApellidos ?>">
    <?php echo "<span style=\"color:red\">$msgErrorApellido</span>" ?>
    <p><input type="submit" value="enviar" name="enviar" value ="Submit"></p>

    <br>
    
    </form>
    
    <?php 
} else {
    //$name = $_POST['name'];
    echo $vNombre;
    echo '<br/>';
    //$apellido = $_POST['apellido'];
    echo $vApellidos;
}

?>
    <h1><a href="../../servidor/Tema-3/formularioEjemplo.php?codigo" target ="_blank">Ver código</a></h1>
    

<?php include 'bot.php'?>   