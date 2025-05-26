import React from "react";
import "./teamContent.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SocialIcons = () => (
  <div className="social-icons">
    <FaFacebookF />
    <FaLinkedinIn />
    <FaTwitter />
  </div>
);

const TeamCard = ({ name, title, desc, skills, image }) => (
  <div className="team-card">
    <div className="team-image">
      {image && <img src={image} alt={name} />}
    </div>
    <div className="team-info">
      <h3>{name}</h3>
      <span className="role">{title}</span>
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
  const founder = {
    name: "Sarah Johnson",
    title: "Founder & CEO",
    desc:
      "Visionary leader with 10+ years of experience in tech. Passionate about building systems that make a difference and empowering teams to achieve extraordinary results.",
    skills: [],
    image: "", // Add founder image if available
  };

  const coreTeam = [
    {
      name: "Michael Chen",
      title: "Co-founder & CTO",
      desc: "Full-stack architect and tech visionary.",
      skills: ["AI/ML", "Backend", "Cloud Architecture"],
      image: "",
    },
    {
      name: "Emily Davis",
      title: "Creative Director",
      desc: "Design strategist focused on user experience.",
      skills: ["UI/UX", "Figma", "Design Systems"],
      image: "",
    },
    {
      name: "David Rodriguez",
      title: "Lead Developer",
      desc: "Expert in building scalable backend systems.",
      skills: ["TypeScript", "Python", "DevOps"],
      image: "",
    },
    {
      name: "Lisa Park",
      title: "AI Strategist",
      desc: "Works on responsible AI, predictive systems.",
      skills: ["ML Models", "Analytics", "AI Ethics"],
      image: "",
    },
    {
      name: "James Wilson",
      title: "Sales Director",
      desc: "Drives sales and enterprise growth.",
      skills: ["CRM", "B2B Sales", "Negotiation"],
      image: "",
    },
    {
      name: "Rachel Kim",
      title: "Marketing Director",
      desc: "Crafts content strategy and brand presence.",
      skills: ["SEO", "Content", "Paid Media"],
      image: "",
    },
  ];

  return (
    <div className="team-wrapper">
      <h1>
        Meet Our <span className="highlight">Dream Team</span>
      </h1>
      <p className="intro">
        We're a collection of passionate individuals from diverse backgrounds,
        united by our shared commitment to excellence and innovation.
      </p>

      <h2 className="section-heading">Our Founder</h2>
      <p className="section-subheading">The visionary behind our mission</p>
      <div className="founder-wrapper">
        <TeamCard {...founder} />
      </div>

      <h2 className="section-heading">Core Team & Co-founders</h2>
      <p className="section-subheading">The driving force behind our success</p>
      <div className="team-grid">
        {coreTeam.map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>

      <h2 className="section-heading">Our Extended Team</h2>
      <p className="section-subheading">
        The talented individuals who make it all possible
      </p>
    </div>
  );
};

export default TeamContent;
