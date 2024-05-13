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

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

function App() {
  history.scrollRestoration = "manual";
  const [page, setPage] = useState("Home");
  const [highlight, setHighlight] = useState(true);

  ScrollTrigger.normalizeScroll(true);

  const smoother = ScrollSmoother.create({
    smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  });

  useEffect(() => {
    //TODO finishin the scrubbing animation
    const scrollIntroAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "-=80%",
        end: "+=300",
        markers: false,
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
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <NameLogo id="name-logo" color={highlight}></NameLogo>
          <Background page={page}>
            <Home></Home>
            <AboutMe></AboutMe>
            <Projects id="projects"></Projects>
            <WorkHistory></WorkHistory>
            <Contact></Contact>
          </Background>
        </div>
      </div>
    </div>
  );
}

export default App;
