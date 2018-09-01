<?php
header("Content-type: text/html; charset=UTF-8");

$name = $_POST['user_name'];
$password=$_POST['password'];

$con=mysql_connect('localhost','root','123456');

if(!$con){
	die('error:'.mysql_error());
}

mysql_select_db('db_name');

$result=mysql_query("select * from users where user_name='$name'");

	if($row=mysql_fetch_array($result)){
		if($row['password']==$password){
			echo 2;
		}else{
			echo 3;
		}
	}else{
		echo 4;
	}
           
