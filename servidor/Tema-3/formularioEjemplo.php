<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Formulario</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="Francisco Ramírez Ruiz">

    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <noscript><h1>Se requiere javascript</h1></noscript>
    
    <?php
    //Se pulsa enviar. cargamos en las variables los datos del formulario
    $lcolocaFormulario = false;
    $msgErrorNombre = $msgErrorApellido = '';
    if (isset($_POST['enviar'])) {
       
        $vNombre = $_POST['name'];
        $vApellidos = $_POST['apellido'];
        if (empty ($vNombre)){
            $msgErrorNombre = "Nombre requerido";
            $lcolocaFormulario = true;
        }
        if (empty ($vApellidos)){
            $msgErrorApellido = "Apellido requerido";
            $lcolocaFormulario = true;
        }

    }   //No enviar, variables vacías
    else {
        $vNombre = '';
        $vApellidos = '';
    }
    ?>

    <?php if (!isset($_POST['enviar']) OR  $lcolocaFormulario) { ?>
    <h2>Formulario</h2>
    <form  method ="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    
    Name: <input type="text" name="name" size="20" value="<?php echo $vNombre ?>">
    
    <?php echo"<span style=\"color:red\">$msgErrorNombre</span>" ?>
    <br>

    Apellidos: <input type="text" name="apellido" size="15" value="<?php echo $vApellidos ?>">
    <?php echo"<span style=\"color:red\">$msgErrorApellido</span>" ?>
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
</body>
</html>

