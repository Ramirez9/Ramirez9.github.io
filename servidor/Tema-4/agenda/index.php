<?php
/**
 * 
 * Agenda controlada con sesiones para guardar nombre y teléfono
 * 
 * @author Francisco Ramírez Ruiz
 * @copyright  2018-2019 
 * @version 1.0
 * @category index.php
 * @package  agenda
 */
if (isset($_GET['codigo'])) {
    highlight_file(__FILE__);
    exit;
}

	session_start();

	include 'top.php';

	/**
	 * Si la sesion está vacía, creo una nueva
	 */
	if(empty($_SESSION['agenda']))
		$_SESSION['agenda']=array();

    $nombre=$telefono=""; 

?>
	<div><h2>Agenda</h2></div>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
		<label>Buscar</label>
		<input type="text" name="textoAbuscar">	
		<input type="submit" name="buscar" value="Buscar">
	</form>
	<br><br>
	<!-- Llamo a anadir.php para añadir un contacto nuevo -->
	<form method="post" action="anadir.php">
		<input type="submit" name="anadir" value="Añadir">
	</form>
	<br><br>
	<!-- Llamo a cerrarSesion para borrar la agenda -->
	<form method="post" action="cerrarSesion.php">
		<input type="submit" name="cerrar" value="Borrar agenda">
	</form>
	<br><br>
	<table> 
    <h4>Nombre y teléfono</h4>
    <div><?php
	/**
	 * Recorro la agenda dando una fila a cada nombre y teléfono.
	 */
    	foreach ($_SESSION['agenda'] as $key => $value) {
	 
	        echo "</tr>";  
	        echo "<td>".$value['nombre']."</td>"; 
	        echo "<td>".$value['telefono']." </td>";
        }

    ?>
    </div>
    </table>

	<?php
	/**
	 * Botón buscar.
	 * Si el contenido tiene el nombre, encontrada.
	 */
	if(isset($_POST['buscar'])){
		foreach ($_SESSION['agenda'] as $key => $value) {
			if($_POST['textoAbuscar']==$value['nombre']){
				echo "</br>";
				echo "<h4>Encontrada coincidencia</h4>";
				echo $value['nombre']." "; 
	        	echo $value['telefono'];
	        }
	    }
	}
	?>

	<h1><a href="../../../../servidor/Tema-4/agenda/index.php?codigo" target ="_blank">Ver código</a></h1>
<?php
	include 'bot.php';
?>