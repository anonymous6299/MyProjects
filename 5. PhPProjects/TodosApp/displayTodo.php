<?php 
include("connect.php");
$query = "SELECT * FROM `todos`";
$result=$conn->query($query);
if ($result->num_rows>0) {
    while($row = $result->fetch_assoc()){
        echo '<div class="card me-3 my-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">'.($row['title']).'</h5>
            <p class="card-text">'.($row['description']).'</p>
        </div>
        <div class="d-flex w-full justify-content-between mx-3 mb-3">
            <a href=/TodosApp/updateTodo.php?sno='.$row['sno'].'>
            <button type="button" class="btn btn-outline-dark btn-sm">Update</button>
            </a>
            <a href=/TodosApp/deleteTodo.php?sno='.$row['sno'].'>
            <button type="button" class="btn btn-outline-dark btn-sm">Delete</button>
            </a>
        </div>
    </div>';
    }
}
else{
    echo "<p>No todos added.</p>";
}
$conn->close();
?>