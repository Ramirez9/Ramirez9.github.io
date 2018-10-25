<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File: diaDelMes.php
     * Description: Carga en variables mes y año e indicar el número de días del mes.
     */
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}

    
?>
<?php include 'top.php'?>
    <h2>Dia del mes</h2>
    <?php

    $mes = "Mayo";
    $anio = 2018;

    $bisiesto = false;
    if (($anio%  4 == 0  && anio %100 != 0) || $anio % 400 == 0){
        $bisiesto = true;
    }

    switch($mes){
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        echo "<h3>" . $mes . " tiene 31 dias" . "</h3>";
        break;
        case "Febrero":
        if ($bisiesto)
            echo "<h3>" . $mes . " tiene 29 dias" . "</h3>";
        else
            echo "<h3>" . $mes . " tiene 28 dias" . "</h3>";
        break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        echo "<h3>" . $mes . " tiene 30 dias" . "</h3>";
        break;
    default:
        echo "Mes inválido";
    }
    ?>
    <h1>
    <a href="../../servidor/Tema-2/diaDelMes.php?codigo" target ="_blank">Ver código</a>

    </h1>

<?php include 'bot.php'?>