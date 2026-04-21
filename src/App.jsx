import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Awards from './components/Awards';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <About />
          <Awards />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}