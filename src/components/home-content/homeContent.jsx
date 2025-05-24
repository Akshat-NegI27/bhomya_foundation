import React, { useEffect, useState } from "react";
import "./homeContent.css";
import "../../hooks/button/button.css";
import img1 from "/assets/img/img1.png";
import prop1 from "/assets/img/prop1.png";
import prop2 from "/assets/img/prop2.png";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <div className="homepg-main">
      {/* -----------------section 1----------------- */}
      <div className="sec1">
        <img src={prop1} className="prop1" alt="" />
        <img src={prop2} className="prop2" alt="" />

        <div className="sec1-content">
          <h3>Environmental Conservation NGO</h3>
          <h1>
            Together For Trees
            <br /> United For Tomorrow
          </h1>
          <h2>Be the Change, Plant the Change.</h2>
          <p>
            At Bhomya Foundation, we empower communities to nurture nature
            through innovative conservation and sustainable practices. <br />
            Join us on our mission to restore ecological balance, promote
            organic growth, and create a greener future for all.
          </p>
          <div className="buttons">
            <Link className="button-underline" to="/Team">
              View All Courses
            </Link>
            <button
              onClick={() => {
                navigate("/About");
              }}
              className="learn-more"
            >
              <span className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Enroll Now</span>
            </button>
          </div>
        </div>
        <div className="sec1-image">
          <img src={img1} className="imgg1" alt="Hero" />
        </div>
      </div>

      {/* -----------------section 2----------------- */}
      <div className="sec2">
        <h1>Our Mission</h1>
        <p>
          Our mission is to empower communities to nurture nature through
          innovative conservation and sustainable practices. We aim to restore
          ecological balance, promote organic growth, and create a greener
          future for all.
        </p>
      </div>
    </div>
  );
};

export default HomeContent;
