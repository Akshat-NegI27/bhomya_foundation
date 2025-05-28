import React, { useEffect } from "react";
import "./arrow.css";
import arrowUpward from "./arrow_upward.svg"; // Adjust the path as necessary

const ScrollToTopArrow = () => {
  useEffect(() => {
    const backToTopButton = document.querySelector(".backtotop");
    // Initially hide the button
    backToTopButton.style.display = "none";
    const handleScroll = () => {
      if (window.scrollY > 300) {
        backToTopButton.style.display = "flex";
      } else {
        backToTopButton.style.display = "none";
      }
    };

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    backToTopButton.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      backToTopButton.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="backtotop">
      <img className="uparrow" src={arrowUpward} alt="" />
    </div>
  );
};

export default ScrollToTopArrow;
