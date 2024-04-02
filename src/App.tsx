import AboutMe from "./pages/about-me/AboutMe.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Home from "./pages/home/Home.tsx";
import Projects from "./pages/projects/Projects.tsx";
import WorkHistory from "./pages/work-history/WorkHistory.tsx";
import NameLogo from "./components/ui/NameLogo.tsx";
import Background from "./components/background/Background.tsx";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
// import IntroSlider from "./pages/home/IntroSlider.tsx";

function App() {
  const [introAnimationComplete, setIntroAnimationComplete] = useState(false);
  const handledScroll = useRef(false);
  history.scrollRestoration = "manual";

  useLayoutEffect(() => {
    if (!introAnimationComplete) {
      window.scrollTo(0, 0);
    }
  }, [introAnimationComplete]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("*:not(* > *)");
      if (!introAnimationComplete && !handledScroll.current) {
        handledScroll.current = true;

        //animation
        const introAnimation = gsap.timeline();
        introAnimation
          .to(["#down-arrow-dot2", "#down-arrow-dot1", "#down-arrow-head"], {
            y: "-=100",
            duration: 0.5,
            stagger: 0.1,
            ease: "power1.inOut",
          })
          .to("#down-arrow", {
            duration: 0.4,
            ease: "power1.in",
            y: "+=150",
          })
          .to("#body", {
            scrollTop: "#projects",
          })
          .to(window, {
            duration: 0,
            onComplete: () => {
              setIntroAnimationComplete(true);
              elements.forEach((element) => {
                element.classList.add("overflow-hidden");
              });
              console.log("removed element");
            },
          });
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.addEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [introAnimationComplete]);

  return (
    <div id="page">
      <NameLogo id="name-logo"></NameLogo>
      <Background>
        <Home></Home>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <WorkHistory></WorkHistory>
        <Contact></Contact>
      </Background>
    </div>
  );
}

export default App;
