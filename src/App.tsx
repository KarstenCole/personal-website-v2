import AboutMe from "./pages/about-me/AboutMe.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Home from "./pages/home/Home.tsx";
import Projects from "./pages/projects/Projects.tsx";
import WorkHistory from "./pages/work-history/WorkHistory.tsx";
import NameLogo from "./components/ui/NameLogo.tsx";
import Background from "./components/background/Background.tsx";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  history.scrollRestoration = "manual";
  const [page, setPage] = useState("Home");
  const [highlight, setHighlight] = useState(true);

  useEffect(() => {
    //TODO finishin the scrubbing animation
    const scrollIntroAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "-=500",
        end: "+=450",
        markers: true,
        scrub: true,
        onLeaveBack: () => {
          setPage("Home");
          setHighlight(true);
          console.log("whatdahiellll");
        },
      },
    });

    scrollIntroAnimation
      .to(
        "#beam2",
        {
          rotate: -25,
          x: "-=780",
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        "#beam3",
        {
          x: "-=450",
          ease: "power1.inOut",
          onStart: () => {
            setPage("Main");
            setHighlight(false);
          },
        },
        "<"
      )
      .to(
        "#beam4",
        {
          rotate: -25,
          x: "+=100",
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        "#beam5",
        {
          x: "+=150",
          ease: "power1.inOut",
        },
        "<"
      );
  }, []);

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
