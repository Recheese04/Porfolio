import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { TechStack } from "./components/sections/TechStack";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { AiWorkflow } from "./components/sections/AiWorkflow";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto bg-card min-h-screen border-x border-border shadow-sm flex flex-col pt-12">
          <Navbar />

          <main className="flex-grow flex flex-col">
            {/* Top section: Hero */}
            <div className="border-b border-border">
              <Hero />
            </div>

            {/* Grid Layout for main content */}
            <div className="grid grid-cols-1 md:grid-cols-12 flex-grow">

              {/* Left Column (About & Stack) - 5 cols */}
              <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-border flex flex-col">
                <div className="border-b border-border">
                  <About />
                </div>
                <div className="border-b md:border-b-0 border-border flex-grow">
                  <TechStack />
                </div>
              </div>

              {/* Right Column (Experience & Education & AI) - 7 cols */}
              <div className="md:col-span-7 flex flex-col">
                <div className="border-b border-border">
                  <Experience />
                </div>
                <div className="border-b border-border">
                  <Education />
                </div>
                <div>
                  <AiWorkflow />
                </div>
              </div>
            </div>

            {/* Full width bottom sections */}
            <div className="border-t border-border">
              <Projects />
            </div>

            <div className="border-t border-border bg-muted/30">
              <Contact />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
