<?php
$con= mysql_connect("localhost","root","");
mysql_select_db("review",$con);
mysql_error("connection error");
?>