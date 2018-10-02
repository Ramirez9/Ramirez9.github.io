<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File: contienentePaises.php
     * Description: Continentes, países, capitales y banderas.
     */
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}  
?>

<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Continentes, países</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="Francisco Ramírez Ruiz">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>
    <h1>Continente, países, capitales...</h1>
    <h2>Francisco Ramírez</h2>

    <noscript><h1>Se requiere javascript</h1></noscript>

    <?php
    
    $continentes = array(
        "Europa" => (
        array("España" => array("capital" => "Madrid", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/espana-bandera-200px.jpg"),
            "Dinamarca" => array("capital" => "Copenhague", "bandera" => "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/740px-Flag_of_Denmark.svg.png"),
            "Italia" => array("capital" => "Roma", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/italia-bandera-200px.jpg"),
            "Noruega" => array("capital" => "Oslo", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/noruega-bandera-200px.jpg"),
            "Portugal" => array("capital" => "Lisboa", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/portugal-bandera-200px.jpg"),
            "Irlanda" => array("capital" => "Dublín", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/irlanda-bandera-200px.jpg"),
            "Francia" => array("capital" => "París", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/francia-bandera-200px.jpg"),
            "Rumania" => array("capital" => "Bucarest", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/rumania-bandera-200px.jpg"),
            "Suiza" => array("capital" => "Berna", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/suiza-bandera-200px.jpg"),
            "Luxemburgo" => array("capital" => "Luxemburgo", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/luxemburgo-bandera-200px.jpg"),
            "Macedonia" => array("capital" => "Skopje", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/macedonia-bandera-200px.jpg"),
            "Finlandia" => array("capital" => "Helsinki", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/finlandia-banera-200px.jpg"),
            "Alemania" => array("capital" => "Berlín", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/alemania-bandera-200px.jpg"),
        )
        ),
        "América" => (
        array("Barbados" => array("capital" => "Bridgetown", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/barbados-bandera-200px.jpg"),
            "Costa Rica" => array("capital" => "San José", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/costa-rica-bandera-200px.jpg"),
            "Honduras" => array("capital" => "Honduras", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/honduras-bandera-200px.jpg"),
            "Nicaragua" => array("capital" => "Managua", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/nicaragua-bandera-200px.jpg"),
            "Canadá" => array("capital" => "Ottawa", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/canada-bandera-200px.jpg"),
            "Ecuador" => array("capital" => "Quito", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/ecuador-bandera-200px.jpg"),
            "Chile" => array("capital" => "Chile", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/chile-bandera-200px.jpg"),
            "Brasil" => array("capital" => "Brasilia", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/brasil-bandera-200px.jpg"),
            "Uruguay" => array("capital" => "Montevideo", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/uruguay-bandera-200px.jpg"),
        )
        ),

        "Asia" => (
        array("Afganistan " => array("capital" => "Kabul", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/afganistan-bandera-200px.jpg"),
            "Camboya " => array("capital" => "Nom Pen", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/camboya-bandera-200px.jpg"),
            "Kirguistán " => array("capital" => "Biskek", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/kirguistan-bandera-200px.jpg"),
            "Siria " => array("capital" => "Damasco", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/siria-bandera-200px.jpg"),
            "Rusia " => array("capital" => "Moscú", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/rusia-bandera-200px.jpg"),
            "Georgia " => array("capital" => "Tflis", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/georgia-bandera-200px.jpg"),
            "Filipinas " => array("capital" => "Manila", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/filipinas-bandera-200px.jpg"),
            "India " => array("capital" => "Nueva Delhi", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/india-bandera-200px.jpg"),
            "Omán " => array("capital" => "Mascate", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/oman-bandera-200px.jpg"),
            "Pakistán " => array("capital" => "Islamabad", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/pakistan-bandera-200px.jpg"),
            "Japón" => array("capital" => "Tokio", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/japon-bandera-200px.jpg"),
        )
        ),

        "África" => (
        array("Botswana" => array("capital" => "Gaborone", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/06/afganistan-bandera-200px.jpg"),
            "Cabo Verde" => array("capital" => "Praia", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/07/cabo-verde-bandera-200px.jpg"),
            "Gambia" => array("capital" => "Banjul", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/07/gambia-bandera-200px.jpg"),
            "Guinea" => array("capital" => "Conakry", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/07/guinea-bandera-200px.jpg"),
            "Liberia" => array("capital" => "Liberia", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/07/liberia-bandera-200px.jpg"),
            "Madagascar" => array("capital" => "Antananarivo", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/07/madagascar-bandera-200px.jpg"),
            "Nigeria" => array("capital" => "Abuja", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/07/niger-bandera-200px.jpg"),
            "Somalia" => array("capital" => "Mogadiscio", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/07/somalia-bandera-200px.jpg"),
            "Tanzania" => array("capital" => "Dodoma", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/07/tanzania-bandera-200px.jpg"),
            "Túnez" => array("capital" => "Túnez", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/07/tunez-bandera-200px.jpg"),
            "Togo" => array("capital" => "Lomé", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/07/togo-bandera-200px.jpg"),
        )
        ),



        "Oceanía" => (
        array("Australia" => array("capital" => "Canberra", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/australia-bandera-200px.jpg"),
            "Kiribati" => array("capital" => "Tarawa Sur", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/kiribati-bandera-200px.jpg"),
            "Tonga" => array("capital" => "Nukualofa", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/tonga-bandera-200px.jpg"),
            "Nauru" => array("capital" => "Yaren", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/nauru-bandera-200px.jpg"),
            "Vanuatu" => array("capital" => "Port Vila", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/vanuatu-bandera-200px.jpg"),
            "Tuvalu" => array("capital" => "Funafuti", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/tuvalu-bandera-200px.jpg"),
            "Samoa" => array("capital" => "Apia", "bandera" => "https://www.saberespractico.com/wp-content/uploads/2015/04/samoa-bandera-200px.jpg"),
        )
        )
    );

    echo "<table style='border: 1px solid;'><tr><td>Continente</td> <td>País</td><td>Capital</td> <td>Bandera</td></tr>";

    foreach ($continentes as $continente => $paises) {

        foreach ($paises as $pais => $info) {
            echo "<td>" . $continente . "</td>";
            echo "<td>" . $pais . "</td>";
            echo "<td>" . $info["capital"] . "</td>";

            echo "<td><img src='$info[bandera]' style='width: 100px; height: 100px;'></td>";
            echo "</tr>";
        }
    }

    echo "</table>";

    ?>
    <a href="../../servidor/Tema-3/continentePaises.php?codigo" target ="_blank">Ver código</a>

</body>
</html>