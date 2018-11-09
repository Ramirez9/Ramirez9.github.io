<?php
/**
 *Maqueta utilizando php una de las siguientes plantillas html:
 * https://www.freehtml5templates.com/template/cattemplate/
 * 
 * User: Francisco Ramírez Ruiz
 * File:index.php
 */
if (isset($_GET['codigo'])) {
    highlight_file(__FILE__);
    exit;
}
?>
<?php 
include 'includes/top.php'
?>
<?php 
include 'includes/body.php'
?>
<?php
include 'includes/bot.php'
?>
<h1><a href="../../../../servidor/Tema-4/MaquetaCafe/index.php?codigo" target ="_blank">Ver código</a></h1>

