import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
const ThankYou = lazy(() => import("./pages/thankyou/ThankYou"));

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-wrapper fade-in">
      <ScrollToTop />
      <ScrollToTopArrow />
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
          <Route path="/thank-you" element={<ThankYou />} />

        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
