import type React from "react";

const Galeria: React.FC = () => {
  return (
    <section id="galeria" className="py-5 bg-rrom-dark">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h6 className="text-warning fw-bold text-uppercase">Identidad Visual</h6>
            <h2 className="mb-3 fw-bold">Galería Cultural</h2>
            <div className="section-divider"></div>
            <p className="lead">Expresiones visuales que representan la riqueza cultural del pueblo Rrom y su relación con la tecnología y el software libre.</p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-md-4">
            <div className="gallery-img position-relative">
              <img src="https://a.files.bbci.co.uk/worldservice/live/assets/images/2014/12/09/141209014110_gitanosninos.jpg" alt="Celebración tradicional Rrom" className="img-fluid rounded-3 w-100" />
              <div className="position-absolute bottom-0 start-0 p-3 text-white bg-dark bg-opacity-75 rounded-bottom">
                <h5 className="mb-0">Celebración Tradicional</h5>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="gallery-img position-relative">
              <img src="https://artesaniasdecolombia.com.co/Documentos/Contenido/4186_artesanias-rom-mapa-artesanal.jpg" alt="Artesanía Rrom" className="img-fluid rounded-3 w-100" />
              <div className="position-absolute bottom-0 start-0 p-3 text-white bg-dark bg-opacity-75 rounded-bottom">
                <h5 className="mb-0">Artesanía Tradicional</h5>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="gallery-img position-relative">
              <img src="https://plazacapital.co/images/contenidos/esquinas/2015-04-24---Costumbres-del-pueblo-gitano-perdidas-en-el-tiempo_7.jpg" alt="Trajes tradicionales" className="img-fluid rounded-3 w-100" />
              <div className="position-absolute bottom-0 start-0 p-3 text-white bg-dark bg-opacity-75 rounded-bottom">
                <h5 className="mb-0">Vestimenta Cultural</h5>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="gallery-img position-relative">
              <img src="https://comsoc.udg.mx/sites/default/files/img_noticias/170921_taller_igfem-boot_camp_en_el_edificio_de_rectoria_general_de_la_udeg_aa_2.jpg" alt="Taller de software libre" className="img-fluid rounded-3 w-100" />
              <div className="position-absolute bottom-0 start-0 p-3 text-white bg-dark bg-opacity-75 rounded-bottom">
                <h5 className="mb-0">Talleres de Software Libre</h5>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="gallery-img position-relative">
              <img src="https://colombia.iom.int/sites/g/files/tmzbdl1011/files/images/Notas/img_1188mod.jpg" alt="Comunidad Rrom usando tecnología" className="img-fluid rounded-3 w-100" />
              <div className="position-absolute bottom-0 start-0 p-3 text-white bg-dark bg-opacity-75 rounded-bottom">
                <h5 className="mb-0">Tecnología en la Comunidad</h5>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="text-white-50">Las imágenes utilizadas son ilustrativas y representan conceptos relacionados con el pueblo Rrom y el software libre.</p>
            <a href="#recursos" className="btn btn-outline-light mt-3">Ver más recursos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;