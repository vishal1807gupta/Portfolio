import { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={`text-3xl w-full pt-10 ${dark?'dark':'light'}`}>
      <div className="fixed w-full z-[100]  top-0 bg-black">
        <Navbar dark={dark} setDark={setDark} />
      </div>
      <Home dark={dark} />
      <About dark={dark} />
      <Projects dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}

export default App;
