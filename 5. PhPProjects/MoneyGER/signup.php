<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MoneyGER - SignUp</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<?php
echo '

<h1 class="text-center" style="margin: 4rem 0px 4rem 0px;">SignUp to MoneyGER</h1>
<form class="container d-flex flex-column justify-content-center" style="width: 40rem;">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input autocomplete="off" type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input autocomplete="off" type="email" class="form-control" id="username" name="username" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input autocomplete="off" type="password" name="password" class="form-control" id="password">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input autocomplete="off" type="password" name="cnfpassword" class="form-control" id="cnfpassword">
  </div>
  <button type="submit" class="btn btn-primary mt-3">SignUp</button>
</form>
';
?>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>  
</body>
</html>