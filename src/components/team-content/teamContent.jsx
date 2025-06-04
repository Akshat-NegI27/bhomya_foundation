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
      name: "Dr. Naveen Chandra",
      title: "Research & Development Team Lead",
      desc: "Innovation. Insight. Impact.",
      punch: "Driving environmental solutions through science and research excellence.",
      skills: ["Ecological Research", "Project Design", "Data Analysis"],
      image: "/assets/img/naveen.jpg",
      socials: {
        facebook: "https://facebook.com/naveen.bhomya",
        instagram: "https://instagram.com/naveen.bhomya",
        twitter: "https://twitter.com/naveen_bhomya",
        linkedin: "https://linkedin.com/in/naveen-bhomya",
      },
    },
    {
      name: "Jagdamba Bhatt",
      title: "Cultural & Medicinal Plant Coordinator",
      desc: "Tradition. Healing. Conservation.",
      punch: "Preserving cultural heritage through the wisdom of native plants.",
      skills: ["Ethnobotany", "Cultural Preservation", "Community Education"],
      image: "/assets/img/bhatt.jpg",
      socials: {
        facebook: "https://facebook.com/jagdamba.bhomya",
        instagram: "https://instagram.com/jagdamba.bhomya",
        twitter: "https://twitter.com/jagdamba_bhomya",
        linkedin: "https://linkedin.com/in/jagdamba-bhomya",
      },
    }
    ,


  ];


  const otherTeam = [
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
      title: "Health professional",
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
 {
      name: "Yashica Gusain",
      title: "Member",
      desc: "Insightful. Analytical. Dedicated.",
      punch: "Turning data into impact-driven decisions.",
      skills: ["Data Analysis", "Visualization", "Problem Solving"],
      image: "/assets/img/Yashica.jpg",
      socials: {
        facebook: "https://facebook.com/yashica.gusain", 
        instagram: "https://instagram.com/yashica_gusain", 
        twitter: "https://twitter.com/yashica_gusain", 
        linkedin: "https://linkedin.com/in/yashica-gusain", 
      },
    },
    {
      name: "Samridhi Sharma",
      title: "Member",
      desc: "Creative. Precise. Efficient.",
      punch: "Building digital solutions with purpose and precision.",
      skills: ["Web Development", "UI/UX Design", "Responsive Design"],
      image: "/assets/img/samridhi.jpg",
      socials: {
        facebook: "https://facebook.com/samridhi.sharma", 
        instagram: "https://instagram.com/samridhi_sharma", 
        twitter: "https://twitter.com/samridhi_sharma", 
        linkedin: "https://linkedin.com/in/samridhi-sharma",       },
    },


    {
      name: "Akhilesh Rawat",
      title: "Master's in Smart Building Technologies and Sustainable Management",
      desc: "Graduate from BBW Hochschule University of Applied Sciences, Germany",
      punch: "Driving innovation in smart and sustainable infrastructure.",
      skills: ["Smart Building", "Sustainability", "Project Management"],
      image: "/assets/img/akhilesh.jpg",
      socials: {},
    },
    {
      name: "Sonal Shukla",
      title: "ESG Research Analyst",
      desc: "Focused on environmental, social, and governance research.",
      punch: "Promoting responsible and sustainable investing.",
      skills: ["ESG Analysis", "Sustainability", "Reporting"],
      image: "/assets/img/sonal.jpg",
      socials: {},
    },
    {
      name: "Satavisha Banik",
      title: "QA Analyst",
      desc: "Ensuring quality and reliability through rigorous testing.",
      punch: "Striving for excellence in every software product.",
      skills: ["Quality Assurance", "Testing", "Documentation"],
      image: "/assets/img/Satavisha .jpg",
      socials: {},
    },
    {
      name: "Arpit Chaudhary",
      title: "QA Analyst",
      desc: "Detail-oriented and focused on software integrity.",
      punch: "Precision and reliability at the heart of every release.",
      skills: ["Manual Testing", "Automation", "Bug Tracking"],
      image: "/assets/img/Arpit .jpg",
      socials: {},
    },
    {
      name: "Avantika Nautiyal",
      title: "Social Worker",
      desc: "Dedicated to community service and empowerment.",
      punch: "Building better lives through compassion and action.",
      skills: ["Community Outreach", "Welfare Programs", "Empowerment"],
      image: "/assets/img/Avantika .jpg",
      socials: {},
    },
    {
      name: "Iqra Mehdi",
      title: "Social Worker",
      desc: "Passionate about social justice and education.",
      punch: "Creating change through grassroots initiatives.",
      skills: ["Education", "Women Empowerment", "Youth Engagement"],
      image: "/assets/img/Iqra .jpg",
      socials: {},
    }

  ];
  const extendedTeam = [
    "Aditi Pant – Treasurer",
    "Samriddhi Sharma – Spokesperson and Member",
    "Sonal Shukla – Uttar Pradesh Team Lead",
    "Ashok – Jammu & Kashmir Team Lead  ",
    "Dr. Naveen Chandra – Subject Expert ",
    "Shivam Kishwan – Field Research Expert",
    "Vipin Rao – Senior Technical Associate ",
    "Sarabjeet Kaur – Subject Expert  ",
    "Rounak Patra – Subject Expert",

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
      id: "naveen",
      name: "Dr. Naveen Chandra",
      title: "Research & Development Team Lead",
      image: "/assets/img/naveen.jpg", // Update if the image path differs
      bio: "Dr. Naveen Chandra is a leading environmental researcher and the R&D Team Lead at Bhomya Foundation. With a doctoral degree in Ecology and years of field experience, he specializes in designing innovative conservation models rooted in science and local knowledge. His work bridges the gap between data-driven insights and practical environmental action. Dr. Chandra is dedicated to advancing ecological research, fostering collaboration between academic institutions and grassroots movements, and building evidence-based strategies for sustainable development.",
      experience: [
        "Directed multi-year ecological research projects across North India",
        "Published studies on biodiversity conservation and climate resilience",
        "Mentors young researchers and coordinates field-based R&D programs"
      ],
    }
    ,
    {
      id: "jagdamba",
      name: "Jagdamba Bhatt",
      title: "Cultural & Medicinal Plant Coordinator",
      image: "/assets/img/bhatt.jpg",
      bio: "Jagdamba Bhatt is a dedicated guardian of traditional knowledge and serves as the Cultural & Medicinal Plant Coordinator at Bhomya Foundation. With a deep-rooted understanding of local heritage, she works to preserve and promote the use of indigenous medicinal plants and cultural practices. Her work bridges ancient wisdom with modern environmental awareness, ensuring that community-led conservation includes both ecological and cultural dimensions.",
      experience: [
        "Documented over 50 native medicinal plant species used in traditional healing practices",
        "Led cultural heritage workshops involving elders and school children in 8 rural communities",
        "Developed community gardens focused on cultivating and conserving local medicinal flora"
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
      title: "Health professional",
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

      <h2 className="section-heading">SUPPORT TEAM</h2>
      <div className="line"></div>

      <p className="section-subheading">
        The other team members       </p>
      <div className="other-team-grid">
        {otherTeam.map((member, i) => (
          <TeamCard key={i} {...member} />
        ))}
      </div>


      <h2 className="section-heading">Volunteer</h2>
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
