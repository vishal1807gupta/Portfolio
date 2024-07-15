import { useEffect, useState } from "react";
import Home from "./sections/Home";
import Navbar from "./sections/Navbar";
import About from "./sections/Education";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Certification from "./sections/Certification";
import Ranking from "./sections/Ranking";

function App() {
  const [dark, setDark] = useState(true);
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => setSplash(false), 1500);
  }, []);
  return (
    <>
      {
        splash ? (
          <div className={`${splash && 'w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden bg-black'}`}>
            <div className={`w-[80vw] md:w-[50vw] splash  shadow-md`}>
              <img src={require('./assets/VG.png')} className="aspect-video w-full" alt="Vishal Gupta" />
            </div>
          </div>
        ) : (
          <div className={`text-3xl w-full  ${dark ? 'dark ' : 'light'} overflow-hidden`}>
              
              <div className="fixed w-full z-[100] top-6  px-2">
                <Navbar dark={dark} setDark={setDark} />
              </div>
            <Home dark={dark} />
            <About dark={dark} />
            <Projects dark={dark} />
            <Certification dark={dark} />
            <Ranking dark={dark} />
            <Contact dark={dark} />
            <Footer dark={dark} />
          </div>
        )
      }
    </>



  );
}

export default App;
