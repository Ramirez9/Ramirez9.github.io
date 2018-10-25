<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File:mesesDelAnio.php
     * Description: Los meses del año con array
     */
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}
?>

<?php include 'top.php'?>
<div><h2>Meses del año</h2></div>
    <?php

    $meses = array('enero','febrero','marzo','abril','mayo','junio','julio',
    'agosto','septiembre','octubre','noviembre','diciembre');

    for ($i = 0; $i < count($meses); $i++) {

        echo "<tr>"; 
        echo "<td style='border: 1px solid; '>" .  $meses[$i] . "</br></td>";

    }
    ?>
     <h1><a href="../../servidor/Tema-3/mesesDelAnio.php?codigo" target ="_blank">Ver código</a></h1>

<?php include 'bot.php'?>