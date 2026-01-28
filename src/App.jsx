import Header from "./components/header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
