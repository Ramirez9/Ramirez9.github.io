<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendario</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="Francisco Ramírez Ruiz">

    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <noscript><h1>Se requiere javascript</h1></noscript>
    
    <h2>Calendario</h2>

    <!--Creamos un formulario para recibir el mes y el año-->

    <?php
    /**
     * User: Francisco Ramírez Ruiz
     * File:calendarioFestivosRojo.php
     * Description: Calendario colocan festivos y dia actual en verde.
     */
    ?>
    <div style="text-align: center">
    <form action="" method="post">
        <select name="mes">
            <option value="1">Enero</option>
            <option value="2">Febrero</option>
            <option value="3">Marzo</option>
            <option value="4">Abril</option>
            <option value="5">Mayo</option>
            <option value="6">Junio</option>
            <option value="7">Julio</option>
            <option value="8">Agosto</option>
            <option value="9">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
        </select>

        <select name="anio">
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
        </select>

        <input type="submit" name="submit" value="Ver calendario">
    </form>

    <!-- Mostramos al calendario según lo obtenido del formulario-->

    <?php
    /**
     * Recibo lo enviado por el formulario
     */

    //Con post como metodo en el formulario obtenemos la cadena introducida

    //Con isset comprueba que la variable esté definida.
    if (isset($_POST["mes"]) & isset($_POST['anio'])) {
        $mes = $_POST["mes"]; //Mes elegido
        $anio = $_POST['anio'];  //Añoo elegido
        $numeroDias = cal_days_in_month(CAL_GREGORIAN, $mes, $anio); //Número del mes elegido

        //mktime(hour,minute,second,month,day,year,is_dst);

        $primerDia = date("N", mktime(0, 0, 0, $mes, 8, $anio)); //Primer dia del mes.
        $dia = 1; //Contador para indicar el dia
        $contador = 0;
        $diaActual = date("j");
        $mesActual = date("n");

        echo "
                <table style='border: double; margin: 20px auto'>
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
                echo "<td ></td>";
            } else {
                if ($dia == $diaActual && $mes == $mesActual) {
                    echo "<td style=' background-color: green'>" . $dia++ . "</td>";
                } else if ($i == 7) {
                    echo "<td style=' background-color: red'>" . $dia++ . "</td>";
                } else {
                    echo "<td >" . $dia++ . "</td>";
                }

            }
        }

        echo "</tr>";

        while ($dia <= $numeroDias) {
            echo "<tr>";

            for ($j = 0; $j < 7; $j++) {
                if ($dia == $numeroDias + 1) {
                    break;
                } else if ($dia == $diaActual && $mes == $mesActual) {
                    echo "<td style=' background-color: green'>" . $dia++ . "</td>";
                } else if ($j == 6) {
                    echo "<td style=' background-color: red'>" . $dia++ . "</td>";
                } else {
                    echo "<td>" . $dia++ . "</td>";
                }

            }

            echo "</tr>";
        }

        echo "</table>";
    }
    ?>

</div>
</body>
</html>