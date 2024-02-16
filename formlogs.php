<?php

if ($_SERVER['REQUEST_METHOD'] == "POST"){
    $fname = htmlspecialchats($_POST['fname']);
    $lname = htmlspecialchars($_POST['lname']);
    $addr = htmlspecialchars($_POST['addr']);
    $city = htmlspecialchars($_POST['city']);
    $state = htmlspecialchars($_POST['country']);
    $zip = htmlspecialchars($_POST['zip']);
    $email = htmlspecialchars($_POST['email']);
    $num = htmlspecialchars($_POST['num']);
}

echo "thank you ";

?>