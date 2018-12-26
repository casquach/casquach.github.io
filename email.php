<?php

if(isset($_POST['submit'])) {

$name = $_POST['name'];
$to = "cassieq120@gmail.com";
$subject = $_POST['subject'];
$email = $_POST['email'];
$txt = $_POST['message'];
$headers = "From: " .$email . "\r\n";
$finalstring = "Name: " . $name . "\n" . "Message: " . $txt;
mail($to, $subject, $finalstring, $headers);
header("Location: contact_ty.html");

}
?>