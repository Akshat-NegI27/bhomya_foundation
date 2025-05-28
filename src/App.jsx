import { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CustomCursor from "./hooks/CustomCursor";
import Loader from "./hooks/loader/Loader";
import ScrollToTop from "./hooks/ScrollToTop/ScrollToTop";
import ScrollToTopArrow from "./hooks/ScrollToTopArrowIcon/ScrollToTopArrow";
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
  const [loading, setLoading] = useState(false);
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
          <ScrollToTop />
          <CustomCursor />
          <ScrollToTopArrow></ScrollToTopArrow>

          <Suspense fallback={<Loader />}>
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
        </div>
      )}
    </>
  );
};

export default App;
