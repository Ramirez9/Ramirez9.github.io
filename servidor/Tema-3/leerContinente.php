<?php

/**
 * User: Francisco Ramírez Ruiz
 * File:leerContinente.php
 * Description: Utilizando el array de continentes y países, crea un script que lea en un formulario un continente
 * y nos muestre sus países con sus capitales y banderas
 */
if (isset($_GET['codigo'])) {
    highlight_file(__FILE__);
    exit;
}
?>

<?php include 'top.php'?>
<h2>Leer continentes</h2>

    <!--Array de los continenntes -->
    <?php
    $continentes = array(
        "Europa" => (array(
            "España" => array("capital" => "Madrid", "bandera" => "img/Spain.jpg"),
            "Italia" => array("capital" => "Roma", "bandera" => "img/Italia.jpg"),
            "Portugal" => array("capital" => "Lisboa", "bandera" => "img/Portugal.jpg"),
            "Francia" => array("capital" => "París", "bandera" => "img/Francia.jpg"),
            "Rumania" => array("capital" => "Bucarest", "bandera" => "img/Rumania.jpg"),
            "Luxemburgo" => array("capital" => "Luxemburgo", "bandera" => "img/Luxemburgo.jpg"),
            "Alemania" => array("capital" => "Berlín", "bandera" => "img/Alemania.jpg"),
        )),
        "America" => (array(
            "Barbados" => array("capital" => "Bridgetown", "bandera" => "img/Barbados.jpg"),
            "Costa Rica" => array("capital" => "San José", "bandera" => "img/CostaRica.jpg"),
            "Nicaragua" => array("capital" => "Managua", "bandera" => "img/Nicaragua.jpg"),
            "Canadá" => array("capital" => "Ottawa", "bandera" => "img/Canada.jpg"),
            "Chile" => array("capital" => "Chile", "bandera" => "img/Chile.jpg"),
            "Brasil" => array("capital" => "Brasilia", "bandera" => "img/Brasil.jpg"),
        )),

        "Asia" => (array(
            "Afganistan " => array("capital" => "Kabul", "bandera" => "img/Afganistan.jpg"),
            "Rusia " => array("capital" => "Moscú", "bandera" => "img/Rusia.jpg"),
            "Georgia " => array("capital" => "Tflis", "bandera" => "img/Georgia.jpg"),
            "Filipinas " => array("capital" => "Manila", "bandera" => "img/Filipinas.jpg"),
            "India " => array("capital" => "Nueva Delhi", "bandera" => "img/India.jpg"),
            "Omán " => array("capital" => "Mascate", "bandera" => "img/Oman.jpg"),
            "Japón" => array("capital" => "Tokio", "bandera" => "img/Japon.jpg"),
        )),

        "Africa" => (array(
            "Botswana" => array("capital" => "Gaborone", "bandera" => "img/Botswana.jpg"),
            "Cabo Verde" => array("capital" => "Praia", "bandera" => "img/CaboVerde.jpg"),
            "Gambia" => array("capital" => "Banjul", "bandera" => "img/Gambia.jpg"),
            "Madagascar" => array("capital" => "Antananarivo", "bandera" => "img/Madagascar.jpg"),
            "Nigeria" => array("capital" => "Abuja", "bandera" => "img/Nigeria.jpg"),
            "Somalia" => array("capital" => "Mogadiscio", "bandera" => "img/Somalia.jpg"),
            "Togo" => array("capital" => "Lomé", "bandera" => "img/Togo.jpg"),
        )),

        "Oceania" => (array(
            "Australia" => array("capital" => "Canberra", "bandera" => "img/Australia.jpg"),
            "Kiribati" => array("capital" => "Tarawa Sur", "bandera" => "img/Kiribati.jpg"),
            "Tonga" => array("capital" => "Nukualofa", "bandera" => "img/Tonga.jpg"),
            "Nauru" => array("capital" => "Yaren", "bandera" => "img/Nauru.jpg"),
            "Vanuatu" => array("capital" => "Port Vila", "bandera" => "img/Vanuatu.jpg"),
            "Tuvalu" => array("capital" => "Funafuti", "bandera" => "img/Tuvalu.jpg"),
            "Samoa" => array("capital" => "Apia", "bandera" => "img/Samoa.jpg"),
        ))
    );

    //Si no le he dado a submit muestra el formulario
    if(!isset($_POST['submit'])){

    //Inicio formulario
    echo "<form action=" .htmlentities($_SERVER["PHP_SELF"]). " method=post>";
    
    echo "<select name=continentes display:block>";
   
    foreach ($continentes as $continente => $value) {
        if($_POST['continentes']==$continente)
            echo "<option name=pais value=$continentes selected>". $continente . "</option>";
        else
            echo "<option name=pais value=$continente>". $continente . "</option>";
    }
    echo "</select>";
    echo "<input type=submit name=submit value=Enviar>";
    echo "</form>";
    //Fin formulario

    }else{
    //Crea la tabla de los paises
    echo "<table>";
    echo "<tr>";
        echo "<th>País</th>";
        echo "<th>Capital</th>";
        echo "<th>Bandera</th>";
    echo "</tr>";
    echo "<tr>";
    foreach ($continentes as $continente => $paises) {
        if($continente==$_POST['continentes'])
            foreach ($paises as $pais => $info) {
                echo "<td>" . $pais . "</td>";
                    foreach ($info as $continente => $value) {
                        if($continente=='capital')
                            echo "<td>". $value. "</td>";
                        else
                        echo "<td><img src='$value' style='width: 75px; height: 75px;'></td>";
                    }
                echo "</tr>";
            }
        }
    echo "</table>";
    }
    ?>
    <h1><a href="../../servidor/Tema-3/leerContinente.php?codigo" target ="_blank">Ver código</a></h1>

<?php include 'bot.php'?>