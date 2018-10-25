<?php

/**
 * User: Francisco Ramírez Ruiz
 * File:suma3pares.php
 * Description: Sumas los 3 primeros números pares.
 */
if (isset($_GET['codigo'])) {
    highlight_file(__FILE__);
    exit;
}
?>

<?php include 'top.php' ?>

<div><h2>3 Números</h2></div>
    <?php

    $par = 0;
    for ($i = 0; $i < 5; $i++) {
        if ($i % 2 == 0)
            $par = $par + $i;
    }
    echo "Considerando 0 como par";
    echo " súma de los 3 primeros números pares es: " . $par ;

    ?>
    <h1> <a href="../../servidor/Tema-3/suma3pares.php?codigo" target ="_blank">Ver código</a></h1>
  
<?php include 'bot.php' ?>