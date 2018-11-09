<?php

	if(!isset($_POST['cerrar']))
		header("Location: index.php");
	else{
		session_start();
		session_unset();
	 	session_destroy();
	 	session_start();
	 	session_regenerate_id(true);
		header("Location: index.php");
	 	
	}
?>