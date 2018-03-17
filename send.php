<?php
// Mail de salida - Si es donweb debe ser un mail creado en el mismo hosting.
$mailFrom = "mailfrom@buterm.com.ar";
// Mail destinatario (Cliente)
$MailToAddress = "clientmail@buterm.com.ar";
$MailToAddress = "javzero1@gmail.com";

//=====================================================

$MailSubject      = "Mensaje desde la web";

if (! isset($MailFromAddress) ) {
	$MailFromAddress = $mailFrom;
}

$Header = "Contacto desde la Web";
$Message = $Footer = "";

if (!is_array($_POST))
	return;
	reset($_POST);

// Genera un mensaje personalizado.
$Message  = "Nombre/Empresa: ".stripslashes($_POST['name'])." \n";
$Message .= "Tel.: ".stripslashes($_POST['tel'])." \n";
$Message .= "E-Mail: ".stripslashes($_POST['email'])." \n";
$Message .= "Consulta/Mensaje: ".stripslashes($_POST['message'])." \n";

if ($Header) {
	$Message = $Header."\n\n".$Message."\n\n";
}

// $REMOTE_USER = (isset($_SERVER["REMOTE_USER"]))?$_SERVER["REMOTE_USER"]:"";
$REMOTE_ADDR = (isset($_SERVER["REMOTE_ADDR"]))?$_SERVER["REMOTE_ADDR"]:"";
// $Message .= "REMOTE USER: ". $REMOTE_USER."\n";
$Message .= "I.P del contacto: ". $REMOTE_ADDR."\n";

if ($Footer) {
	$Message .= "\n\n".$Footer;
}

try {
	mail( "$MailToAddress", "$MailSubject", "$Message", "From: $MailFromAddress");
	header('Location: index.php?send=success');
	die();
} catch (Exception $e) {
	header('Location: error.php?send=error');
	die();
}

function ValidarDatos($campo){
	//Array con las posibles cabeceras a utilizar por un spammer
	$badHeads = array("Content-Type:",
	"MIME-Version:",
	"Content-Transfer-Encoding:",
	"Return-path:",
	"Subject:",
	"From:",
	"Envelope-to:",
	"To:",
	"bcc:",
	"cc:");
	//Comprobamos que entre los datos no se encuentre alguna de
	//las cadenas del array. Si se encuentra alguna cadena se
	//dirige a una página de Forbidden
		foreach($badHeads as $valor){
			if(strpos(strtolower($campo), strtolower($valor)) !== false){
				header( "HTTP/1.0 403 Forbidden");
			exit;
		}
	}
}

ValidarDatos($_POST['email']);
ValidarDatos($_POST['asunto']);
ValidarDatos($_POST['mensaje']);

