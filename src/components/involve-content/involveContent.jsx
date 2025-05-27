import React from "react";
import "./involveContent.css";

const InvolveContent = () => {
  return (
    <div className="involve-wrapper">
      <div className="involve-container">
        <div className="involve-header">
          <span className="badge">Join Our Cause</span>
          <h1>Get Involved</h1>
          <p>
            There are many ways you can contribute to our mission and help make a
            difference in environmental conservation.
          </p>
        </div>
<div className="involve-card">
            <div className="icon-circle">
              <i className="icon-volunteer" />
            </div>
            <h2>Volunteer</h2>
            <p className="subtitle">Make a direct, meaningful impact</p>
            <p className="description">
              Contribute your time, energy, or skills to our projects — from plantation
              drives to awareness campaigns and event support.
            </p>
            <button className="btn brown">Become a Volunteer</button>
          </div>
        <div className="involve-cards">
          <div className="involve-card">
            <div className="icon-circle">
              <i className="icon-intern" />
            </div>
            <h2>Intern/Trainee</h2>
            <p className="subtitle">Gain hands-on experience and training</p>
            <p className="description">
              Join us as an intern or trainee to work on real environmental projects,
              research, and campaigns while developing your skills.
            </p>
            <button className="btn green">Apply as Intern</button>
          </div>

          <div className="involve-card">
            <div className="icon-circle">
              <i className="icon-member" />
            </div>
            <h2>Member</h2>
            <p className="subtitle">Be a committed part of our mission</p>
            <p className="description">
              As a member, you’ll stay connected, contribute ideas, join programs,
              and help shape the future of our green initiatives.
            </p>
            <button className="btn brown">Join as Member</button>
          </div>

          <div className="involve-card">
            <div className="icon-circle">
              <i className="icon-partner" />
            </div>
            <h2>Partner With Us</h2>
            <p className="subtitle">Collaborate to drive greater change</p>
            <p className="description">
              Whether you're a business, institute, or NGO, partner with us to create
              joint programs and drive lasting environmental impact.
            </p>
            <button className="btn green">Become a Partner</button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default InvolveContent;
