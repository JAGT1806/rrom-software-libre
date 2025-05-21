import type React from "react";

const Hero: React.FC = () => {
    return (
        <section id="hero" className="vh-100 d-flex align-items-center justify-content-center bg-primary text-white text-center">
            <div className="px-3">
                <h1 className="display-4 fw-bold">Pueblo Rrom y Software Libre</h1>
                <p className="lead">Una mirada crítica desde la ingeniería de software</p>
            </div>
        </section>
    );
};

export default Hero;