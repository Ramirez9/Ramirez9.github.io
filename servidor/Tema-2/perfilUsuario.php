<?php
    /**
     * User: Francisco Ramírez Ruiz
     * File: perfilUsuario.php
     * Description: Lista de enlaces en función del perfil de usuario
     */
    if(isset($_GET['codigo'])){highlight_file(__FILE__); exit;}
?>
<?php include 'top.php'?>

    <h2>Perfil Usuario</h2>

    <?php
    
        $perfil="usuario";
      
        echo "Estás como: " .$perfil;
        echo "<br>";
        //Con strcmp comparabamos a nivel binario 
        if(strcmp($perfil,"admin")==0)  
            echo "<li>Admin 1</li>
                    <li>Admin 2</li>
                    <li>Admin 3</li>";
        if(strcmp($perfil,"usuario")==0) 
            echo "<li>Usuario 1</li>
                    <li>Usuario 2</li>
                    <li>Usario 3</li>";
    ?>
<h1>
<a href="../../servidor/Tema-2/perfilUsuario.php?codigo" target ="_blank">Ver código</a>
</h1>
<?php include 'bot.php'?>