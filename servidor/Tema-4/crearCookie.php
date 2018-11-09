<?php

/**
 * Crear una cookie en clase
 * 
 * User: Francisco Ramírez Ruiz
 * File:crearCookie.php
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
    <h2>CrearCookie</h2>
</div>
    <?php
    // crear las cookies
    setcookie("cookie[tres]", "cookietres");
    setcookie("cookie[dos]", "cookiedos");
    setcookie("cookie[uno]", "cookieuno" );

    // imprimirlas luego que la página es recargada
    if (isset($_COOKIE['cookie'])) {
        foreach ($_COOKIE['cookie'] as $name => $value) {
            $name = htmlspecialchars($name);
            $value = htmlspecialchars($value);
            echo "$name : $value <br />\n";
        }
    }else{
        echo "recarga la pagina para tener cookies";
    }
    ?>
    <h1><a href="../../servidor/Tema-4/crearCookie.php?codigo" target ="_blank">Ver código</a></h1>
    

<?php include 'bot.php'?>   