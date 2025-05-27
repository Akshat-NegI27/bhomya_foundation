import React, { useEffect, useRef } from "react";
import "./teamContent.css";
import heros from "/assets/img/g2.jpg";
import Curve from "../../components/Curve";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaUserFriends,
} from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SocialIcons = () => (
  <div className="social-icons">
    <FaFacebookF />
    <FaLinkedinIn />
    <FaTwitter />
  </div>
);

const TeamCard = ({ name, title, desc, skills, image }) => (
  <div className="team-card">
    <div className="team-image">{image && <img src={image} alt={name} />}</div>

    <div className="team-info">
      <h3>{name}</h3> <span className="role">{title}</span>
      <p>{desc}</p>
      <div className="skills">
        {skills.map((skill, i) => (
          <span className="skill" key={i}>
            {skill}
          </span>
        ))}
      </div>
      <SocialIcons />
    </div>
  </div>
);

const TeamContent = () => {
  const headingRef = useRef(null);
  const asd = useRef(null);

  useEffect(() => {
    if (asd.current) {
      gsap.fromTo(
        asd.current,
        { scale: 1, borderRadius: "0px" },
        {
          scale: 0.7,
          borderRadius: "50px",
          ease: "none",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "-=200",
            end: "+=500",
            scrub: true,
          },
        }
      );
    }
  }, []);

  const founder = {
    name: "Sarah Johnson",
    title: "Founder & CEO",
    desc: "Visionary leader with 10+ years of experience in tech. Passionate about building systems that make a difference and empowering teams to achieve extraordinary results.",
    skills: [],
    image: "/assets/img/g1.jpg",
  };

  const coreTeam = [
    {
      name: "Michael Chen",
      title: "Co-founder & CTO",
      desc: "Full-stack architect and tech visionary.",
      skills: ["AI/ML", "Backend", "Cloud Architecture"],
      image: "/assets/img/g1.jpg",
    },
    {
      name: "Emily Davis",
      title: "Creative Director",
      desc: "Design strategist focused on user experience.",
      skills: ["UI/UX", "Figma", "Design Systems"],
      image: "/assets/img/g1.jpg",
    },
    {
      name: "David Rodriguez",
      title: "Lead Developer",
      desc: "Expert in building scalable backend systems.",
      skills: ["TypeScript", "Python", "DevOps"],
      image: "/assets/img/g1.jpg",
    },
    {
      name: "Lisa Park",
      title: "AI Strategist",
      desc: "Works on responsible AI, predictive systems.",
      skills: ["ML Models", "Analytics", "AI Ethics"],
      image: "/assets/img/g1.jpg",
    },
    {
      name: "James Wilson",
      title: "Sales Director",
      desc: "Drives sales and enterprise growth.",
      skills: ["CRM", "B2B Sales", "Negotiation"],
      image: "/assets/img/g1.jpg",
    },
    {
      name: "Rachel Kim",
      title: "Marketing Director",
      desc: "Crafts content strategy and brand presence.",
      skills: ["SEO", "Content", "Paid Media"],
      image: "/assets/img/g1.jpg",
    },
  ];

  const extendedTeam = [
    "Alex Thompson – Software Engineer",
    "Maria Garcia – UX Designer",
    "Robert Kim – DevOps Engineer",
    "Jennifer Lee – Business Analyst",
    "Carlos Martinez – Quality Assurance",
    "Nina Patel – Content Strategist",
    "Tom Anderson – Customer Success",
    "Sophie Zhang – Data Scientist",
  ];

  const detailedTeam = [
    {
      id: "michael",
      name: "Michael Chen",
      title: "Co-founder & CTO",
      image: "/assets/img/g1.jpg",
      bio: "Michael is a full-stack architect with 15+ years of experience in AI/ML and scalable systems.",
      experience: [
        "Led development of 50+ enterprise platforms",
        "Mentor for 500+ junior developers",
      ],
    },
    {
      id: "emily",
      name: "Emily Davis",
      title: "Creative Director",
      image: "/assets/img/g1.jpg",
      bio: "Emily brings innovative thinking to every pixel she touches, specializing in immersive UX.",
      experience: [
        "Former Lead Designer at TopDesign Inc.",
        "Speaker at UX World 2023",
      ],
    },
    {
      id: "david",
      name: "David Rodriguez",
      title: "Lead Developer",
      image: "/assets/img/g1.jpg",
      bio: "David is a backend expert with deep understanding of DevOps, cloud architecture, and scalable systems.",
      experience: ["10+ years in Node/Python", "Built resilient microservices"],
    },
  ];

  return (
    <Curve backgroundColor="#ffffff">
      <div className="team-wrapper">
        <div className="hero-team">
          <div className="texta">
            <h1 ref={headingRef}>
              Meet Our <span className="highlight">Dream Team</span>
            </h1>

            <p className="intro">
              We're a collection of passionate individuals from diverse
              backgrounds, <br />
              united by our shared commitment to excellence and innovation.
            </p>
          </div>

          <div className="hero-imagae">
            <img ref={asd} src={heros} className="ix" alt="Team Hero" />
          </div>
        </div>
        <h2 className="section-heading">Our Founder</h2>
        <p className="section-subheading">The visionary behind our mission</p>

        <div className="founder-wrapper">
          <div className="founder-card">
            <div className="team-image">
              {founder.image && <img src={founder.image} alt={founder.name} />}
            </div>

            <div className="team-info">
              <h3>{founder.name}</h3>
              <span className="role">{founder.title}</span>
              <p>{founder.desc}</p>
              <SocialIcons />
            </div>
          </div>
        </div>
        <h2 className="section-heading">Core Team & Co-founders</h2>
        <p className="section-subheading">
          The driving force behind our success
        </p>

        <div className="team-grid">
          {coreTeam.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>
        <h2 className="section-heading">Our Extended Team</h2>
        <p className="section-subheading">
          The talented individuals who make it all possible
        </p>

        <div className="extended-wrapper">
          <div className="extended-header">
            <FaUserFriends className="icon" />
            <h3>Our Extended Team</h3>
          </div>

          <div className="extended-grid">
            {extendedTeam.map((member, index) => (
              <div className="extended-card" key={index}>
                {member}
              </div>
            ))}
          </div>
        </div>
        <h2 className="section-heading">Team Member Highlights</h2>
        <p className="section-subheading">
          Learn more about our amazing team members
        </p>

        <div className="detailed-team">
          {detailedTeam.map((member, i) => (
            <div
              className={`detailed-card ${i % 2 === 0 ? "left" : "right"}`}
              id={member.id}
              key={i}
            >
              <div className="detailed-photo">
                {member.image && <img src={member.image} alt={member.name} />}
              </div>

              <div className="detailed-info">
                <h3>{member.name}</h3>
                <p className="role">{member.title}</p>
                <p>{member.bio}</p>
                <ul>
                  {member.experience.map((exp, idx) => (
                    <li key={idx}>{exp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Curve>
  );
};

export default TeamContent;
