<?php
require_once 'config.php';

$data = json_decode(file_get_contents("php://input"));
$fstname = mysql_real_escape_string($data->fstname);
$lstname = mysql_real_escape_string($data->lstname);
$email=mysql_real_escape_string($data->email);
$password=mysql_real_escape_string($data->password);
$mobile=mysql_real_escape_string($data->mobile);

mysql_query("INSERT INTO signup (FName,LName,email,password,mob) VALUES ('$fstname', '$lstname','$email','$password','$mobile')"); 
Print "Your information has been successfully added to the database."; 

?>