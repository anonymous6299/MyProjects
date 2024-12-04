<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UpdateTodos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<?php
    include("navbar.php");
?>
<h1 class="text-center mt-5">Update Todo</h1>
<?php
    require("connect.php");
    if (isset($_GET['sno'])) {
        $sno=$_GET['sno'];
        if (isset($_GET['upd']) && isset($_GET['upd'])===true && $_SERVER['REQUEST_METHOD'] == 'POST' ) {
            $title = $_POST["title"];
            $description= $_POST["desc"];
            $query = "UPDATE todos SET title='$title', description='$description' WHERE sno=$sno";
            $result=$conn->query($query);
            if ($result===TRUE) {
                header("Location: index.php?upd=true");
                exit;
            }
        }
        else{
        $query="SELECT * FROM todos WHERE sno=$sno";
        $result=$conn->query($query);
        if ($result->num_rows!=0) {
            while ($row=$result->fetch_assoc()) {
                echo '
                <form class="container mt-5" action="/TodosApp/updateTodo.php?upd=true&sno='.$row["sno"].'" method="post">
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Todo Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" value='.$row['title'].'>
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Todo Desc</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style="resize: none;"
                name="desc">'.$row['description'].'</textarea>
        </div>
        <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-primary">Update</button>
        </div>
        </form>
            ';
        }
    }
        }
}
$conn->close();
?>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>
</html>