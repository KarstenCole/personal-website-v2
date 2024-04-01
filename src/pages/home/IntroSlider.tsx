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
        .to(["#descriptor1", "#descriptor2", "#descriptor3", "#logo"], {
          opacity: 0,
          duration: 0,
        })
        .to(["#logo", "#descriptor1", "#descriptor2", "#descriptor3"], {
          opacity: 1,
          duration: 1,
          stagger: 0.7,
        })
        .to(["#descriptor1", "#descriptor2", "#descriptor3"], {
          x: "+=40",
          delay: 0,
          opacity: 0,
          stagger: 0.7,
          duration: 1,
          ease: "power1.out",
        })
        .to("#slider", {
          yPercent: "-100",
          opacity: 0.9,
          duration: 1.5,
          ease: "power2.inOut",
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
            Designer
          </SubHeader>
          <SubHeader id="descriptor3" textStyle="text-secondary -mt-6">
            Entrepreneur
          </SubHeader>
        </div>
      </div>
    </div>
  );
};

export default IntroSlider;
