import React, { useEffect, useState } from "react";
import "./homeContent.css";
import "../../hooks/button/button.css";
import img1 from "/assets/img/img1.png";
import prop1 from "/assets/img/prop1.png";
import prop2 from "/assets/img/prop2.png";
import img2 from "/assets/img/photo1.webp";
import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Slider Images
import slide11 from "/assets/img/s9.jpg";
import slide12 from "/assets/img/s8.jpg";
import slide21 from "/assets/img/s7.jpg";
import slide22 from "/assets/img/s6.jpg";
import slide23 from "/assets/img/s5.jpg";
import slide24 from "/assets/img/s4.jpg";
import slide31 from "/assets/img/s3.jpg";
import slide32 from "/assets/img/s2.jpg";
import slide33 from "/assets/img/s1.jpg";

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
                <CheckIcon /> Promote sustainable practices like organic farming
                and reforestation.
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
      {/* -----------------Banner----------------- */}
      <div className="banner">
        <div className="cards">
          <div className="b1">
            <div className="icon-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                className="iconn"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#236724"
                strokeWidth="2"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
            </div>
            <h1>Registered</h1>
            <p>
              Society Act (Registered on 7th February 2024, Registration No.
              UK0600822024012700)
            </p>
          </div>
          <div className="b2">
            <div className="icon-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                className="iconn"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#236724"
                strokeWidth="2"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
            </div>
            <h1>Established</h1>
            <p>
              Working from 5th June 2022 and officially registered under the
              Society Act on 7th February 2024.
            </p>
          </div>
          <div className="b3">
            <div className="icon-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                className="iconn"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#236724"
                strokeWidth="2"
              >
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
            </div>
            <h1>Location</h1>
            <p>
              Monal Enclave, Near Kargi Chowk, Dehradun, Uttarakhand – 248001,
              India
            </p>
          </div>
        </div>
      </div>

      {/* -----------------section 3----------------- */}
      <div className="sec3">
        <div className="sec3-text">
          <h2>Our Initiatives</h2>
          <h1>Our Programs</h1>
          <div className="line"></div>
          <p>
            Discover the various initiatives and programs we run to promote
            environmental conservation and sustainable development.
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="pan1">
              <img src={slide11} alt="Slide 11" />
              <img src={slide12} alt="Slide 12" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pan2">
              <img src={slide21} alt="Slide 21" />
              <img src={slide22} alt="Slide 22" />
              <img src={slide23} alt="Slide 23" />
              <img src={slide24} alt="Slide 24" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pan3">
              <img src={slide31} alt="Slide 31" />
              <img src={slide32} alt="Slide 32" />
              <img src={slide33} alt="Slide 33" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeContent;
