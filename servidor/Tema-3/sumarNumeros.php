<?php

/**
 * User: Francisco Ramírez Ruiz
 * File:sumarNumeros.php
 * Description: Pide al usuario cuantos números desea sumar
 */
if (isset($_GET['codigo'])) {
    highlight_file(__FILE__);
    exit;
}
?>
<?php include 'top.php'?>
<h2>Suma de números</h2>
    <form method="post" action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
          
          ¿Cuántos números desea?: <input type="number" name="cantidadNumeros" min ='2' value ="<?php echo $vCantidadNumeros ?>"><span
                  class="errMsg" style = 'color: red'>*</span>
          <br><br>
          <input type="submit" name="enviar" value="Submit">
      </form>
      
      <?php
      echo "<form method='post' action=''>";
      $bandera = false;
      $cantidadNumeros = "";
      $suma = 0;
     
      $errNumero = "Número erróneo";
  
      if (isset($_POST["enviar"])) {
          if ($_POST["cantidadNumeros"] <= 0) {
              $bandera = true;
          } else {
              
              $cantidadNumeros = $_POST["cantidadNumeros"];
              echo "<br><br>";
              for ($i = 0; $i < $cantidadNumeros; $i++) {
                  echo "<br><br>Número " . ($i + 1) . "<input type='number' required='required' name='numeros[]'>
                  <span  style=\"color:red\">* <?php echo $errNumero;?></span>";
              }
  
              echo "<br><br><input type='submit' name='sumar' value='Submit'>";
          }
      }
      if (isset($_POST["sumar"])) {
          $sumandos = $_POST["numeros"];
  
          for ($j = 0; $j < count($sumandos); $j++) {
              $suma = $suma + $sumandos[$j];
          }
          echo "La suma es: " . $suma . "<br><br>";
      }
     echo "</form>";
      ?> 
    <h1><a href="../../servidor/Tema-3/sumarNumeros.php?codigo" target ="_blank">Ver código</a></h1>
<?php include 'bot.php'?>