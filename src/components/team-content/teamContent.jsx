import React, { useEffect, useRef } from "react";
import "./teamContent.css";
import "./responsive_team.css";
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
    name: "Himanshu",
    title: "Founder & President",
    desc: " Himanshu Sahu brings a rich academic foundation in Agriculture, Environmental Science, and Social Work, combined with a deep commitment to sustainable development and ecological conservation. Currently pursuing his Ph.D. at the Wildlife Institute of India, his research focuses on soil chemistry and its role in plant ecology—an area that informs many of the foundation's initiatives.As the Founder and President of Bhomya Foundation, Himanshu is dedicated to empowering communities and nurturing environmental consciousness, especially among the youth.He believes that meaningful change begins at the grassroots and that inspiring young minds today will create the environmental leaders of tomorrow. Under his leadership, the foundation continues to drive community- based conservation, environmental education, and collective action toward a greener, more sustainable future.",
    skills: [],
    image: "/assets/img/himanshu.jpg",
    socials: {
      facebook: "https://www.facebook.com/share/16jArF78XT/ ",
      instagram: "https://www.instagram.com/sahu_sarkar09?igsh=bG1ya3BoZnZtcWFo",
      // twitter: "https://twitter.com/sarahjohnson",
      linkedin: "https://www.linkedin.com/in/himanshu-sahu-7329961a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  };

  const coreTeam = [
    {
      name: "Arun Pratap Mishra",
      title: "Vice President",
      desc: "Vision. Leadership. Impact.",
      punch: "Driving innovation with purpose and precision.",
      skills: ["Leadership", "Strategic Planning", "Organizational Management"],
      image: "/assets/img/vice__president.jpg",
      socials: {
        facebook: "https://facebook.com/michaelchen",
        instagram: "https://instagram.com/michaelchen",
        twitter: "https://twitter.com/michaelchen",
        linkedin: "https://linkedin.com/in/michaelchen",
      },
    },


    {
      name: "Pooja Purohit",
      title: "Secretary",
      desc: "Coordination. Commitment. Communication.",
      punch: "Organizing impact through clarity and compassion.",
      skills: ["Operations", "Documentation", "Stakeholder Communication"],
      image: "/assets/img/pooja.jpg",
      socials: {
        facebook: "https://facebook.com/jameswilson",
        instagram: "https://www.instagram.com/poojapurohit1?utm_source=qr&igsh=aHJnNTU3MHR5d2sw",
        twitter: "https://twitter.com/jameswilson",
        linkedin: "https://linkedin.com/in/jameswilson",
      },
    },
    {
      name: "Sipu",
      title: "Joint Secretary",
      desc: "Structure. Support. Coordination.",
      punch: "Engineering structure behind social impact.",
      skills: ["Administration", "Documentation", "Coordination"],
      image: "/assets/img/joint_secratery.jpg",
      socials: {
        facebook: "https://facebook.com/davidrodriguez",
        instagram: "https://instagram.com/davidrodriguez",
        twitter: "https://twitter.com/davidrodriguez",
        linkedin: "https://linkedin.com/in/davidrodriguez",
      },
    },
    {
      name: "Gautam Kumar",
      title: "Deputy Secretary",
      desc: "Discipline. Oversight. Execution.",
      punch: "Driving operational excellence for sustainable progress.",
      skills: ["Team Management", "Compliance", "Strategic Execution"],
      image: "/assets/img/deputy_secretary.jpg",
      socials: {
        facebook: "https://facebook.com/gautam.bhomya",
        instagram: "https://www.instagram.com/gautam___uk?igsh=cWx4aXVuaDVlMWFu",
        twitter: "https://twitter.com/gautam_bhomya",
        linkedin: "https://linkedin.com/in/gautam-bhomya",
      },
    },
    {
      name: "Pratiksha",
      title: "Strategist",
      desc: "Ideas. Execution. Outreach.",
      punch: "Crafting impactful journeys through design thinking.",
      skills: ["Campaign Strategy", "User Research", "Engagement"],
      image: "/assets/img/strategist.jpg",
      socials: {
        facebook: "https://facebook.com/emilydavis",
        instagram: "https://www.instagram.com/pratiksha.panwar_2k4?igsh=MWlocDJlOWltYXA1Mw==",
        twitter: "https://twitter.com/emilydavis",
        linkedin: "https://linkedin.com/in/emilydavis",
      },
    },
    {
      name: "Himani Bhandari",
      title: "Volunteer – AI Research",
      desc: "Tech. Ethics. Impact.",
      punch: "Harnessing AI for environmental progress.",
      skills: ["Machine Learning", "AI Ethics", "Community"],
      image: "/assets/img/himani.jpg",
      socials: {
        facebook: "https://facebook.com/himani.bhandari",
        instagram: "https://instagram.com/himani.b.ai",
        twitter: "https://twitter.com/himani_b_ai",
        linkedin: "https://linkedin.com/in/himanibhandari",
      },
    },


  ];

  const extendedTeam = [
    "Km Pooja – Secretary",
    "Aditi Pant – Treasurer",
    "Gautam Kumar – Deputy Secretary",
    "Samriddhi Sharma – Spokesperson and Member",
    "Dr Naveen Chandra – Research & Development Team Lead",
    "Jagdamba Bhatt – Medicinal Plant Team Lead"

  ];

  const detailedTeam = [
    {
      id: "arun",
      name: "Arun Pratap Mishra",
      title: "Vice President",
      image: "/assets/img/vice__president.jpg",
      bio: "Arun Pratap Mishra is a forward-thinking leader and strategic planner who serves as the Vice President of Bhomya Foundation. With a strong commitment to sustainable development, Arun plays a crucial role in shaping the foundation’s long-term vision and operational efficiency. His leadership combines administrative clarity with a passion for grassroots impact. Known for fostering multi-sector partnerships and guiding mission-driven teams, Arun ensures that every initiative aligns with ecological responsibility and community empowerment.",
      experience: [
        "Oversaw the launch of a region-wide afforestation campaign impacting 10,000+ trees",
        "Built partnerships with local governance bodies for sanitation and water conservation projects",
        "Mentored youth leaders and volunteers in leadership development programs"
      ],
    },
    {
      id: "pooja",
      name: "Pooja Purohit",
      title: "Secretary",
      image: "/assets/img/pooja.jpg",
      bio: "Pooja Purohit holds a Master’s degree in Environmental Science and serves as the Secretary of Bhomya Foundation. She is deeply committed to community-led conservation efforts, with a particular focus on the interconnection between communities and river ecosystems. Her passion lies in understanding the dynamics of water quality and the ecological health of Indian rivers. Through her work with the foundation, she advocates for sustainable water management, river restoration, and environmental awareness. Pooja brings a strong sense of dedication to integrating scientific understanding with grassroots action, aiming to create lasting impact for both nature and society.",
      experience: [
        "Leads river ecosystem awareness programs in rural and urban settlements",
        "Coordinated water quality monitoring initiatives in the Himalayan region",
        "Plays a central role in community mobilization for river cleanup campaigns"
      ],
    },
    {
      id: "sipu",
      name: "Sipu",
      title: "Joint Secretary",
      image: "/assets/img/joint_secratery.jpg",
      bio: "Sipu is a passionate ecologist and the Joint Secretary of Bhomya Foundation. He focuses on the intersection of urban biodiversity, forest conservation, and environmental education. Known for his extensive fieldwork and commitment to scientific rigor, he translates research into community education tools. Whether tracking bird populations or coordinating habitat restoration efforts, Sipu brings a grounded, data-driven approach to every project while supporting the administrative backbone of the organization.",
      experience: [
        "Published field notes on migratory bird diversity in northern India",
        "Led a local habitat restoration program across 3 forest edge villages",
        "Developed ecological education toolkits for school-level biodiversity clubs"
      ],
    },
    {
      id: "gautam",
      name: "Gautam Kumar",
      title: "Deputy Secretary",
      image: "/assets/img/deputy_secretary.jpg",
      bio: "Gautam Kumar holds a Master’s degree in Sociology and plays a key role in community engagement at Bhomya Foundation. He has strong skills in working with communities, raising awareness, and supporting local development. Gautam is passionate about involving people in environmental conservation and believes that real change starts at the grassroots. His work focuses on connecting communities with the foundation’s goals, helping them take active steps toward a more sustainable and aware society.",
      experience: [
        "Facilitated over 20 grassroots awareness campaigns on waste management and eco-conscious living",
        "Coordinated community dialogues that led to sustainable water usage practices in 5 rural settlements",
        "Built partnerships with local institutions to drive village-level sustainability projects"
      ],
    }
    ,
    {
      id: "pratiksha",
      name: "Pratiksha Panwar",
      title: "Strategist",
      image: "/assets/img/strategist.jpg",
      bio: "Pratiksha Panwar is a vibrant strategist at Bhomya Foundation with a background in nursing and a heart rooted in service. As a third-year nursing student, she understands the vital link between public health and environmental sustainability. She plays a pivotal role in developing and executing health awareness programs, volunteer engagement drives, and youth-led eco-campaigns. Her empathetic nature, coupled with creative outreach strategies, ensures that Bhomya Foundation’s message reaches the people who need it most.",
      experience: [
        "Led a menstrual hygiene awareness drive reaching 1,200+ adolescent girls",
        "Designed a youth volunteer program now active across 15 educational institutions",
        "Organized first-aid and primary care workshops during field campaigns"
      ],
    },



    {
      id: "himani",
      name: "Himani Bhandari",
      title: "Volunteer – AI Research",
      image: "/assets/img/himani.jpg",
      bio: "Himani Bhandari is an emerging researcher and nursing professional focused on the use of AI, GIS, and remote sensing in ecological and climate initiatives. Her interdisciplinary knowledge allows her to blend data science with on-ground needs, helping Bhomya Foundation assess climate impacts and plan sustainable interventions. Passionate about ethics in tech and community collaboration, she bridges technology with human values in every research task she undertakes.",
      experience: [
        "Co-developed GIS maps for carbon emission tracking in rural zones",
        "Contributed to AI models predicting soil degradation patterns",
        "Published awareness blogs on responsible tech use in environmental monitoring"
      ],
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
