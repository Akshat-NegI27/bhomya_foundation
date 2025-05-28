import React, { useEffect, useRef } from "react";
import "./involveContent.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      <div className="involve-container">
        <div className="involve-header">
          <span className="badge">Join Our Cause</span>
          <h1>Get Involved</h1>
          <p>
            There are many ways you can contribute to our mission and help make a
            difference in environmental conservation.
          </p>
        </div>

        <div className="involve-cards">
          {[
            {
              title: "Intern / Trainee",
              subtitle: "Gain hands-on experience and training",
              desc: "Interns and trainees work closely with our environmental experts...",
              roles: [
                "🌿 Field and Research Projects",
                "📈 Data analysis and reporting",
                "🧪 Environmental experiments",
                "📝 Documentation & Campaigns",
              ],
              btn: "Apply as Intern",
              color: "green",
              icon: "icon-intern",
            },
            {
              title: "Member",
              subtitle: "Be a committed part of our mission",
              desc: "Members support us with regular participation...",
              roles: [
                "📬 Monthly newsletters & reports",
                "🤝 Event & workshop access",
                "🗳 Feedback & planning involvement",
                "🎖 Recognition for loyalty",
              ],
              btn: "Join as Member",
              color: "brown",
              icon: "icon-member",
            },
            {
              title: "Partner With Us",
              subtitle: "Collaborate to drive greater change",
              desc: "Collaborate as a strategic partner...",
              roles: [
                "🏢 CSR Projects",
                "📊 Impact reporting",
                "📚 Educational tie-ups",
                "🌐 Network access",
              ],
              btn: "Become a Partner",
              color: "green",
              icon: "icon-partner",
            },
            {
              title: "Volunteer",
              subtitle: "Make a direct, meaningful impact",
              desc: "Volunteers play a critical role in on-ground activities...",
              roles: [
                "🌱 Plantation drives",
                "📣 Awareness campaigns",
                "🎪 Event coordination",
                "🧠 Creative contributions",
              ],
              btn: "Become a Volunteer",
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
