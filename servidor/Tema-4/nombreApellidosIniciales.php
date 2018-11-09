<?php

/**
 * Escribir una función que lea nombre y apellidos y devuelva las iniciales.
 * 
 * User: Francisco Ramírez Ruiz
 * File:nombreApellidosIniciales.php
 */
if (isset($_GET['codigo'])) {
    highlight_file(__FILE__);
    exit;
}
?>
<?php 
include 'top.php'; 
?>

<?php


    /**
     * Divido la cadena en 1 en 1 y trunqueo el cada campo
     */
    function devolverIniciales($nombre, $apellido1, $apellido2) {
        $partesNombre = explode(" ", trim($nombre));
        $partesAp1 = explode(" ", trim($apellido1));
        $partesAp2 = explode(" ", trim($apellido2));

        return $iniciales = obtenerIniciales($partesNombre) . obtenerIniciales($partesAp1) . obtenerIniciales($partesAp2);
    }


    $error = false;
    $nombreErr = $apellido1Err = $apellido2Err = "";

    $nombre = $apellido1 = $apellido2 = "";

    /**
     * Si le doy a enviar, valido los datos
     */
    if (isset($_POST['enviar'])) {
        //Control nombre vacio
        if (empty($_POST['nombre'])) {
            $nombreErr = "Campo requerido";
            $error = true;
        } else {
            //preg match expresion regular,válido
            $nombre = $_POST['nombre'];
            if(!preg_match("/^[a-zA-Z\s]*$/",$nombre)) {
                $nombreErr = "Sólo se permiten letras";
                $error = true;
            }
        }
        //control apellido vacio
        if (empty($_POST['apellido1'])) {
            $apellido1Err = "Campo requerido";
            $error = true;
        } else {
            //preg match expresion regular,válido
            $apellido1 = $_POST['apellido1'];
            if(!preg_match("/^[a-zA-Z\s]*$/",$apellido1)) {
                $apellido1Err = "Sólo se permiten letras";
                $error = true;
            }
        }
        //Control apellido2 vacio
        if (empty($_POST['apellido2'])) {
            $apellido2Err = "Campo requerido";
            $error = true;
        } else {
            //preg match expresion regular,válido
            $apellido2 = $_POST['apellido2'];
            if(!preg_match("/^[a-zA-Z\s]*$/",$apellido2)) {
                $apellido2Err = "Sólo se permiten letras";
                $error = true;
            }
        }
    }
    /**
     * Creo el formulario con cada value
     * correspondiente por caso para devolver siempre el valor.
     */
    echo "<h2>Obtener iniciales de nombre y apellidos</h2>";
    echo "<div>";
    //Nombre
    //Apellido1
    //Apellido2
    echo "<form method=\"post\" action=\"" . htmlspecialchars($_SERVER['PHP_SELF']) . "\">
            Nombre: <input type=\"text\"  name=\"nombre\"   value = $nombre >
            <span style='color: red;'>* " . $nombreErr . "</span>
            <br /><br />
            Primer apellido: <input type=\"text\" name=\"apellido1\"  value = $apellido1 >
            <span style='color: red;'>* " . $apellido1Err . "</span>
            <br /><br />
            Segundo apellido: <input type=\"text\"  name=\"apellido2\" value = $apellido2 >
            <span style='color: red;'>* " . $apellido2Err . "</span>
            <br /><br />
            <input type=\"submit\" name=\"enviar\" value=\"Enviar\" />
        </form>";
    echo "</div>";
    
    /**
     * Si le doy enviar y no hay errores, devuelvo iniciales con los metodos correspondientes.
     */
    if (isset($_POST['enviar']) && !$error) {
        $iniciales = devolverIniciales($_POST['nombre'], $_POST['apellido1'], $_POST['apellido2']);
        echo "<br /><p class=\"mensaje\">Iniciales: <strong>" . $iniciales . "</strong></p>";
    }

    /**
     * Obtengo las iniciales y las devuelvo en mayúsculas
     */
    function obtenerIniciales($cadena) {
        $iniciales = "";
        $arr = array("","");
        for ($i=0; $i < count($cadena); $i++) {
            if (in_array($cadena[$i],$arr)) {
                $iniciales .= $cadena[$i] . ". ";
            } else {
                //Las convierto en mayúsculas
                $iniciales .= substr(strtoupper($cadena[$i]),0,1) . ". ";
            }  
        }
        return $iniciales;
    }

?>
    <h1><a href="../../servidor/Tema-4/nombreApellidosIniciales.php?codigo" target ="_blank">Ver código</a></h1>

<?php include 'bot.php'?>