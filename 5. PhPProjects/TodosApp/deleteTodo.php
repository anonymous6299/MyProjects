<?php 
require("connect.php");
if (isset($_GET['sno'])) {
    $sno = $_GET['sno'];
    $query="DELETE FROM todos WHERE sno=$sno";
    $result=$conn->query($query);
    if ($result===TRUE) {
        header("Location: index.php?delete=true");
    }
}
$conn->close();
?>