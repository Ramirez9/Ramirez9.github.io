<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File: estacionAnio.php
     * Description: Cabecera en funcion de la estacion del año
     */
if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}
?>
<?php include 'top.php'?>

<h2>Estación del año</h2>
    <?php
  
    $mes = date("n");
    $dia = date("j");

    switch ($mes){
        case 1:
        case 2:
            $estacion = "invierno";
            break;

        case 4:
        case 5:
            $estacion = "primavera";
            break;

        case 7:
        case 8:
            $estacion = "verano";
            break;

        case 10:
        case 11:
            $estacion = "otonio";
            break;

        case 3:
            if ($dia < 21)
                $estacion = "invierno";
            else
                $estacion = "primavera";
            break;

        case 6:
            if ($dia < 21)
                $estacion = "primavera";
            else
                $estacion = "verano";
            break;

        case 9:
            if ($dia < 23)
                $estacion = "verano";
            else
                $estacion = "otonio";
            break;

        case 12:
            if ($dia < 21)
                $estacion = "otonio";
            else
                $estacion = "invierno";
            break;
    }
 
    $fileDir = "../../servidor/Tema-2/" . $estacion . ".jpg";

    echo "<img src=\"$fileDir\" style='width: 1200px; height: 500px; margin: 10px auto; display: block'>";

    ?>
    <h1>
    <a href="../../servidor/Tema-2/estancionAnio.php?codigo" target ="_blank">Ver código</a>
    </h1>
<?php  include 'bot.php'?>