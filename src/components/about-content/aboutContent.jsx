import React from "react";
import "./aboutContent.css";
import partner1 from "/assets/img/g2.jpg";
import partner2 from "/assets/img/g1.jpg";

const AboutContent = () => {
  return (
    <div className="aboutpg">
      <section className="hero">
        <div className="overlay">
          <h1>Bhomya Foundation</h1>
          <p className="tagline">Germinating the Seeds of Conservation</p>
        </div>
      </section>

      <section className="intro">
        <h2>About Us</h2>
        <p>
          Bhomya Foundation is a Dehradun-based environmental NGO working since
          June 2022, officially registered on 7th February 2024 under the
          Society Act (Reg. No. UK0600822024012700).
        </p>
        <p>
          <strong>Address:</strong> Monal Enclave, Near Kargi Chowk, Dehradun –
          248001, India
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To create an eco-conscious society where people live in harmony with
          nature — restoring ecosystems, protecting biodiversity, and promoting
          sustainable living.
        </p>
      </section>

      <section className="objectives">
        <h2>Objectives</h2>
        <ul>
          <li>Community-based natural resource conservation</li>
          <li>Environmental awareness through education</li>
          <li>Research in biodiversity & sustainable practices</li>
          <li>Promoting eco-friendly living & organic farming</li>
        </ul>
      </section>

      <section className="team">
        <h2>Our Core Team</h2>
        <div className="team-grid">
          <div className="team-card">Founder: Himanshu Sahu</div>
          <div className="team-card">Vice President: Arun Pratap Mishra</div>
          <div className="team-card">Secretary: Km Pooja</div>
          <div className="team-card">Treasurer: Aditi Pant</div>
          <div className="team-card">Joint Secretary: Sipu Kumar</div>
          <div className="team-card">Deputy Secretary: Gautam Kumar</div>
          <div className="team-card">Spokesperson: Samriddhi Sharma</div>
          <div className="team-card">R&D Lead: Dr. Naveen Chandra</div>
        </div>
      </section>

      <section className="partners">
        <h2>Our Partners</h2>
        <div className="partner-logos">
          <img src={partner1} alt="Botanical Survey of India" />
          <img src={partner2} alt="IFSA LC FRI" />
        </div>
      </section>

      <section className="impact">
        <h2>Our Impact</h2>
        <div className="impact-grid">
          <div className="impact-box">
            <h3>500+</h3>
            <p>Participants Engaged</p>
          </div>
          <div className="impact-box">
            <h3>20+</h3>
            <p>School Collaborations</p>
          </div>
          <div className="impact-box">
            <h3>1000+</h3>
            <p>Trees Planted</p>
          </div>
          <div className="impact-box">
            <h3>10+</h3>
            <p>Research Publications</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Join Us in Protecting the Planet</h2>
        <button>Get Involved</button>
      </section>
    </div>
  );
};

export default AboutContent;
