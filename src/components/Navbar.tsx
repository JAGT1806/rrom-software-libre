import type React from "react";

const Navbar: React.FC = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolled navbar-custom">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#hero">
                    <span className="text-warning">R</span>rom & <span className="text-info">S</span>oftware <span className="text-success">L</span>ibre
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link px-3" href="#rrom">Pueblo Rrom</a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="#galeria">Galería</a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="#software">Software Libre</a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="#tecnologia">Tecnología</a></li>
                        <li className="nav-item"><a className="nav-link px-3" href="#recursos">Recursos</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;