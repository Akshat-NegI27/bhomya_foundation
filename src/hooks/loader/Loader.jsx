import { useEffect } from "react";
import "./index.js";
import "./Loader.css";
import { preLoaderAnim } from "./index.js";

const Loader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []); // This still works because we recreate Loader on every route change (via key)
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>| BHOMYA </span>
        <span>&nbsp; FOUNDATION |&nbsp; </span>
      </div>
    </div>
  );
};

export default Loader;
