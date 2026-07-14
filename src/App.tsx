import { ThemeProvider } from './providers/theme-provider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <div className="relative min-h-screen overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
