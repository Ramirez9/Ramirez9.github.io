<?php
/**
 * 
 * Agenda controlada con sesiones para guardar nombre y teléfono
 * 
 * @author Francisco Ramírez Ruiz
 * @copyright  2018-2019 
 * @version 1.0
 * @category procNuevo.php
 * @package  agenda
 */
if (isset($_GET['codigo'])) {
    highlight_file(__FILE__);
    exit;
}
	session_start();

	if(!isset($_POST['enviar'])){
		header("Location: index.php");
	}

	else{
		$contacto['nombre']=$_POST['nombre'];
		$contacto['telefono']=$_POST['telefono'];
		array_push($_SESSION['agenda'],$contacto);
		header("Location: index.php");

	}

?>