
import type React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-rrom-dark text-white py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6">
            <h4 className="mb-4 fw-bold">Rrom & Software Libre</h4>
            <p>Un proyecto académico que explora la intersección entre la cultura del pueblo Rrom y la filosofía del software libre, desde una perspectiva de ingeniería de software.</p>
            <div className="mt-4">
              <a href="https://github.com/JAGT1806/rrom-software-libre" target="_blank" className="text-white me-3 fs-5" aria-label="Github" >
                <i className="bi bi-github" style={{ fontSize: "3rem"}}></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <h5 className="mb-3">Navegación</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#hero" className="text-decoration-none text-white-50 hover-white">Inicio</a></li>
              <li className="mb-2"><a href="#rrom" className="text-decoration-none text-white-50 hover-white">Pueblo Rrom</a></li>
              <li className="mb-2"><a href="#galeria" className="text-decoration-none text-white-50 hover-white">Galería</a></li>
              <li className="mb-2"><a href="#software" className="text-decoration-none text-white-50 hover-white">Software Libre</a></li>
              <li className="mb-2"><a href="#tecnologia" className="text-decoration-none text-white-50 hover-white">Tecnología</a></li>
              <li><a href="#recursos" className="text-decoration-none text-white-50 hover-white">Recursos</a></li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3">
            <h5 className="mb-3">Enlaces de Interés</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="https://www.gnu.org" className="text-decoration-none text-white-50 hover-white" target="_blank" rel="noopener noreferrer">Proyecto GNU</a></li>
              <li className="mb-2"><a href="https://fsf.org" className="text-decoration-none text-white-50 hover-white" target="_blank" rel="noopener noreferrer">Free Software Foundation</a></li>
              <li className="mb-2"><a href="https://www.mincultura.gov.co" className="text-decoration-none text-white-50 hover-white" target="_blank" rel="noopener noreferrer">Ministerio de Cultura</a></li>
              <li><a href="https://lenguasyliteraturasnativas.caroycuervo.gov.co/el-pueblo-rom-en-colombia/" className="text-decoration-none text-white-50 hover-white" target="_blank" rel="noopener noreferrer">PRORROM Colombia</a></li>
            </ul>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="row">
          <div className="col-md-7 text-center text-md-start">
            <small>&copy; 2025 - Proyecto académico sobre el Pueblo Rrom y el Software Libre - Jhon Alexander Gómez Trujillo</small>
          </div>
          <div className="col-md-5 text-center text-md-end">
            <small>Desarrollado con <i className="bi bi-heart-fill text-danger"></i> utilizando tecnologías libres</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;