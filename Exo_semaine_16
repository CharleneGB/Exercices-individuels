<?php
session_start();

//Etape 1 
if (isset($_GET['first_name'])){
    echo 'Bonjour ' .htmlspecialchars($_GET['first_name']) .' !';
}

else if (isset($_POST['first_name'])){
    $_SESSION['first_name'] = $_POST['first_name'];
    echo 'Bonjour ' .htmlspecialchars($_SESSION['first_name']) .' !';
 }
else if(isset($_SESSION['first_name'])){
    echo 'Bonjour ' .htmlspecialchars($_SESSION['first_name']) .' !';
    unset($_SESSION['first_name']);
}

 else  {
     echo 'Bonjour anonyme !';
 }



?>

<!-- <--Etape 2-->
<form action="exercice.php" method="post">
 <p>Votre nom : <input type="text" name="first_name" /></p>
 <p><input type="submit" value="OK"></p>
</form>

<form action="exercice.php" method="session">
 <p><input type="submit" value="Reset"></p>
</form>
