import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certification from "./components/Certification";
import Ranking from "./components/Ranking";

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
              <img src={require('./assets/DeepanshuSinghal.png')} className="aspect-video w-full" alt="Deepanshu Singhal" />
            </div>
          </div>
        ) : (
          <div className={`text-3xl w-full pt-10 ${dark ? 'dark' : 'light'} overflow-hidden`}>
            <div className="fixed w-full z-[100]  top-0 bg-black">
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
