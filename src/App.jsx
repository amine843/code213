import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Projects from "./sections/Project";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
