import React from "react";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio">
          <img src="/logo192.png" alt="Tejelanas Vivi" width={40} className="me-2" />
          Tejelanas Vivi
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarMain">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navBarMain">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#productos">Productos</a></li>
            <li className="nav-item"><a className="nav-link" href="#aboutus">Quiénes Somos</a></li>
            <li className="nav-item"><a className="nav-link" href="#faq">Preguntas</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
