import React from "react";
import "./involveContent.css";
import Curve from "../../components/Curve";

const InvolveContent = () => {
  return (
    <Curve backgroundColor="#ffffff">
      <div className="involve-wrapper">
        <div className="involve-container">
          <div className="involve-header">
            <span className="badge">Join Our Cause</span>
            <h1>Get Involved</h1>
            <p>
              There are many ways you can contribute to our mission and help
              make a difference in environmental conservation.
            </p>
          </div>

          <div className="involve-cards">
            <div className="involve-card">
              <div className="icon-circle">
                <i className="icon-heart" />
              </div>
              <h2>Donate</h2>
              <p className="subtitle">
                Support our conservation efforts financially
              </p>
              <p className="description">
                Your donations help us implement conservation programs, conduct
                research, and create educational materials for communities.
              </p>
              <button className="btn green">Make a Donation</button>
            </div>

            <div className="involve-card">
              <div className="icon-circle">
                <i className="icon-volunteer" />
              </div>
              <h2>Volunteer</h2>
              <p className="subtitle">
                Join our team and make a hands-on impact
              </p>
              <p className="description">
                Volunteer your time and skills for tree plantation drives,
                clean-up events, awareness campaigns, or help with
                administrative tasks.
              </p>
              <button className="btn brown">Become a Volunteer</button>
            </div>

            <div className="involve-card">
              <div className="icon-circle">
                <i className="icon-partner" />
              </div>
              <h2>Partner With Us</h2>
              <p className="subtitle">
                Collaborate for greater environmental impact
              </p>
              <p className="description">
                We welcome partnerships with organizations, educational
                institutions, and businesses that share our vision for
                environmental conservation.
              </p>
              <button className="btn green">Partner With Us</button>
            </div>
          </div>
        </div>
      </div>
    </Curve>
  );
};

export default InvolveContent;
