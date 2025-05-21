import React, { useEffect, useState } from "react";
import "./homeContent.css";
import "../../hooks/button/button.scss";

const HomeContent = () => {
  return (
    <div className="homepg">
      <h1>Welcome to Our Platform</h1>
      <p>Your journey to knowledge starts here.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  );
};

export default HomeContent;
