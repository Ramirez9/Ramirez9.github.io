<?php
/**
 *Formulario login clase
 * 
 * User: Francisco Ramírez Ruiz
 * File:formularioLogin.php
 */
if (isset($_GET['codigo'])) {
    highlight_file(__FILE__);
    exit;
    error_reporting(5);
}
?>
<?php 
include 'top.php'; 
?>
    <?php
        $user = '';
        $pass = '';
        
    ?>
<div>
    <h2>Formulario login</h2>
</div>
<form name="login" method="post" action="">
   usuario: <input type="text" name="usuario" value="<?php echo $user ?>"><br>
   contraseña: <input type="password" name="contraseña" value="<?php echo $pass ?>"><br><br>
   Recordar: <input type="checkbox" name="rememberme" value="1"><br>
   <input type="submit" name="submit" value="Login!">
  </form>
<?php

    if (isset($_POST['usuario']) && isset($_POST['contraseña'])) {
        
        if (($_POST['usuario'] == $user) && ($_POST['contraseña'] == $pass)) {    
            echo 'has logeado';
            if (isset($_POST['rememberme'])) {
               
                setcookie('usuario', $_POST['usuario'], time() + 60);
                setcookie('contraseña', ($_POST['contraseña']), time() + 60);       
            } else {
               
                setcookie('usuario', $_POST['usuario'], false);
                setcookie('contraseña', ($_POST['contraseña']), false );
            }
                  
        } else {
            echo 'Usuario o contraseña inválida';
        }
        
    } else {
        echo 'Introduzca un usuario';
    }
?>

    <h1><a href="../../servidor/Tema-4/formularioLogin.php?codigo" target ="_blank">Ver código</a></h1>
    
<?php include 'bot.php'?>   