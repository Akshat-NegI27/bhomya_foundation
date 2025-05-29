import gsap from "gsap";
import "./Loader.css";

const tl = gsap.timeline();

export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "power3.out",
    })
    .from(".texts-container span", {
      duration: 1.8,
      delay: 0.5,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "power3.out",
    })
    .to(".texts-container span", {
      duration: 0.2,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "power3.out",
    })
    .to(".preloader", {
      duration: 1.2,
      height: "0vh",
      ease: "power3.out",
    })
    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .to(".preloader", {
      duration: 0,
      css: { display: "none" },
    });
};
