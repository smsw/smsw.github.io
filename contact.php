<?php
/**
 * Created by michaelwatts
 * Date: 20/12/2013
 * Time: 12:47
 */

$file = "report/emails.txt";
$email = $_POST["email"] . "\n";
file_put_contents($file, $email, FILE_APPEND | LOCK_EX);

