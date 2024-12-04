<?php
include("connect.php");
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $title = $_POST["title"];
    $description= $_POST["desc"];
    $query = "INSERT INTO todos(title, description) VALUES('$title', '$description')";
    $result=$conn->query($query);
    if ($result===TRUE) {
        header("Location: index.php?add=true");
    }
}
$conn->close();
?>