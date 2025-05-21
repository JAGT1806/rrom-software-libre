import type React from "react";

const TecnologiaYHumanidad: React.FC = () => {
  return (
    <section id="tecnologia" className="py-5 bg-rrom-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h6 className="text-primary fw-bold text-uppercase">Reflexión Crítica</h6>
            <h2 className="mb-3 fw-bold">Tecnología y Humanidad</h2>
            <div className="section-divider"></div>
            <p className="lead">La intersección entre el avance tecnológico y los valores humanos fundamentales en contextos culturales diversos.</p>
          </div>
        </div>
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img src="https://blog.eventis.pro/wp-content/uploads/2018/03/cultura-tecnologia.jpg" alt="Tecnología y cultura" className="img-fluid rounded-3 shadow-lg" />
          </div>
          <div className="col-lg-6">
            <h3 className="mb-3">El Dilema Tecnológico Contemporáneo</h3>
            <p>En la era digital actual, es fundamental cuestionar cómo la tecnología afecta nuestra humanidad. Lejos de deshumanizarnos, la tecnología puede amplificar nuestras capacidades cuando se utiliza con sentido crítico y ético.</p>
            <p>La inteligencia artificial, los sistemas de software libre y las tecnologías abiertas tienen el potencial de convertirse en herramientas de inclusión que respeten la diversidad cultural y fomenten la equidad.</p>
            <p>Para comunidades históricamente marginadas como el pueblo Rrom, el acceso a tecnologías libres representa una oportunidad para preservar su cultura mientras participan en el mundo digital en sus propios términos.</p>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <div className="card border-0 h-100 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title mb-3">Preguntas desde la Ingeniería</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent">¿Para quién construimos software y con qué propósito?</li>
                  <li className="list-group-item bg-transparent">¿Qué valores están embebidos en nuestro código?</li>
                  <li className="list-group-item bg-transparent">¿Cómo aseguramos que la tecnología sea accesible para todos?</li>
                  <li className="list-group-item bg-transparent">¿De qué manera el software puede respetar diversas visiones culturales?</li>
                  <li className="list-group-item bg-transparent">¿Cómo evitar la imposición cultural a través de la tecnología?</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card border-0 h-100 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title mb-3">Tecnología Culturalmente Sensible</h4>
                <p>Una tecnología que respeta la diversidad cultural debe considerar:</p>
                <div className="d-flex mb-3">
                  <div className="feature-icon me-3" style={{width: "40px", height: "40px", minWidth: "40px"}}>
                    <i className="bi bi-translate"></i>
                  </div>
                  <div>
                    <h5>Multilingüismo</h5>
                    <p>Soporte para lenguas minoritarias como el romaní, permitiendo la preservación lingüística.</p>
                  </div>
                </div>
                
                <div className="d-flex mb-3">
                  <div className="feature-icon me-3" style={{width: "40px", height: "40px", minWidth: "40px"}}>
                    <i className="bi bi-people"></i>
                  </div>
                  <div>
                    <h5>Diseño Participativo</h5>
                    <p>Incluir a las comunidades en el proceso de diseño y desarrollo tecnológico.</p>
                  </div>
                </div>
                
                <div className="d-flex">
                  <div className="feature-icon me-3" style={{width: "40px", height: "40px", minWidth: "40px"}}>
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div>
                    <h5>Soberanía de Datos</h5>
                    <p>Respetar el derecho de las comunidades a controlar su información digital.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-12">
            <div className="bg-white p-4 rounded-3 shadow-sm">
              <h4 className="mb-4 text-center">Proyectos Inspiradores</h4>
              <div className="row">
                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="text-center">
                    <div className="feature-icon mx-auto mb-3">
                      <i className="bi bi-globe"></i>
                    </div>
                    <h5>Indigenous Language Keyboards</h5>
                    <p>Desarrollos de teclados virtuales para lenguas indígenas, incluyendo variantes del romaní.</p>
                  </div>
                </div>
                
                <div className="col-md-4 mb-3 mb-md-0">
                  <div className="text-center">
                    <div className="feature-icon mx-auto mb-3">
                      <i className="bi bi-book"></i>
                    </div>
                    <h5>Archivos Culturales Digitales</h5>
                    <p>Repositorios de conocimiento tradicional gestionados por las propias comunidades.</p>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="text-center">
                    <div className="feature-icon mx-auto mb-3">
                      <i className="bi bi-laptop"></i>
                    </div>
                    <h5>Radio Comunitaria Libre</h5>
                    <p>Emisoras basadas en software libre que permiten difundir lengua y cultura.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="quote mx-auto" style={{maxWidth: "800px"}}>
              "La tecnología más poderosa es aquella que libera en lugar de restringir, que amplifica nuestras capacidades humanas y respeta la diversidad de nuestras experiencias."
            </div>
            <a href="#recursos" className="btn btn-rrom mt-3">Explorar Recursos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TecnologiaYHumanidad;