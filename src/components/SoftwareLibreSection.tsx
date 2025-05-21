import type React from "react";

const SoftwareLibreSection: React.FC = () => {
  return (
    <section id="software" className="py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h6 className="text-primary fw-bold text-uppercase">Filosofía Tecnológica</h6>
            <h2 className="mb-3 fw-bold">Software Libre</h2>
            <div className="section-divider"></div>
            <p className="lead">Un movimiento basado en la libertad, la colaboración y el conocimiento compartido para democratizar la tecnología.</p>
          </div>
        </div>
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <img src="https://kzgunea.blog.euskadi.eus/wp-content/uploads/2021/09/software-libre.png" alt="Representación del Software Libre" className="img-fluid rounded-3 shadow-lg" />
          </div>
          <div className="col-lg-6 order-lg-1">
            <h3 className="mb-3">Las Cuatro Libertades Fundamentales</h3>
            <p>El movimiento del software libre, iniciado por Richard Stallman en 1983 con el proyecto GNU, se basa en cuatro libertades esenciales que todo usuario debe tener sobre el software:</p>
            
            <div className="bg-light p-4 rounded-3 mb-4">
              <ol className="mb-0">
                <li className="mb-2"><strong>Libertad 0:</strong> Usar el programa con cualquier propósito.</li>
                <li className="mb-2"><strong>Libertad 1:</strong> Estudiar cómo funciona el programa y adaptarlo a tus necesidades.</li>
                <li className="mb-2"><strong>Libertad 2:</strong> Redistribuir copias para ayudar a otros.</li>
                <li><strong>Libertad 3:</strong> Mejorar el programa y compartir esas mejoras.</li>
              </ol>
            </div>
            
            <p>Estas libertades son la base de un ecosistema tecnológico que promueve la colaboración, la transparencia y la autonomía tecnológica, valores que resuenan profundamente con la cultura del pueblo Rrom.</p>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <div className="card border-0 bg-light p-4">
              <div className="card-body">
                <h4 className="mb-4 text-center">Conexiones entre el Software Libre y la Cultura Rrom</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex">
                      <div className="me-3">
                        <span className="badge rounded-pill bg-primary p-2">1</span>
                      </div>
                      <div>
                        <h5>Autonomía y Libertad</h5>
                        <p>Tanto el pueblo Rrom como el movimiento de software libre valoran profundamente la independencia y el derecho a determinar su propio destino.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <div className="d-flex">
                      <div className="me-3">
                        <span className="badge rounded-pill bg-primary p-2">2</span>
                      </div>
                      <div>
                        <h5>Comunidad y Colaboración</h5>
                        <p>Ambos se basan en estructuras comunitarias sólidas donde el compartir conocimientos y recursos es fundamental.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <div className="d-flex">
                      <div className="me-3">
                        <span className="badge rounded-pill bg-primary p-2">3</span>
                      </div>
                      <div>
                        <h5>Resistencia a Sistemas Cerrados</h5>
                        <p>Históricamente, ambos han resistido la imposición de estructuras cerradas y excluyentes desde posiciones de poder.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <div className="d-flex">
                      <div className="me-3">
                        <span className="badge rounded-pill bg-primary p-2">4</span>
                      </div>
                      <div>
                        <h5>Adaptabilidad y Evolución</h5>
                        <p>La capacidad de adaptarse y evolucionar sin perder su esencia es característica común de ambos.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://linuxforallsite.wordpress.com/wp-content/uploads/2018/02/gnulinux-logo.png" className="card-img-top" alt="Distribuciones Linux" />
              <div className="card-body">
                <h4 className="card-title">GNU/Linux</h4>
                <p className="card-text">El sistema operativo libre más utilizado, con cientos de distribuciones adaptadas a diferentes necesidades. Representa la alternativa libre a los sistemas propietarios.</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://cedec.intef.es/wp-content/uploads/2018/09/24-herramientas-software-libre.png" className="card-img-top" alt="Proyectos de Software Libre" />
              <div className="card-body">
                <h4 className="card-title">Herramientas Libres</h4>
                <p className="card-text">Alternativas libres para prácticamente cualquier necesidad: LibreOffice, GIMP, Inkscape, Blender, Firefox y miles de programas más que respetan la libertad del usuario.</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src="https://osl.ugr.es/wp-content/uploads/2018/03/cc_tira_004-300x300.jpg" className="card-img-top" alt="Comunidad de Software Libre" />
              <div className="card-body">
                <h4 className="card-title">Comunidad Global</h4>
                <p className="card-text">Una red internacional de desarrolladores, traductores, diseñadores y usuarios que colaboran para crear tecnología que respete la libertad y promueva el conocimiento compartido.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-12 text-center">
            <div className="quote mx-auto" style={{maxWidth: "800px"}}>
              "El software libre es una cuestión de libertad, no de precio. Para entender el concepto, debes pensar en 'libre' como en 'libertad de expresión', no como en 'cerveza gratis'." - Richard Stallman
            </div>
            <a href="#tecnologia" className="btn btn-rrom mt-4">Explorar Tecnología y Humanidad</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareLibreSection;