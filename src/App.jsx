import { useState, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./hooks/CustomCursor";
import "./App.css";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/home/home"));
const About = lazy(() => import("./pages/about/about"));
const Contact = lazy(() => import("./pages/contact/contact"));
const Team = lazy(() => import("./pages/team/team"));
const Store = lazy(() => import("./pages/store/store"));
const Involve = lazy(() => import("./pages/involve/involve"));
const Donate = lazy(() => import("./pages/donate/donate"));
const Gallery = lazy(() => import("./pages/gallery/gallery"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/involve" element={<Involve />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <CustomCursor />
      <AnimatedRoutes />

      <div className="app-wrapper fade-in"></div>
    </Router>
  );
};

export default App;
