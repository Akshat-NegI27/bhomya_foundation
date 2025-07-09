import React, { useEffect, useRef } from "react";
import "./involveContent.css";
import "./responsive_involve.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const InvolveContent = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { x: i % 2 === 0 ? -150 : 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 60%",
            scrub: true,
          },
          duration: 1,
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <div className="involve-wrapper">
      <section className="about-us">
        <div className="textaa">
          <h1>
            Get <span className="highlightt">Involved</span>
          </h1>
          <p className="description">
            Bhomya Foundation is a non-profit organization located in the heart
            of Dehradun, Uttarakhand, dedicated to fostering environmental
            conservation and sustainable community development.
          </p>
        </div>

        <div className="about-cards-grid">
          <div className="involves-card">
            <div className="photox">
              <img src="/assets/img/intern.jpg" alt="Vision" />
            </div>
            <h1>Intern / Trainee</h1>
            <h2>Hands-on Experience & Training</h2>
            <p>
              Work with our experts on impactful environmental projects
              involving fieldwork, research, and awareness campaigns.
            </p>
            <div className="buttons">
              <a
                className="button-underline"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdm_xrOT2QheVAz7ttbkJssOIVYcVER1dH55P6v1xg8FvfIWA/viewform?usp=sf_link "
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply as Intern
              </a>

            </div>
          </div>
          <div className="involves-card">
            <div className="photox">
              <img src="/assets/img/gi2.jpg" alt="Mission" />
            </div>
            <h1>Member</h1>
            <h2>Be an active contributor to our mission</h2>
            <p>
              Support us through consistent involvement, get access to exclusive
              events, newsletters, and help shape our initiatives.
            </p>
            <div className="buttons">
              <a
                className="button-underline"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdm_xrOT2QheVAz7ttbkJssOIVYcVER1dH55P6v1xg8FvfIWA/viewform?usp=sf_link "
                target="_blank"
                rel="noopener noreferrer"
              >
                Join as Member
              </a>

            </div>
          </div>
          <div className="involves-card">
            <div className="photox">
              <img src="/assets/img/partner.jpg" alt="Where We Work" />
            </div>
            <h1>Partner With Us</h1>
            <h2>Collaborate for greater impact</h2>
            <p>
              Join as a strategic ally for CSR projects, education programs, and
              wide-reaching environmental initiatives.
            </p>
            <div className="buttons">
              <a
                className="button-underline"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdm_xrOT2QheVAz7ttbkJssOIVYcVER1dH55P6v1xg8FvfIWA/viewform?usp=sf_link "
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Partner
              </a>

            </div>
          </div>
          <div className="involves-card">
            <div className="photox">
              <img src="/assets/img/wwd6.jpg" alt="Where We Work" />
            </div>
            <h1>Volunteer</h1>
            <h2>Create change on the ground</h2>
            <p>
              Contribute your time and creativity to plantation drives,
              awareness campaigns, and event coordination.
            </p>
            <div className="buttons">
              <a
                className="button-underline"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdm_xrOT2QheVAz7ttbkJssOIVYcVER1dH55P6v1xg8FvfIWA/viewform?usp=sf_link "
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Volunteer
              </a>

            </div>
          </div>
        </div>
      </section>
      <div className="involve-container">
        <div className="bglay">
          <h2>BHOMYA FOUNDATION</h2>
        </div>
        <div className="involve-header">
          <span className="badge">Join Our Cause</span>
          <h1>Get Involved</h1>
          <p>
            There are many ways you can contribute to our mission and help make
            a difference in environmental conservation.
          </p>
        </div>

        <div className="involve-cards">
          {[
            {
              title: "Intern / Trainee",
              subtitle: "Gain hands-on experience and training",
              desc: "As an intern or trainee, you'll be actively involved in real-world environmental projects under the mentorship of seasoned experts. This role offers a unique opportunity to contribute to meaningful research, assist in ecological experiments, and support awareness campaigns while building a strong foundation in sustainable practices.",

              roles: [
                "🌿 Field and Research Projects",
                "📈 Data analysis and reporting",
                "🧪 Environmental experiments",
                "📝 Documentation & Campaigns",
              ],
              // btn: "Apply as Intern",
              color: "green",
              icon: "icon-intern",
            },
            {
              title: "Member",
              subtitle: "Be a committed part of our mission",
              desc: "As a member, you become an integral part of our mission. Members actively participate in events, awareness programs, and community initiatives, helping us build a stronger, more eco-conscious society through consistent support and engagement.",
              roles: [
                "📬 Monthly newsletters & reports",
                "🤝 Event & workshop access",
                "🗳 Feedback & planning involvement",
                "🎖 Recognition for loyalty",
              ],
              // btn: "Join as Member",
              color: "brown",
              icon: "icon-member",
            },
            {
              title: "Partner With Us",
              subtitle: "Collaborate to drive greater change",
              desc: "Collaborate with us as a strategic partner to drive impactful environmental initiatives. Our partners contribute resources, expertise, and network support to advance shared sustainability goals and foster long-term community development.",
              roles: [
                "🏢 CSR Projects",
                "📊 Impact reporting",
                "📚 Educational tie-ups",
                "🌐 Network access",
              ],
              // btn: "Become a Partner",
              color: "green",
              icon: "icon-partner",
            },
            {
              title: "Volunteer",
              subtitle: "Make a direct, meaningful impact",
              desc: "Volunteers play a vital role in executing on-ground activities, contributing their time and energy to support environmental campaigns, community outreach, and conservation projects that create measurable impact.",
              roles: [
                "🌱 Plantation drives",
                "📣 Awareness campaigns",
                "🎪 Event coordination",
                "🧠 Creative contributions",
              ],
              // btn: "Become a Volunteer",
              color: "brown",
              icon: "icon-volunteer",
            },
          ].map((card, index) => (
            <div
              className="involve-card wide-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="icon-circle">
                <i className={card.icon} />
              </div>
              <h2>{card.title}</h2>
              <p className="subtitle">{card.subtitle}</p>
              <p className="description">{card.desc}</p>
              <ul className="details-list">
                {card.roles.map((role, i) => (
                  <li key={i}>{role}</li>
                ))}
              </ul>
              <button className={`btn ${card.color}`}>{card.btn}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvolveContent;
