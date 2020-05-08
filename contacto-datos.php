<?php
	$mensaje= "\nNombre: ".$_POST['nombre'];
	$mensaje.= "\nE-mail: ".$_POST['email'];
	$mensaje.= "\nTelefono: ".$_POST['telefono'];
	$mensaje.= "\nConsulta: ".$_POST['consulta'];
	$remitente = $_POST ['email'];
	$asunto = "Mensaje enviado desde Loira web: ".$_POST['nombre'];
	mail("ceci.albero@gmail.com",$asunto,$mensaje,"FROM: $remitente");
	echo "Mensaje enviado. Gracias por contactarse.";
?>
