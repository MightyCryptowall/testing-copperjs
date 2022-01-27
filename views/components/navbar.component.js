const NavbarComponent = () => {
  return `
  <nav class="navbar navbar-expand-lg navbar-dark  fixed-top" style="background-color:#333;">
  <div class="container-md">
    <a class="navbar-brand" href="/">Rick And Morty</a>
   
    <div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbar-content">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/about">About</a>
        </li>
      </ul>
    </div>
  </div>
  </div>
  </nav>`;
};

export default NavbarComponent;
