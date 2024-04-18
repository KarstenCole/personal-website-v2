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
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [introAnimationComplete, setIntroAnimationComplete] = useState(false);
  const handledIntroScroll = useRef(false);
  history.scrollRestoration = "manual";
  const [page, setPage] = useState("Home");
  const [highlight, setHighlight] = useState(true);
  // const handledReverseIntroScroll = useRef(false);

  useLayoutEffect(() => {
    if (!introAnimationComplete) {
      window.scrollTo(0, 0);
    }
  }, [introAnimationComplete]);

  useEffect(() => {
    if (introAnimationComplete) {
      //TODO finishin the scrubbing animation

      const reverseIntroAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#up-arrow",
          markers: true,
          start: "top 50%",
          scrub: true,
          onEnter: () => {
            gsap.set(".trigger", { x: 0 }); // Reset the animation
          },
          onEnterBack: () => {
            animationStarted = true;
          },
        },
      });

      reverseIntroAnimation
        .to(
          "#beam2",
          {
            rotate: 25,
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
            x: "==150",
            ease: "power1.inOut",
          },
          "<"
        );
    }
    // intro animation
    const handleScroll = () => {
      const elements = document.querySelectorAll("*:not(* > *)");
      const introAnimation = gsap.timeline();

      // const targetPosition = window.innerHeight;
      // const scrollPosition = document.documentElement.scrollTop;
      // const reverseIntroAnimation = gsap.timeline();]
      //  if (
      // //   scrollPosition < targetPosition &&
      // //   introAnimationComplete &&
      // //   !handledReverseIntroScroll.current
      // // ) {
      // //   handledReverseIntroScroll.current = true;
      // //   elements.forEach((element) => {
      // //     element.classList.remove("overflow-visible");
      // //   });
      // //   window.scrollTo(0, window.innerHeight);

      // //   reverseIntroAnimation.to(
      // //     ["#up-arrow-dot2", "#up-arrow-dot1", "#up-arrow-head"],
      // //     {
      // //       y: "+=100",
      // //       duration: 0.5,
      // //       stagger: 0.1,
      // //       ease: "power1.inOut",
      // //     }
      // //   );
      //  }

      if (!introAnimationComplete && !handledIntroScroll.current) {
        handledIntroScroll.current = true;

        //animation
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
              duration: 1,
              rotate: -25,
              x: "-=780",
              ease: "power1.inOut",
            },
            "<"
          )
          .to(
            "#beam3",
            {
              duration: 1,
              x: "-=450",
              ease: "power1.inOut",
            },
            "<"
          )
          .to(
            "#beam4",
            {
              rotate: -25,
              duration: 1,
              x: "+=100",
              ease: "power1.inOut",
            },
            "<"
          )
          .to(
            "#beam5",
            {
              duration: 1,
              x: "+=150",
              ease: "power1.inOut",
            },
            "<"
          )
          .to(window, {
            duration: 0,
            onComplete: () => {
              setIntroAnimationComplete(true);
              elements.forEach((element) => {
                element.classList.add("overflow-visible");
              });
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
