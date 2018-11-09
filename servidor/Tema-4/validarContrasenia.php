<?php

/**
 *FEscribir una función que permita validar contraseñas seguras. Una contraseña segura tiene
 * que tener una longitud mínima de 8 y contener al menos: Una letra minúscula, una letra
 * mayúscula un dígito y un carácter especial.
 * 
 * User: Francisco Ramírez Ruiz
 * File:validarContrasenia.php
 */
if (isset($_GET['codigo'])) {
    highlight_file(__FILE__);
    exit;
}
?>
<?php 
include 'top.php'; 
?>
    
<div>
    <h2>Validar Contraseñas</h2>
</div>

<?php

		$errorFormulario=false;
		$passError="";
		$pass="";
        $msgError="";

        /**
         * Formulario de contraseña para su validación
         */
		if(!isset($_POST['enviar']) || $errorFormulario){?>
			<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
				Contraseña
				<input type="text" name="pass">
				<?php echo $passError;?><br/><br/>
				<input type="submit" name="enviar">
			</form>

			<?php 
		}
        else{?>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
				Contraseña
				<input type="text" name="pass">
				<?php echo $passError;?><br/><br/>
				<input type="submit" name="enviar">
            </form>
            <?php
			if(validar($pass,$msgError))
				echo "Contraseña segura --> ". $pass;
			else
				echo "Contraseña no segura.</br></br>".$msgError;
        }
        
        /**
         * Comprobamos si la contrseña es valida según:
         * 8 caracteres
         * minusculas
         * mayusculas
         * 
         */
        function validar($pass,&$msgError){
            $isValid=true;
            //strlen - lenght de la cadena
            if(strlen($pass)<8){
                $msgError="La contraseña debe tener al menos 8 caracteres";
                $isValid=false;
            }
            //Expresion regular entre `[]`
            if (!preg_match('`[a-z]`',$pass)){
                if($isValid==true){
                    $msgError="La contraseña debe tener al menos una letra minúscula";
                    $isValid=false;
                }
            }
            if (!preg_match('`[A-Z]`',$pass)){
                if($isValid==true){
                    $msgError="La contraseña debe tener al menos una letra mayúscula";
                    $isValid=false;
                }
            }
            if (!preg_match('`[0-9]`',$pass)){
                if($isValid==true){
                    $msgError="La contraseña debe tener al menos un número";
                    $isValid=false;
                }
            }
            return $isValid;
        }
	?>

    <h1><a href="../../servidor/Tema-4/validarContrasenia.php?codigo" target ="_blank">Ver código</a></h1>

<?php include 'bot.php' ?>