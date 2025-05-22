import type React from "react";

const Recursos: React.FC = () => {
    return (
        <section id="recursos" className="py-5 bg-white">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-7 text-center">
                        <h6 className="text-primary fw-bold text-uppercase">Material Complementario</h6>
                        <h2 className="mb-3 fw-bold">Recursos Educativos</h2>
                        <div className="section-divider"></div>
                        <p className="lead">Materiales para profundizar en la comprensión del pueblo Rrom, el software libre y su intersección.</p>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-header bg-primary text-white py-3">
                                <h4 className="mb-0">Pueblo Rrom</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="bi bi-book me-3 text-primary"></i>
                                        <div>
                                            <h5 className="mb-1">Historia y Cultura Gitana</h5>
                                            <p className="mb-0 text-muted">Angus Fraser (2005)</p>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="bi bi-file-text me-3 text-primary"></i>
                                        <div>
                                            <h5 className="mb-1">El Pueblo Rrom en Colombia</h5>
                                            <p className="mb-0 text-muted">Ministerio de Cultura (2022)</p>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="bi bi-film me-3 text-primary"></i>
                                        <div>
                                            <h5 className="mb-1">Documental: Voces Gitanas</h5>
                                            <p className="mb-0 text-muted">Testimonio audiovisual (2018)</p>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="bi bi-globe me-3 text-primary"></i>
                                        <div>
                                            <h5 className="mb-1">PRORROM Colombia</h5>
                                            <p className="mb-0 text-muted">Organización representativa</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-header bg-info text-white py-3">
                                <h4 className="mb-0">Software Libre</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="bi bi-book me-3 text-info"></i>
                                        <div>
                                            <h5 className="mb-1">Software Libre para una Sociedad Libre</h5>
                                            <p className="mb-0 text-muted">Richard Stallman (2004)</p>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="bi bi-file-text me-3 text-info"></i>
                                        <div>
                                            <h5 className="mb-1">La Catedral y el Bazar</h5>
                                            <p className="mb-0 text-muted">Eric S. Raymond (1997)</p>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="bi bi-globe me-3 text-info"></i>
                                        <div>
                                            <h5 className="mb-1">Proyecto GNU</h5>
                                            <p className="mb-0 text-muted">gnu.org - Principios y filosofía</p>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="bi bi-film me-3 text-info"></i>
                                        <div>
                                            <h5 className="mb-1">Revolution OS</h5>
                                            <p className="mb-0 text-muted">Documental sobre Linux (2001)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-header bg-success text-white py-3">
                                <h4 className="mb-0">Tecnología y Cultura</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="bi bi-book me-3 text-success"></i>
                                        <div>
                                            <h5 className="mb-1">Tecnologías para la Inclusión Social</h5>
                                            <p className="mb-0 text-muted">Hernán Thomas (2011)</p>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="bi bi-file-text me-3 text-success"></i>
                                        <div>
                                            <h5 className="mb-1">Decolonizar la Tecnología</h5>
                                            <p className="mb-0 text-muted">Paola Ricaurte (2019)</p>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="bi bi-globe me-3 text-success"></i>
                                        <div>
                                            <h5 className="mb-1">Tecnodiversidad</h5>
                                            <p className="mb-0 text-muted">Yuk Hui (2020)</p>
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex align-items-center">
                                        <i className="bi bi-laptop me-3 text-success"></i>
                                        <div>
                                            <h5 className="mb-1">Soberanía Tecnológica</h5>
                                            <p className="mb-0 text-muted">Alex Haché (ed.) (2014)</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card border-0 bg-light p-4">
                            <div className="card-body">
                                <h4 className="mb-4 text-center">Proyectos Académicos Relacionados</h4>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <div className="feature-icon" style={{ width: "40px", height: "40px", minWidth: "40px" }}>
                                                    <i className="bi bi-journal-code"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5>Inclusión Digital y Comunidades Minoritarias</h5>
                                                <p>Investigaciones sobre cómo las comunidades minoritarias pueden beneficiarse de las tecnologías sin perder su identidad cultural.</p>
                                                <p><i>Ejemplo: <span style={{ color: "blue" }}>Young Roma Women</span></i></p>
                                                <a href="https://skolaromani.org/formacion-digital-post-covid/" target="_blank" className="btn btn-sm btn-outline-primary">Ver proyecto</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <div className="feature-icon" style={{ width: "40px", height: "40px", minWidth: "40px" }}>
                                                    <i className="bi bi-translate"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5>Romaní Digital</h5>
                                                <p>Iniciativa para la preservación digital del idioma romaní mediante herramientas de software libre adaptadas culturalmente.</p>
                                                <p><i>Ejemplo: <span style={{ color: "blue" }}>Haraka Amari Chib</span></i></p>
                                                <a href="https://romanokher.wixsite.com/romanichib/programa-de-estudios-del-romani" target="_blank" className="btn btn-sm btn-outline-primary">Ver proyecto</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3" />

                                    <div className="col-md-6 mb-4">
                                        <br />
                                        <br />
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <div className="feature-icon" style={{ width: "40px", height: "40px", minWidth: "40px" }}>
                                                    <i className="bi bi-stars"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <h5>Patrimonio Cultural Inmaterial y Tecnologías Libres</h5>
                                                <p>Estudio sobre cómo el software libre puede contribuir a la preservación del patrimonio cultural inmaterial.</p>
                                                <p><i>Ejemplo: <span style={{ color: "blue" }}>El Software Libre y las Lenguas Minoritarias</span></i></p>
                                                <a href="https://aulaintercultural.org/2006/07/02/el-software-libre-y-las-lenguas-minoritarias-una-oportunidad-impagable/" target="_blank" className="btn btn-sm btn-outline-primary">Ver proyecto</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <p>¿Tienes algún recurso para compartir o estás trabajando en un proyecto relacionado?</p>
                        <a href="#contacto" className="btn btn-rrom mt-2">Contáctanos</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recursos;