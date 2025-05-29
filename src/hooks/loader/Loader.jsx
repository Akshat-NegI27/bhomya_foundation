import { useEffect } from "react";
import "./index.js";
import "./Loader.css";
import { preLoaderAnim } from "./index.js";

// const quotes = ["Germinating the seeds of conservation."];

const Loader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>| BHOMYA </span>
        <span>&nbsp; FOUNDATION &nbsp; </span>
        {/* <span> NEGI |</span> */}
      </div>
    </div>
  );
};

export default Loader;
