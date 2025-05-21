import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomCursor from "./hooks/CustomCursor";
import Loader from "./hooks/loader/Loader";

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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5500); // Adjust if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="app-wrapper fade-in">
          <CustomCursor />
          <Router>
            <Suspense fallback={<Loader />}>
              <Routes>
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
          </Router>
        </div>
      )}
    </>
  );
};

export default App;
