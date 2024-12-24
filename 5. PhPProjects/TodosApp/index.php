<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PhPTodos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
<?php
    include("navbar.php");
?>
    <h1 class="text-center mt-4">PhPTodosApp</h1>
    <form class="container mt-4" action="/TodosApp/addTodo.php" method="post">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Todo Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Todo Desc</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style="resize: none;"
                name="desc"></textarea>
        </div>
        <div class="d-flex justify-content-end"><button type="submit" class="btn btn-primary">Submit</button></div>
    </form>
    <div class="container">
        <h2>All Todos</h2>
        <div class="d-flex w-full jusify-content-center flex-wrap">
        <?php
        include("displayTodo.php");
        ?>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>

</html>