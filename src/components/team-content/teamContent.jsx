import React, { useEffect, useRef } from "react";
import "./teamContent.css";
import heros from "/assets/img/g2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SocialIcons = ({ links }) => (
  <div className="social-icons">
    {links.facebook && (
      <a href={links.facebook} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    )}
    {links.instagram && (
      <a href={links.instagram} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    )}
    {links.twitter && (
      <a href={links.twitter} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
    )}
    {links.linkedin && (
      <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    )}
  </div>
);

const TeamCard = ({ name, title, desc, skills, image, socials }) => (
  <div className="team-card">
    <div className="team-image">{image && <img src={image} alt={name} />}</div>

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

      {socials && <SocialIcons links={socials} />}
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
    desc: "Our President and Founder, Himanshu, established the Bhomya Foundation with a heartfelt commitment to environmental sustainability and social empowerment. With a deep connection to nature and a strong sense of community, Himanshu envisioned a platform where action meets awareness — where individuals come together to create lasting ecological impact. Under his leadership, the foundation has grown from a passionate idea into a vibrant force for good — spearheading initiatives in environmental conservation, education, and rural development. Himanshu believes in leading by example, often working on the ground alongside volunteers, nurturing green spaces, and building bridges between people and purpose.",
    skills: [],
    image: "/assets/img/g1.jpg",
    socials: {
      facebook: "https://facebook.com/sarahjohnson",
      instagram: "https://instagram.com/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
    },
  };

  const coreTeam = [
    {
      name: "Michael Chen",
      title: "Co-founder & CTO",
      desc: "Full-stack architect and tech visionary.",
      skills: ["AI/ML", "Backend", "Cloud Architecture"],
      image: "/assets/img/g1.jpg",
      socials: {
        facebook: "https://facebook.com/michaelchen",
        instagram: "https://instagram.com/michaelchen",
        twitter: "https://twitter.com/michaelchen",
        linkedin: "https://linkedin.com/in/michaelchen",
      },
    },
    {
      name: "Emily Davis",
      title: "Creative Director",
      desc: "Design strategist focused on user experience.",
      skills: ["UI/UX", "Figma", "Design Systems"],
      image: "/assets/img/g1.jpg",
      socials: {
        facebook: "https://facebook.com/emilydavis",
        instagram: "https://instagram.com/emilydavis",
        twitter: "https://twitter.com/emilydavis",
        linkedin: "https://linkedin.com/in/emilydavis",
      },
    },
    {
      name: "David Rodriguez",
      title: "Lead Developer",
      desc: "Expert in building scalable backend systems.",
      skills: ["TypeScript", "Python", "DevOps"],
      image: "/assets/img/g1.jpg",
      socials: {
        facebook: "https://facebook.com/davidrodriguez",
        instagram: "https://instagram.com/davidrodriguez",
        twitter: "https://twitter.com/davidrodriguez",
        linkedin: "https://linkedin.com/in/davidrodriguez",
      },
    },
    {
      name: "Lisa Park",
      title: "AI Strategist",
      desc: "Works on responsible AI, predictive systems.",
      skills: ["ML Models", "Analytics", "AI Ethics"],
      image: "/assets/img/g1.jpg",
      socials: {
        facebook: "https://facebook.com/lisapark",
        instagram: "https://instagram.com/lisapark",
        twitter: "https://twitter.com/lisapark",
        linkedin: "https://linkedin.com/in/lisapark",
      },
    },
    {
      name: "James Wilson",
      title: "Sales Director",
      desc: "Drives sales and enterprise growth.",
      skills: ["CRM", "B2B Sales", "Negotiation"],
      image: "/assets/img/g1.jpg",
      socials: {
        facebook: "https://facebook.com/jameswilson",
        instagram: "https://instagram.com/jameswilson",
        twitter: "https://twitter.com/jameswilson",
        linkedin: "https://linkedin.com/in/jameswilson",
      },
    },
    {
      name: "Rachel Kim",
      title: "Marketing Director",
      desc: "Crafts content strategy and brand presence.",
      skills: ["SEO", "Content", "Paid Media"],
      image: "/assets/img/g1.jpg",
      socials: {
        facebook: "https://facebook.com/rachelkim",
        instagram: "https://instagram.com/rachelkim",
        twitter: "https://twitter.com/rachelkim",
        linkedin: "https://linkedin.com/in/rachelkim",
      },
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

      <h2 className="section-heading-founder">Our Founder</h2>
      <div className="linex"></div>

      <p className="section-subheading-founder">
        The visionary behind our mission
      </p>

      <div className="founder-wrapper">
        <div className="founder-card">
          <div className="team-image">
            {founder.image && <img src={founder.image} alt={founder.name} />}
          </div>

          <div className="founder-info">
            <h3>{founder.name}</h3>
            <span className="frole">{founder.title}</span>
            <p>{founder.desc}</p>
            <SocialIcons links={founder.socials} />
          </div>
        </div>
      </div>

      <h2 className="section-heading">Core Team & Co-founders</h2>
      <div className="line"></div>

      <p className="section-subheading">The driving force behind our success</p>

      <div className="team-grid">
        {coreTeam.map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>
      <h2 className="section-heading">Our Extended Team</h2>
      <div className="line"></div>

      <p className="section-subheading">
        The talented individuals who make it all possible
      </p>

      <div className="extended-wrapper">
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
  );
};

export default TeamContent;
