import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { text, curve, translate } from "./anim";

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/team": "Team",
  "/gallery": "Gallery",
  "/involve": "Get Involved",
  "/donate": "Donate",
  "/store": "Nature Store",
};

// Helper: finds the closest matching route prefix
const getRouteLabel = (pathname) => {
  const matched = Object.keys(routes).find((path) => pathname.startsWith(path));
  return routes[matched] || "";
};
const anim = (variants) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

const Curve = ({ children, backgroundColor }) => {
  const location = useLocation();
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div
      className="page curve"
      style={{
        backgroundColor,
      }}
    >
      <div
        className="background"
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
      />
      <AnimatePresence mode="wait">
        {/* <motion.p
          key={location.pathname}
          className="route"
          {...anim(text)}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
            fontSize: "2.5rem", // Optional for visibility
            fontWeight: "bold",
            pointerEvents: "none", // Optional to avoid blocking clicks
          }}
        >
          {getRouteLabel(location.pathname)}
        </motion.p> */}
      </AnimatePresence>
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
};

const SVG = ({ height, width }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg
      {...anim(translate)}
      style={{
        position: "absolute",

        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9998, // Ensure it's above default content
      }}
    >
      <motion.path fill="#000" {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};

export default Curve;
