<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File:numerosHasta10.php
     * Description: Muestra los números del 1 al 10.
     */
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}
?>

<?php include 'top.php'?>
    
    <h2>Numeros 10</h2>

    <?php

     for ($i=1; $i <= 11; $i++) { 
        echo "<p><b> número: " . $i ."</b></p>";
     }
    ?>

     <h1><a href="../../servidor/Tema-3/numerosHasta10.php?codigo" target ="_blank">Ver código</a></h1>
    
<?php include 'bot.php'?>

