const isHome =
  location.pathname === "/" || location.pathname === "/index.html";
const homePrefix = isHome ? "" : "../";

document.write(`    
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary rounded"
      aria-label="navegar"
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-opciones"
          aria-controls="navbar-opciones"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-md-center"
          id= "navbar-opciones"
        >
          <ul class="navbar-nav">
            <!-- Inicio -->
            <li class="nav-item"><a class="nav-link" href="${homePrefix}index.html">Inicio</a></li>
            <!-- Redireccion a Servicios -->
            <li class="nav-item"><a class="nav-link" href="${homePrefix}servicios/index.html">Servicios</a></li>
            <!-- Redireccion a Contactos -->
            <li class="nav-item"><a class="nav-link" href="${homePrefix}contacto/index.html">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
    `);