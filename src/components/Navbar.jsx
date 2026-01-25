import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container nav">
        <span className="logo">DigitalStudio</span>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setOpen(false)}>Servicios</a>
          <a href="#proyectos" onClick={() => setOpen(false)}>Proyectos</a>
          <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Navbar;
