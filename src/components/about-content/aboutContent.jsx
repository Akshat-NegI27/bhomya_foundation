import React from "react";
import "./aboutContent.css";

const AboutContent = () => {
  return (
    <div className="about-wrapper">

      {/* About Us */}
      <section className="about-us">
        <h2>About <span className="highlight">Us</span></h2>
        <p className="description">
          Bhomya Foundation is a non-profit organization located in the heart of Dehradun, Uttarakhand, dedicated to
          fostering environmental conservation and sustainable community development.
        </p>
        <div className="about-cards-grid">
          <div className="about-card">
            <img src="/assets/img/vision.jpg" alt="Vision" />
            <h3>Our Vision</h3>
            <p>To create a greener, more sustainable world by empowering communities, restoring ecosystems, and
              adopting environmentally responsible practices.</p>
          </div>
          <div className="about-card">
            <img src="/assets/img/mission.jpg" alt="Mission" />
            <h3>Our Mission</h3>
            <ul>
              <li>Conserve natural resources through grassroots initiatives</li>
              <li>Educate communities on environmental stewardship</li>
              <li>Promote sustainable agriculture and eco-friendly living</li>
              <li>Conduct research on biodiversity and climate resilience</li>
            </ul>
          </div>
          <div className="about-card">
            <img src="/assets/img/work.jpg" alt="Where We Work" />
            <h3>Where We Work</h3>
            <p>Primarily operating in Dehradun and across the Himalayan belt including Uttarakhand, Uttar Pradesh,
              Bihar & Jharkhand. We collaborate with students, scholars, volunteers, and local communities.</p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do">
        <h2>What We <span className="highlight">Do</span></h2>
        <p className="description">
          We design and execute programs on both short- and long-term bases, creating lasting impact for environmental conservation.
        </p>
        <div className="programs-grid">
          <div className="program-card">
            <img src="/assets/img/restoration.jpg" alt="Environmental Restoration" />
            <h4>Environmental Restoration</h4>
            <p>Tree plantation drives, river cleanups, and reforestation programs.</p>
          </div>
          <div className="program-card">
            <img src="/assets/img/community.jpg" alt="Community Engagement" />
            <h4>Community Engagement</h4>
            <p>Engaging local communities through environmental events and volunteering.</p>
          </div>
          <div className="program-card">
            <img src="/assets/img/education.jpg" alt="Education & Awareness" />
            <h4>Education & Awareness</h4>
            <p>Workshops, school programs, and digital campaigns for youth and adults.</p>
          </div>
          <div className="program-card">
            <img src="/assets/img/research.jpg" alt="Research & Development" />
            <h4>Research & Development</h4>
            <p>Studies on environmental policies, climate models, and innovation projects.</p>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="our-impact">
        <h2>Our <span className="highlight">Impact</span></h2>
        <p>Measurable change through dedicated environmental action and community engagement</p>
        <div className="impact-stats">
          <div className="impact-card">
            <h3>500+</h3>
            <p>Participants Engaged</p>
          </div>
          <div className="impact-card">
            <h3>Multiple</h3>
            <p>Restoration Projects</p>
          </div>
          <div className="impact-card">
            <h3>20+</h3>
            <p>Educational Partners</p>
          </div>
          <div className="impact-card">
            <h3>Research</h3>
            <p>Publications</p>
          </div>
        </div>
      </section>

      {/* Achievements */}
<section className="our-achievements">
  <h2>Our <span className="highlight">Achievements</span></h2>
  <p className="description">
    Since our establishment, we have successfully organized and executed multiple initiatives focused on
    environmental conservation and community awareness.
  </p>

  <div className="timeline-container">
    <div className="timeline-line"></div>

    <div className="timeline-item left">
      <div className="timeline-card">
        <h4>Community Clean-up Drives</h4>
        <p>Organized multiple community-based environmental clean-up initiatives across regions.</p>
      </div>
    </div>

    <div className="timeline-item right">
      <div className="timeline-card">
        <h4>Nature Conservation Events</h4>
        <p>Nature walks, bird-watching events, and educational talks on biodiversity preservation.</p>
      </div>
    </div>

    <div className="timeline-item left">
      <div className="timeline-card">
        <h4>Tree Plantation Drives</h4>
        <p>Large-scale tree plantation initiatives to restore green cover and combat climate change.</p>
      </div>
    </div>

    <div className="timeline-item right">
      <div className="timeline-card">
        <h4>Educational Collaborations</h4>
        <p>Partnerships with local communities and schools for environmental education programs.</p>
      </div>
    </div>

    <div className="timeline-item left">
      <div className="timeline-card">
        <h4>Research Publications</h4>
        <p>Published research papers on critical environmental conservation topics and methodologies.</p>
      </div>
    </div>
  </div>
</section>


      {/* Future Vision */}
      <section className="future-vision">
        <h2>Future <span className="highlight">Vision</span></h2>
        <p>Our roadmap for expanding environmental impact and fostering sustainable community development across India</p>
        <ul className="vision-list">
          <li>Strengthen Global Partnerships</li>
          <li>Large-scale Campaigns</li>
          <li>Research & Publications</li>
          <li>Educational Expansion</li>
          <li>National Outreach</li>
        </ul>
        <div className="commitment-box">
          <h3>Our Unwavering Commitment</h3>
          <p>
            The journey and mission of the Bhomya Foundation continues with unwavering commitment to safeguarding the
            environment and fostering meaningful community involvement for a sustainable future.
          </p>
        </div>
      </section>

    </div>
  );
};

export default AboutContent;
