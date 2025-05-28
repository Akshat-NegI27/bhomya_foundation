import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./hooks/CustomCursor";
import Loader from "./hooks/loader/Loader";
import PageTransition from "./components/PageTransition";
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

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Shortened for usability
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="app-wrapper fade-in">
          <CustomCursor />
          <Suspense fallback={<Loader />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
                <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
                <Route path="/involve" element={<PageTransition><Involve /></PageTransition>} />
                <Route path="/donate" element={<PageTransition><Donate /></PageTransition>} />
                <Route path="/store" element={<PageTransition><Store /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </div>
      )}
    </>
  );
};

export default App;
