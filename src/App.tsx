import AboutMe from "./pages/about-me/AboutMe.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Home from "./pages/home/Home.tsx";
import Projects from "./pages/projects/Projects.tsx";
import WorkHistory from "./pages/work-history/WorkHistory.tsx";
import NameLogo from "./components/ui/NameLogo.tsx";
import Background from "./components/background/Background.tsx";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const [page, setPage] = useState("Home");
  const [highlight, setHighlight] = useState(true);
  const aboutMeAnimation = gsap.timeline({
    onStart: () => {
      !aboutMePage ? setAboutMePage(true) : null;
    },
  });
  const [mainPage, setMainPage] = useState(true);
  const [aboutMePage, setAboutMePage] = useState<boolean>(false);
  const handlingClick = useRef(false);

  // Intro Scroll Animation
  useEffect(() => {
    const scrollIntroAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#page",
        start: "+=500",
        end: "+=450",
        markers: false,
        scrub: true,
        onLeaveBack: () => {
          setPage("Home");
          setHighlight(true);
        },
      },
    });

    scrollIntroAnimation
      .to(
        "#beam2",
        {
          rotate: -25,
          x: "-=780",
          ease: "power1",
        },
        "<"
      )
      .to(
        "#beam3",
        {
          x: "-=450",
          ease: "power1",
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
          ease: "circle",
        },
        "<"
      )
      .to(
        "#beam5",
        {
          x: "+=150",
          ease: "circle",
        },
        "<"
      );
  }, []);

  const handleAboutMeClick = () => {
    const main = mainPage;
    if (!handlingClick.current) {
      handlingClick.current = true;
      aboutMeAnimation
        .fromTo(
          "#transition-box-1",
          {
            xPercent: -100,
            yPercent: 0,
          },
          {
            delay: 0.0,
            xPercent: -50,
            yPercent: 0,
            duration: 0.5,
            ease: "power1",
          },
          "<"
        )
        .fromTo(
          "#transition-box-2",
          {
            xPercent: 0,
            yPercent: -100,
          },
          {
            delay: 0.3,
            xPercent: 0,
            yPercent: -50,
            duration: 0.5,
            ease: "power1",
          },
          "<"
        )
        .fromTo(
          "#transition-box-3",
          {
            xPercent: 100,
            yPercent: 0,
          },
          {
            delay: 0.3,
            xPercent: 50,
            yPercent: 0,
            duration: 0.5,
            ease: "power1",
          },
          "<"
        )
        .fromTo(
          "#transition-box-4",
          {
            xPercent: 0,
            yPercent: 100,
          },
          {
            delay: 0.3,
            xPercent: 0,
            yPercent: 50,
            duration: 0.5,
            ease: "power1",
            onComplete: () => {
              setMainPage(!main);
              if (!main) console.log("main is on");
            },
          },
          "<"
        )
        .to(window, { delay: 0 })
        .to(
          "#transition-box-1",
          {
            delay: 0,
            xPercent: -100,
            yPercent: 0,
            duration: 0.5,
            ease: "power1",
          },
          "<"
        )
        .to(
          "#transition-box-2",
          {
            delay: 0.3,
            xPercent: 0,
            yPercent: -100,
            duration: 0.5,
            ease: "power1",
          },
          "<"
        )
        .to(
          "#transition-box-3",
          {
            delay: 0.3,
            xPercent: 100,
            yPercent: 0,
            duration: 0.5,
            ease: "power1",
          },
          "<"
        )
        .to(
          "#transition-box-4",
          {
            delay: 0.3,
            xPercent: 0,
            yPercent: 100,
            duration: 0.5,
            ease: "power1",
            onComplete: () => {
              setAboutMePage(main);
              if (main) console.log("Changed to aboutMe");
              handlingClick.current = false;
            },
          },
          "<"
        );
    }
  };

  return (
    <div id="page">
      <NameLogo id="name-logo" color={highlight}></NameLogo>
      <Background page={page}>
        <div id="transition-wrapper">
          <div
            id="transition-box-1"
            className={
              aboutMePage
                ? "h-screen w-screen bg-background z-50 fixed top-0 left-0 opacity-95"
                : ""
            }
          ></div>
          <div
            id="transition-box-2"
            className={
              aboutMePage
                ? "h-screen w-screen bg-background z-50 fixed top-0 left-0 opacity-95"
                : ""
            }
          ></div>
          <div
            id="transition-box-3"
            className={
              aboutMePage
                ? "h-screen w-screen bg-background z-50 fixed top-0 left-0 opacity-95"
                : ""
            }
          ></div>
          <div
            id="transition-box-4"
            className={
              aboutMePage
                ? "h-screen w-screen bg-background z-50 fixed top-0 left-0 opacity-95"
                : ""
            }
          ></div>
        </div>
        {mainPage && (
          <div id="main-page">
            <Home handleClick={handleAboutMeClick}></Home>
            <Projects id="projects"></Projects>
            <WorkHistory></WorkHistory>
            <Contact></Contact>
          </div>
        )}
        {aboutMePage && (
          <div id="about-me-page">
            <AboutMe handleClick={handleAboutMeClick}></AboutMe>
          </div>
        )}
      </Background>
    </div>
  );
}

export default App;
