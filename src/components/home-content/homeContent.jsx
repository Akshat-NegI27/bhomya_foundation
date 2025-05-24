import React, { useEffect, useState } from "react";
import "./homeContent.css";
import "../../hooks/button/button.css";
import img1 from "/assets/img/img1.png";
import prop1 from "/assets/img/prop1.png";
import prop2 from "/assets/img/prop2.png";
import img2 from "/assets/img/img2.jpg";
import { Link } from "react-router-dom";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className="check-icon"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ verticalAlign: "middle", marginRight: "8px" }}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

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
        <div className="head-text">
          <h2>Our Story</h2>
          <h1>About Bhomya Foundation</h1>
          <p>
            Dedicated to environmental conservation and sustainable community
            development since 2022, officially registered under the Society Act
            on 7th February 2024.
          </p>
        </div>
        <div className="sec2-content">
          <div className="left-text">
            <h1>Our Mission</h1>
            <p>
              Bhomya Foundation is committed to promoting environmental
              conservation and sustainable community development. The mission is
              to create an eco-conscious society where people work in harmony
              with nature to restore ecosystems, protect biodiversity, and
              foster sustainable living.
            </p>
            <h2>Our Objectives</h2>
            <ul>
              <li>
                <CheckIcon />
                <div className="point">
                  To raise awareness about environmental issues and promote
                  sustainable practices.
                </div>
              </li>
              <li>
                <CheckIcon />
                To engage communities in conservation efforts through education
                and hands-on activities.
              </li>
              <li>
                <CheckIcon /> To support the restoration of degraded ecosystems
                and promote biodiversity.
              </li>
              <li>
                <CheckIcon /> To empower individuals and communities to take
                action for a greener future.
              </li>
              <li>
                <CheckIcon /> To empower individuals and communities to take
                action for a greener future.
              </li>
            </ul>
          </div>
          <div className="right-image">
            <div className="overlay">
              <h1>Working towards a greener planet</h1>
              <p>
                Our efforts span from Uttarakhand's mountains to communities
                across North India
              </p>
            </div>
            <div className="image-box">
              <img src={img2} className="imgg2" alt="Mission" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
