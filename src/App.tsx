import './App.css'
import Footer from './components/Footer';
import Galeria from './components/Galeria';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Recursos from './components/Recursos';
import RromSection from './components/RromSection';
import SoftwareLibreSection from './components/SoftwareLibreSection';
import TecnologiaYHumanidad from './components/TecnologiaYHumanidad';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <RromSection />
      <Galeria />
      <SoftwareLibreSection />
      <TecnologiaYHumanidad />
      <Recursos />
      <Footer />
    </>
  )
};

export default App;
