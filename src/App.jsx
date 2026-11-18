import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Awards from './components/Awards';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <ScrollProgress />
        <div className="atmosphere" aria-hidden="true" />
        <div className="bg-grid" aria-hidden="true" />
        <Header />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Awards />
          <About />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}