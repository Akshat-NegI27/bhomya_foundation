import React, { useEffect } from "react";
import "./thankYou.css";

const ThankYou = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("canvas-confetti").then((module) => {
        const confetti = module.default;
        const duration = 3 * 1000;
        const end = Date.now() + duration;

        (function frame() {
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
          });
          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        })();
      });
    }
  }, []);

  return (
    <div className="thankyou-page">
      <h1>🎉 Thank You for Your Donation! 🎉</h1>
      <p>Your support means the world to us.</p>
      <a className="home-button" href="/">Go to Home</a>
    </div>
  );
};

export default ThankYou;
