<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File:restaurante.php
     * Description: Un restaurante dispone de una carta de 3 primero, 5 segundos y 3 postres. Almacenar
     * información incluyendo url y mostrar los menús disponibles. Mostrar el precio del menú
     * suponiendo que éste se calcula sumando el precio de cada uno de los platos incluidos y con un
     * descuento del 20 %.
     */
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}
?>

<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurante</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="Francisco Ramírez Ruiz">

    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>

    <h1>Restaurantey: 3 primero, 5 segundos y 3 postres.</h1>
    <h2>Francisco Ramírez </h2>

    <noscript><h1>Se requiere javascript</h1></noscript>

    <a href="../../servidor/Tema-3/restaurante.php?codigo" target ="_blank">Ver código</a>

    <?php

    $menu = array(
        "primero" => array(
            array("nombre" => "Crema de champiñones y pollo al romero", "url" => "https://static.hogarmania.com/archivos/201810/crema-champinones-xl-125x125x80xX.jpg", "precio" => 15),
            array("nombre" => "Tortilla de la huerta", "url" => "https://static.hogarmania.com/archivos/201809/tortilla-huerta-xl-125x125x80xX.jpg", "precio" => 16),
            array("nombre" => "Pasta fresca carbonara", "url" => "https://static.hogarmania.com/archivos/201806/pasta-carbonara-xl-125x125x80xX.jpg", "precio" => 15.5),
        ),

        "segundo" => array(
            array("nombre" => "Pollo con setas y ajos frescos", "url" => "https://static.hogarmania.com/archivos/201809/pollo-setas-xl-125x125x80xX.jpg", "precio" => 13.5),
            array("nombre" => "Bacalao al pil-pil con puerro crujiente", "url" => "https://static.hogarmania.com/archivos/201809/bacalao-pipil-xl-125x125x80xX.jpg", "precio" => 15.5),
            array("nombre" => "Empanadillas de pollos", "url" => "https://static.hogarmania.com/archivos/201808/empanadillas-pollo-xl-125x125x80xX.jpg", "precio" => 14),
            array("nombre" => "Merluza con alioli de azafrán", "url" => "https://static.hogarmania.com/archivos/201806/merluza-alioli-xl-125x125x80xX.jpg", "precio" => 13),
            array("nombre" => "Crepes con gambas y pollo", "url" => "https://static.hogarmania.com/archivos/201803/hctu0356-crepes-de-gambas-y-pollo-xl-125x125x80xX.jpg", "precio" => 18),
        ),

        "postre" => array(
            array("nombre" => "Mousse de chocolate y nata", "url" => "https://www.hogarmania.com/archivos/201104/mousse-de-chocolate-y-nata-xl-156x125x80xX.jpg", "precio" => 7),
            array("nombre" => "Pastelitos de mora", "url" => "https://static.hogarmania.com/archivos/201809/6218-pastelitos-de-mora-xl-125x125x80xX.jpg", "precio" => 6),
            array("nombre" => "Flan de huevo", "url" => "https://static.hogarmania.com/archivos/201808/esec0016nv17-flan-125x125x80xX.jpg", "precio" => 6.5),
        )
    );

    $contador = 0;

    echo "<table> <tr><td >Menu numero</td> <td >Primer plato</td><td >foto</td><td >Precio</td>
    <td >Segundo plato</td><td >foto</td><td>Precio</td><td>Postre</td><td>foto</td>
    <td>Precio</td><td>Total (20% desc.)</td>
    </tr>";

    $contadorMenu = 1;
    //3 bucles anidados para crear los menus con cada producto.
    for ($i = 0; $i < count($menu["primero"]); $i++) {
 
        for ($j = 0; $j < count($menu["segundo"]); $j++) {
            for ($k = 0; $k < count($menu["postre"]); $k++) {

                $precioP = $menu["primero"][$i]["precio"];
                $precioS = $menu["segundo"][$j]["precio"];
                $precioL = $menu["postre"][$k]["precio"];

                $rutaP = $menu["primero"][$i]["url"];
                $rutaS = $menu["segundo"][$j]["url"];
                $rutaL = $menu["primero"][$k]["url"];

                $total = ($precioP + $precioS + $precioL) - ((($precioP + $precioS + $precioL) * 20) / 100);

                //Cada pasada es una fila.
                echo "<td>" . $contadorMenu . "</td>";
                echo "<td>" . $menu["primero"][$i]["nombre"] . "</td>";
                echo "<td><img src='$rutaP'></td>";
                echo "<td>" . $precioP . "€</td>";

                echo "<td >" . $menu["segundo"][$j]["nombre"] . "</td>";
                echo "<td><img src='$rutaS'></td>";
                echo "<td>" . $precioS . "€</td>";

                echo "<td>" . $menu["postre"][$k]["nombre"] . "</td>";
                echo "<td><img src='$rutaL'></td>";
                echo "<td>" . $precioL . "€</td>";

                echo "<td>$total" . "€</td>";
                echo "</tr>";

                $contadorMenu++;
            }
        }
        echo "</tr>";
    }

    echo "</table>";
    ?>
    

</body>
</html>