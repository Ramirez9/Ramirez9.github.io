<?php
/**
 * 
 * Agenda controlada con sesiones para guardar nombre y teléfono
 * 
 * @author Francisco Ramírez Ruiz
 * @copyright  2018-2019 
 * @version 1.0
 * @category anadir.php
 * @package  agenda
 */
if (isset($_GET['codigo'])) {
    highlight_file(__FILE__);
    exit;
}
	session_start();

	include 'top.php';

	//$contacto=array();

	if(!isset($_POST['anadir']))
		header("Location: index.php");

	else{?>
		<div><h2>Añadir un contacto</h2></div>
		<!-- Llamo a procNuevo.php, realizo un push de nombre y teléfono en la agenda -->
		<form method="post" action="procNuevo.php">
			<label>Nombre: </label>
			<input type="text" name="nombre"><br><br>
			<label>Teléfono: </label>
			<input type="tel" name="telefono"><br><br>
			<input type="submit" name="enviar" value="Añadir contacto">
		</form>
		<br>
		<!-- Vuelvo atrás, index.php -->
		<form method="post" action="index.php">
			<input type="submit" name="volver" value="Volver Atrás">
		</form>
	<?php
	}

	include 'bot.php';
?>