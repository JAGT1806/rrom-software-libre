import type React from "react";

const RromSection: React.FC = () => {
  return (
    <section id="rrom" className="py-5 bg-rrom-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h6 className="text-primary fw-bold text-uppercase">Cultura e Historia</h6>
            <h2 className="mb-3 fw-bold">El Pueblo Rrom</h2>
            <div className="section-divider"></div>
            <p className="lead">Una cultura ancestral con más de mil años de historia, resistencia y preservación de sus tradiciones.</p>
          </div>
        </div>
        
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img src="https://www.kennedy.gov.co/sites/kennedy.gov.co/files/styles/banner-noticia-sgd/public/Noticias/festival_rrom.png?itok=GPGeAsZk" alt="Celebración cultural Rrom" className="img-fluid rounded-3 shadow-lg" />
          </div>
          <div className="col-lg-6">
            <h3 className="mb-3">Identidad y Legado</h3>
            <p>El pueblo Rrom, también conocido como gitano, posee una rica herencia cultural que ha sobrevivido a través de los siglos a pesar de la discriminación y marginación histórica. Su origen se remonta a migraciones desde el norte de la India hacia Europa y posteriormente a América.</p>
            <p>En Colombia, el pueblo Rrom fue reconocido oficialmente como grupo étnico en 1999, aunque su presencia en el territorio data de la época colonial. Actualmente existen kumpanias (comunidades) en diversas ciudades del país.</p>
            <div className="quote">
              "Somos un pueblo de tradición oral, nuestra historia se transmite a través de la palabra, la música y la memoria colectiva" <br/>- Dalila Gómez, lideresa Rrom colombiana
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body p-4">
                <div className="feature-icon mx-auto">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h4 className="card-title text-center mb-3">Organización Social</h4>
                <p className="card-text">La estructura social del pueblo Rrom gira en torno a la familia extensa. Las kumpanias (comunidades) y vitsi (clanes) forman el núcleo de su organización, con sistemas propios de autoridad y justicia.</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body p-4">
                <div className="feature-icon mx-auto">
                  <i className="bi bi-chat-quote-fill"></i>
                </div>
                <h4 className="card-title text-center mb-3">Idioma Romaní</h4>
                <p className="card-text">El romaní es la lengua ancestral del pueblo Rrom, con raíces en los idiomas indoarios. A pesar de los desafíos, este idioma ha sobrevivido como un elemento fundamental de la identidad cultural.</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body p-4">
                <div className="feature-icon mx-auto">
                  <i className="bi bi-music-note-beamed"></i>
                </div>
                <h4 className="card-title text-center mb-3">Tradiciones Vivas</h4>
                <p className="card-text">La música, la danza, la artesanía y el comercio tradicional son expresiones culturales que mantienen viva la herencia Rrom. Sus celebraciones familiares y comunitarias preservan rituales ancestrales.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h3 className="mb-4">Historia y Dispersión</h3>
            <div className="timeline">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="timeline-item">
                    <div className="timeline-content">
                      <h5>Siglo X d.C.</h5>
                      <p>Primeras migraciones documentadas desde el norte de la India hacia Persia y posteriormente Europa.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-content">
                      <h5>Siglos XIV-XV</h5>
                      <p>Llegada y expansión por distintos países de Europa, donde fueron recibidos inicialmente como peregrinos.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-content">
                      <h5>Siglo XVI</h5>
                      <p>Primeros registros de presencia Rrom en América, llegando como parte de las expediciones españolas.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-content">
                      <h5>Siglo XX</h5>
                      <p>Persecución durante el Holocausto y posteriores luchas por el reconocimiento de derechos e identidad cultural.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RromSection;