<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File: notasDaw.php
     * Description: Nota de los alumnos de 2º DAW para el módulo DWES
     */
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}  
?>

<?php include 'top.php'?>
    <?php
    $alumno = array("Jesús Mejias Leiva", "José María Romero Ruiz", "Marcos Gallardo Pérez", "Francisco Ramírez Ruiz", 
    "Mario Navarro Madrid", "Rafael García Zurita", "Guillermo Boquizo Sánchez", "José Manuel Bravo Martínez",
     "Angelo Barbara", "José Rafael Álvarez Espino", "Javier González Guzmán", 
     "Rafael Sojo");
   
    echo "<table style='border: 5px solid; '>";


    echo "<td></td>";

    //1ev 2ev y 3ev
    for ($i = 1; $i <= 3; $i++) {
        echo "<td style='border: 1px solid;'>" . $i . " Ev </td>";
        
    }
    echo "<td style='border: 1px solid;'> Nota final</td>";

    //genero las notas aleatoriamente de 1ev 2ev 3ev y de nota final
    for ($i = 0; $i < count($alumno); $i++) {

        echo "<tr>"; 
        echo "<td style='border: 1px solid; '>" .  $alumno[$i] . "</td>";
        for ($j = 0; $j <= 3; $j++) {
     
            echo "<td>" .  $random = rand(5,10) . "</td>";
           
        }
      
        echo "</tr>";
    }

    echo "</table>"
    ?>
     <h1><a href="../../servidor/Tema-3/notasDaw.php?codigo" target ="_blank">Ver código</a></h1>

<?php include 'bot.php'?>