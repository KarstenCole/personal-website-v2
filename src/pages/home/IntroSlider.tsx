import NameLogo from "../../components/ui/NameLogo";
import SubHeader from "../../components/ui/SubHeader";
import gsap from "gsap";
import { useEffect } from "react";

const IntroSlider = () => {
  //intro animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const introTimeline = gsap.timeline();
      introTimeline
        .to(["#languages", "#descriptors", "#logo"], {
          opacity: 0,
          duration: 0,
        })
        .to(["#logo", "#descriptors"], {
          opacity: 1,
          duration: 2,
        })
        .to(["#descriptor1", "#descriptor2", "#descriptor3"], {
          x: "+=40",
          delay: 2,
          opacity: 0,
          stagger: 0.4,
        })
        .to(["#languages"], {
          duration: 1,
          opacity: 1,
        })
        .to(["#language1", "#language2", "#language3"], {
          x: "+=40",
          delay: 2,
          opacity: 0,
          stagger: 0.4,
        })
        .to("#slider", {
          yPercent: "-100",
          duration: 2,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="slider"
      className="h-screen w-full bg-background fixed flex justify-center items-center"
    >
      <NameLogo id="logo" className="mr-16 scale-125"></NameLogo>
      <div className="flex">
        <div id="descriptors">
          <SubHeader id="descriptor1" textStyle="text-secondary">
            Developer
          </SubHeader>
          <SubHeader id="descriptor2" textStyle="text-secondary -mt-6">
            Entrepreneur
          </SubHeader>
          <SubHeader id="descriptor3" textStyle="text-secondary -mt-6">
            Designer
          </SubHeader>
        </div>
        <div id="languages" className="absolute">
          <SubHeader id="language1" textStyle="text-secondary">
            Reactjs
          </SubHeader>
          <SubHeader id="language2" textStyle="text-secondary -mt-6">
            Typescript
          </SubHeader>
          <SubHeader id="language3" textStyle="text-secondary -mt-6">
            Gsap
          </SubHeader>
        </div>
      </div>
    </div>
  );
};

export default IntroSlider;
