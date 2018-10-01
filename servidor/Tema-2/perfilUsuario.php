<!DOCTYPE html>
<html lang=es>
<head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista perfil usuarios</title>
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="Francisco Ramírez Ruiz">

    <script src="codigo.js" type ="text/javascript"></script>
    </head>
<body>

    <noscript><h1>Se requiere javascript</h1></noscript>

    <h1>Lista de usuarios.</h1>
    <p>usuario, admin e invitado</p>
    <p>Contraseña: 1234</p>
    <form method="post">

    <p>Usuario: <input type="text" name="usuario" size="20"></p> 
    <p>Contraseña: <input type="password" name="clave" size="15"></p> 
     
    <p><input type="submit" value="Entrar" name="B1"></p> 

    </form>

    <?php
    /**
     * User: Francisco Ramírez Ruiz
     * File: perfilUsuario.php
     * Description: Lista de enlaces en función del perfil de usuario
     */

    // Recibimos los datos del formulario 

    if (isset($_POST["usuario"]) & isset($_POST['clave'])) {
    $usuario = $_POST["usuario"];
    $clave = $_POST["clave"]; 

    // Asignamos los valores para permitir el acceso 

    $usuarioValido = "usuario";
    $adminValido = "admin"; 
    $invitadoValido = "invitado"; 

    $claveValida = "1234"; 

    // Comparamos los datos recibidos con los permitidos 

        if ($usuario == $usuarioValido && $clave == $claveValida)  {  
            echo "<ul>
            <li>Notas</li>
            <li>Faltas</li>
            <li>Horario</li>
            </ul>";  
        }  
     
        if ($usuario == $adminValido && $clave == $claveValida)  {  
            echo "<ul>
                <li>Ver usuarios</li>
                <li>Cambiar notas</li>
                <li>Faltas de asistencia</li>
                <li>Partes</li>
                <li>Examenes</li>
                </ul>";  
        } 

        if ($usuario == $invitadoValido && $clave == $claveValida)  {  
            echo "<ul>
                <li>Crear cuenta</li>
                </ul>";  
        }

    }
    ?>
</body>
</html>