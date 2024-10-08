import AboutMe from "./pages/about-me/AboutMe.tsx";
import Contact from "./pages/contact/Contact.tsx";
import Home from "./pages/home/Home.tsx";
import Projects from "./pages/projects/Projects.tsx";
import WorkHistory from "./pages/work-history/WorkHistory.tsx";
import NameLogo from "./components/ui/NameLogo.tsx";
import Background from "./components/background/Background.tsx";
import SubHeader from "./components/ui/SubHeader.tsx";
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
  const handlingContact = useRef(false);
  const [errorMesssage, setErrorMessage] = useState<string | undefined>("");
  const [position, setPosition] = useState("auto");

  // Intro Scroll Animation
  useEffect(() => {
    console.log("About me", aboutMePage);
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
          x: "-50vw",
          ease: "power1",
        },
        "<"
      )
      .to(
        "#beam3",
        {
          x: "-30vw",
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
          x: "+6vw",
          ease: "circle",
        },
        "<"
      )
      .to(
        "#beam5",
        {
          x: "+9vw",
          ease: "circle",
        },
        "<"
      );
  }, [aboutMePage]);

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
              setPosition("hidden");
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
              handlingClick.current = false;
              setPosition("auto");
            },
          },
          "<"
        );
    }
  };

  const handleEmailSent = (errorMsg?: string) => {
    const emailConfirmation = gsap.timeline({
      onStart: () => {
        if (typeof errorMsg === "string") {
          setErrorMessage(errorMsg);
        }
      },
    });
    if (!handlingContact.current) {
      handlingContact.current = true;
      if (errorMsg == undefined || typeof errorMsg != "string") {
        emailConfirmation
          .to("#email-confirmation", {
            right: 20,
            ease: "power1.out",
            duration: 0.7,
          })
          .to("#email-confirmation", {
            delay: 2,
            right: "-15rem",
            ease: "power1.out",
            duration: 0.7,
            onComplete: () => {
              handlingContact.current = false;
            },
          });
      } else {
        emailConfirmation
          .to("#email-non-confirmation", {
            right: 20,
            ease: "power1.out",
            duration: 0.7,
          })
          .to("#email-non-confirmation", {
            delay: 4,
            right: "-15rem",
            ease: "power1.out",
            duration: 0.7,
            onComplete: () => {
              handlingContact.current = false;
            },
          });
      }
    }
  };

  return (
    <div id="page">
      <NameLogo id="name-logo" color={highlight}></NameLogo>
      <Background aboutMePage={aboutMePage} page={page}>
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
          <div
            id="email-confirmation"
            className="p-4 z-9 fixed top-5 right-[-15rem] rounded-lg bg-dark-background"
          >
            <SubHeader textStyle="text-[#00FF66] !text-[30px]">
              Message Sent
            </SubHeader>
          </div>
          <div
            id="email-non-confirmation"
            className="p-4 z-10 fixed top-5 right-[-15rem] rounded-lg bg-dark-background text-center"
          >
            <SubHeader textStyle="text-[#FF2E00] !text-[30px]">
              Error:
              <SubHeader textStyle="text-secondary !text-[20px] w-44">
                {errorMesssage}
              </SubHeader>
            </SubHeader>
          </div>
        </div>
        {mainPage && (
          <div id="main-page">
            <Home handleClick={handleAboutMeClick}></Home>
            <div className={position}>
              <Projects id="projects"></Projects>
              <WorkHistory></WorkHistory>
              <Contact
                emailSent={handleEmailSent}
                emailNotSent={handleEmailSent}
              ></Contact>
            </div>
          </div>
        )}
        {aboutMePage && (
          <div id="about-me-page" className={mainPage ? "hidden" : ""}>
            <AboutMe handleClick={handleAboutMeClick}></AboutMe>
          </div>
        )}
      </Background>
    </div>
  );
}

export default App;
