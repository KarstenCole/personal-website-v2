import AboutMe from "./pages/about-me/AboutMe.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Home from "./pages/home/Home.tsx";
import Projects from "./pages/projects/Projects.tsx";
import WorkHistory from "./pages/work-history/WorkHistory.tsx";
import NameLogo from "./components/ui/NameLogo.tsx";
import Background from "./components/background/Background.tsx";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

function App() {
  const [introAnimationComplete, setIntroAnimationComplete] = useState(false);
  const handledScroll = useRef(false);
  history.scrollRestoration = "manual";
  const [page, setPage] = useState("Home");
  const [highlight, setHighlight] = useState(true);

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
        // const offset = ScrollSmoother.offset();
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
          .to(window, {
            scrollTo: "#projects",
            duration: 1,
            onStart: () => {
              setPage("Main");
              setHighlight(false);
            },
          })
          .to(
            "#beam2",
            {
              rotate: -25,
              x: "-=780",
            },
            "<"
          )
          .to(
            "#beam3",
            {
              x: "-=450",
            },
            "<"
          )
          .to(
            "#beam4",
            {
              rotate: -25,
              x: "+=100",
            },
            "<"
          )
          .to(
            "#beam5",
            {
              x: "+=150",
            },
            "<"
          )
          .to(window, {
            duration: 0,
            onComplete: () => {
              setIntroAnimationComplete(true);
              elements.forEach((element) => {
                element.classList.add("overflow-hidden");
              });
              console.log("removed element");
            },
          })
          .to("#down-arrow", {
            duration: 0,
            y: "-=50",
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
      <NameLogo id="name-logo" color={highlight}></NameLogo>
      <Background page={page}>
        <Home></Home>
        <AboutMe></AboutMe>
        <Projects id="projects"></Projects>
        <WorkHistory></WorkHistory>
        <Contact></Contact>
      </Background>
    </div>
  );
}

export default App;
