import React from "react";

const NavBar = () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg bg-light nav-bar-masalla">
            <div className="container-fluid">
                <a className="navbar-brand" href="#hero">
                    <img src="fotos mas alla/masalla.jpg" alt="No image motherfucker"/>
                </a>
                <a className="navbar-brand logo" href="#hero">Más Allá</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#somos-masalla">Nosotros</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#nuestras-actividades">Actividades</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#Donaciones">Donaciones</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#financiacion">Financiación</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#patrocinadores">Patrocinadores</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
  );
};

export default NavBar;