import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ProfessionalExperience } from './components/ProfessionalExperience';
import { WebDevExperience } from './components/WebDevExperience';
import { Projects } from './components/Projects';
import { CareerTransition } from './components/CareerTransition';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProfessionalExperience />
        <WebDevExperience />
        <Projects />
        <CareerTransition />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
