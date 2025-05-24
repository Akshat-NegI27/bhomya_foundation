import { useEffect, useState } from "react";
import "./Loader.css";

const quotes = ["Germinating the seeds of conservation."];

const Loader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    const showTime = setTimeout(() => {
      setFadeOut(true);
      const finishTime = setTimeout(onComplete, 1000); // 1s fade-out
      return () => clearTimeout(finishTime);
    }, 5000); // 👈 Increase to 5s visible before fade

    return () => clearTimeout(showTime);
  }, [onComplete]);

  return (
    <div
      className={`loader-container ${fadeOut ? "loader-fadeout" : ""}`}
      aria-hidden="true"
    >
      <h4 className="loader-text">Bhomya Foundation</h4>
      <div className="loader-quote">{quote}</div>
    </div>
  );
};

export default Loader;
