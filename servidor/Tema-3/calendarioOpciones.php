<?php

/**
 * User: Francisco Ramírez Ruiz
 * File:leerContinentePais.php
 * Description: Calendario en formulario
 */
if (isset($_GET['codigo'])) {
    highlight_file(__FILE__);
    exit;
}
error_reporting(5);
$vMesSeleccionado = $_POST['mesElegido'];
$vAñoSeleccionado = $_POST['anioElegido'];
?>
<?php include 'top.php'?>

<h2>Calendario con opciones</h2>

<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <select name="mesElegido">
            <option value="1">Enero</option>
            <option value="2">Febrero</option>
            <option value="3">Marzo</option>
            <option value="4">Abril</option>
            <option value="5">Mayo</option>
            <option value="6">Junio</option>
            <option value="7">Julio</option>
            <option value ="8">Agosto</option>
            <option value="9">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
        </select>

        <select name="anioElegido">
            <option  <?php echo $vAñoSeleccionado=='2018'?'selected':''; ?>>2018</option>
            <option <?php echo $vAñoSeleccionado=='2019'?'selected':''; ?>>2019</option>
            <option  <?php echo $vAñoSeleccionado=='2020'?'selected':''; ?>>2020</option>
        </select>

        <input type="submit" name="submit" value="Mostrar">
    </form>


    <?php

    if (isset($_POST['mesElegido']) & isset($_POST['anioElegido'])) {
        $vMesSeleccionado = $_POST['mesElegido']; 
        $anio = $_POST['anioElegido'];  
        $numeroDias = cal_days_in_month(CAL_GREGORIAN, $vMesSeleccionado, $anio); 
        $primerDia = date("N", mktime(0, 0, 0, $vMesSeleccionado, 8, $anio)); 
        $dia = 1; 
        $contador = 0;
        $diaActual = date("j");
        $mesActual = date("n");

        echo "
                <table>
                    <tr>
                        <td >Lunes</td>
                        <td >Martes</td>
                        <td >Miércoles</td>
                        <td >Jueves</td>
                        <td >Viernes</td>
                        <td >Sábado</td>
                        <td >Domingo</td>
                    </tr>
                
            ";

        echo "<tr>";

        for ($i = 1; $i <= 7; $i++) {
            if ($i < $primerDia) {
                echo "<td></td>";
            } else {
                if ($dia == $diaActual and $vMesSeleccionado == $mesActual) {
                    echo "<td style=' background-color: #3fc912'>" . $dia++ . "</td>";
                } else if ($i == 7) {
                    echo "<td style='background-color: #c90c07'>" . $dia++ . "</td>";
                } else {
                    echo "<td>" . $dia++ . "</td>";
                }

            }
        }
        echo "</tr>";

        while ($dia <= $numeroDias) {
            echo "<tr>";

            for ($j = 0; $j < 7; $j++) {
                if ($dia == $numeroDias + 1) {
                    break;
                } else if ($dia == $diaActual and $vMesSeleccionado == $mesActual) {
                    echo "<td style background-color: #3fc912'>" . $dia++ . "</td>";
                } else if ($j == 6) {
                    echo "<td style background-color: #c90c07'>" . $dia++ . "</td>";
                } else {
                    echo "<td>" . $dia++ . "</td>";
                }
            }
            echo "</tr>";
        }
        echo "</table>";
    }
    ?>

<?php include 'bot.php'?>