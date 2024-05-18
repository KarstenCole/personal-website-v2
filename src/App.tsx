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
  const [page, setPage] = useState("Home");
  const [highlight, setHighlight] = useState(true);
  const aboutMeAnimation = gsap.timeline({
    onStart: () => setAboutMePage(true),
  });
  const [mainPage, setMainPage] = useState(true);
  const [aboutMePage, setAboutMePage] = useState<boolean>(false);

  // Intro Scroll Animation
  useEffect(() => {
    const scrollIntroAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        start: "-=580",
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

  const handleAboutMeClick = () => {
    aboutMeAnimation
      .fromTo(
        "#transition-box-1",
        {
          xPercent: -100,
          yPercent: 0,
        },
        {
          delay: 0,
          xPercent: -50,
          yPercent: 0,
          duration: 1,
          ease: "power1.out",
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
          delay: 0.4,
          xPercent: 0,
          yPercent: -50,
          duration: 1,
          ease: "power1.out",
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
          delay: 0.4,
          xPercent: 50,
          yPercent: 0,
          duration: 1,
          ease: "power1.out",
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
          delay: 0.4,
          xPercent: 0,
          yPercent: 50,
          duration: 1,
          ease: "power1.out",
          onComplete: () => setMainPage(false),
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
          duration: 1,
          ease: "power1.out",
        },
        "<"
      )
      .to(
        "#transition-box-2",
        {
          delay: 0.4,
          xPercent: 0,
          yPercent: -100,
          duration: 1,
          ease: "power1.out",
        },
        "<"
      )
      .to(
        "#transition-box-3",
        {
          delay: 0.4,
          xPercent: 100,
          yPercent: 0,
          duration: 1,
          ease: "power1.out",
        },
        "<"
      )
      .to(
        "#transition-box-4",
        {
          delay: 0.4,
          xPercent: 0,
          yPercent: 100,
          duration: 1,
          ease: "power1.out",
        },
        "<"
      );
  };

  const handleAboutMeBackClick = () => {
    aboutMeAnimation.to("#main-page", {});
  };

  return (
    <div id="page">
      <NameLogo id="name-logo" color={highlight}></NameLogo>
      <Background page={page}>
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
            <AboutMe handleClick={handleAboutMeBackClick}></AboutMe>
          </div>
        )}
      </Background>
    </div>
  );
}

export default App;
