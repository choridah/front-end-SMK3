<?php 
	$host = "localhost";
	$user = "root";
	$pass = "";
	$db = "smk3-app_db";

	$connects = mysqli_connect($host, $user, $pass, $db);

	if(!$connects) {
		die("Connection Failed: ".mysql_connect_error());
	}
?>