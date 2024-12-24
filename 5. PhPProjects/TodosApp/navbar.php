<?php 
$uri = $_SERVER['REQUEST_URI'];
echo '
<nav class="navbar navbar-expand-lg bg-primary navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/TodosApp">TodosApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link '.($uri=='/TodosApp/' ? 'active' : '').'" aria-current="page" href="/TodosApp">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link '.($uri=='/TodosApp/about.php' ? 'active' : '').'" href="/TodosApp/about.php">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>'
?>