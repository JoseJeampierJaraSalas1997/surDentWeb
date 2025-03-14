import React from "react";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          {/* Botón para menú responsive */}
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-menu"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          {/* Logo */}
          <a className="navbar-brand page-scroll" href="#page-top" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="img/logo.png"
              alt="surDent Logo"
              style={{
                maxHeight: "80px",
                width: "auto",
                maxWidth: "200px", 
                objectFit: "contain", 
                display: "block"
              }}
            />
          </a>


        </div>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="nav navbar-nav navbar-right">
            {[
              { href: "#features", label: "Características" },
              { href: "#about", label: "Acerca de" },
              { href: "#services", label: "Servicios" },
              { href: "#portfolio", label: "Galería" },
              { href: "#testimonials", label: "Testimonios" },
              { href: "#contact", label: "Contacto" },
              { href: "https://e-comerce-firease-next.vercel.app/uikit/list", label: "Productos", external: true },
            ].map(({ href, label, external }) => (
              <li key={href}>
                <a href={href} className="page-scroll" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
