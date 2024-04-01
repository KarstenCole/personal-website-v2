import AboutMe from "./pages/about-me/AboutMe.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Home from "./pages/home/Home.tsx";
import Projects from "./pages/projects/Projects.tsx";
import WorkHistory from "./pages/work-history/WorkHistory.tsx";
import NameLogo from "./components/ui/NameLogo.tsx";
import Background from "./components/background/Background.tsx";
import { useState, useEffect } from "react";
import gsap from "gsap";
// import IntroSlider from "./pages/home/IntroSlider.tsx";

function App() {
  const [wiggle, setWiggle] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setWiggle(!wiggle);
      console.log("penis");
    }, 2000);
  }, []);

  return (
    <>
      <NameLogo></NameLogo>
      {/* <IntroSlider></IntroSlider> */}
      <Background Wiggle={wiggle}>
        <Home></Home>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <WorkHistory></WorkHistory>
        <Contact></Contact>
      </Background>
    </>
  );
}

export default App;
