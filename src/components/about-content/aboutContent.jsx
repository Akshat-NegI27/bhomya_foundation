import gsap from "gsap";
import "./aboutContent.css";
import "./responsive_about.css";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import g1 from "/assets/img/s4.jpg";
gsap.registerPlugin(ScrollTrigger);

const AboutContent = () => {
  const sectionRef = useRef();
  const pinWrapRef = useRef();

  useEffect(() => {
    const section = sectionRef.current;
    const pinWrap = pinWrapRef.current;

    ScrollTrigger.create({
      trigger: section,
      start: "top +=770",
      end: "+=1280 top",
      pin: pinWrap,
      pinSpacing: false,
      scrub: 2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="about-wrapper">
      {/* About Us */}
      <section className="about-us">
        <div className="textaa">
          <h1>
            About <span className="highlightt">Us</span>
          </h1>
          <p className="description">
            Bhomya Foundation is a non-profit organization located in the heart
            of Dehradun, Uttarakhand, dedicated to fostering environmental
            conservation and sustainable community development.
          </p>
        </div>

        <div className="about-cards-grid">
          <div className="about-card" style={{ marginTop: "150px" }}>
            <div className="photox">
              <img src="/assets/img/wwd0.jpg" alt="Vision" />
            </div>
            <h3>Our Vision</h3>
            <p>
              To create a greener, more sustainable world by empowering
              communities, restoring ecosystems, and adopting environmentally
              responsible practices.
            </p>
          </div>
          <div className="about-card">
            <div className="photoxz">
              <img src="/assets/img/doon.jpg" alt="Mission" />
            </div>
            <h3>Our Mission</h3>
            <p>
              We strive to conserve natural resources through grassroots
              initiatives, educating communities on environmental stewardship,
              and promoting sustainable agriculture and eco-friendly living. Our
              work is further supported by research focused on biodiversity and
              climate resilience.
            </p>
          </div>
          <div className="about-card " style={{ marginTop: "150px" }}>
            <div className="photox">
              <img src="/assets/img/wwd3.jpg" alt="Where We Work" />
            </div>
            <h3>Where We Work</h3>
            <p>
              Primarily operating in Dehradun and across the Himalayan belt
              including Uttarakhand, Uttar Pradesh, Bihar & Jharkhand. We
              collaborate with students, scholars, volunteers, and local
              communities.
            </p>
          </div>
        </div>
      </section>
      {/* What We Do */}
      <section className="what-we-do">
        <h2>
          What We <span className="highlight">Do?</span>
        </h2>
        <p className="description">
          We design and execute programs on both short- and long-term bases,
          creating lasting impact for environmental conservation.
        </p>
        <div className="programs-grid">
          <div className="program-card">
            <div className="program-img">
              <img src="/assets/img/wwd5.jpg" alt="Environmental Restoration" />
            </div>

            <h4>Environmental Restoration</h4>
            <p>
              Tree plantation drives, river cleanups, and reforestation
              programs.
            </p>
          </div>
          <div className="program-card">
            <div className="program-img">
              <img src="/assets/img/wwd6.jpg" alt="Community Engagement" />
            </div>

            <h4>Community Engagement</h4>
            <p>
              Engaging local communities through environmental events and
              volunteering.
            </p>
          </div>
          <div className="program-card">
            <div className="program-img">
              <img src="/assets/img/wwd7.jpg" alt="Education & Awareness" />
            </div>

            <h4>Education & Awareness</h4>
            <p>
              Workshops, school programs, and digital campaigns for youth and
              adults.
            </p>
          </div>
          <div className="program-card">
            <div className="program-img">
              <img src="/assets/img/wwd8.jpg" alt="Research & Development" />
            </div>

            <h4>Research & Development</h4>
            <p>
              Studies on environmental policies, climate models, and innovation
              projects.
            </p>
          </div>
        </div>
      </section>
      <section className="mentor-highlight">
        <section className="what-we-doo">
          <h2>
            OUR <span className="highlight">MENTORS</span>
          </h2>{" "}
          <p className="description">
            Our mentors are experts in their fields, guiding our initiatives
            with their extensive knowledge and experience. They play a crucial
            role in shaping our programs and ensuring their effectiveness.
          </p>
        </section>

        <div className="mentor-container">
          <div className="mentor-image">
            <img src="/assets/img/amit.jpeg" alt="Prof. Kusum" />
          </div>

          <div className="mentor-text">
            <h3>Dr. Amit Kumar</h3>
            <h3>Scientist - E Wildlife Institute of India </h3>
            <p>
              Since a young age, I've been fascinated by plants, wanting to know
              their names, how and where they grow, and how they differed from
              one another. With time, my fascination grew into a desire to learn
              more about plants, which led me to pursue a bachelor's degree in
              forestry from the University of Horticulture and Forestry in
              Himachal Pradesh, as well as M.Sc. and Ph.D. degrees in forestry
              from the Forest Research Institute University, Dehradun. I had the
              privilege of investigating the flora and ecology of the cold-arid
              and Trans-Himalayan zones of Nanda Devi Biosphere Reserve for my
              doctoral thesis. Delineation of a new biogeographic province in
              the Trans-Himalaya, designation of Caragana versicolor as a
              keystone species, flora of NDBR and discovery of few new species
              in one of the least explored regions of the Western Himalaya were
              few outcomes of the thesis. I joined Wildlife Institute of India
              (WII) as a faculty in May, 2018. Prior to joining WII, I had the
              honour of teaching Systematic Botany and Forest Botany as a
              faculty at Forest Research Institute University, Dehradun and as a
              visiting faculty at Indira Gandhi National Forest Academy,
              Dehradun. Plant ecology and field botany are the main focuses of
              my research. The current research includes understanding
              vegetation patterns, plant associations, floristic diversity
              assessment, ethnobotany, and the threatened medicinal plants
              conservation in the Western Himalaya. I enjoy photographing
              plants, hiking, biking and playing table tennis.{" "}
            </p>
          </div>
        </div>
      </section>{" "}
      <section className="mentor-highlight">
        <div className="mentor-container">
          <div className="mentor-image">
            <img src="/assets/img/kusum.jpeg" alt="Prof. Kusum" />
          </div>
          <div className="mentor-text">
            <h3>Prof. Kusum Arunachalam</h3>
            <h3>SENR, Doon <University></University></h3>
            <p>
              Prof. Kusum Arunachalam, a distinguished scholar with over 27 years
              of experience, specializes in Restoration Ecology and Natural
              Resource Management, focusing on the Indian Himalayas. A tropical
              soil ecologist, she earned her Ph.D. from NEHU, India. She
              received the CSIR-Independent Research Associateship (1997) and
              DST-Young Scientist Award (1998) before joining NERIST as a
              Lecturer, later becoming an Assistant Professor (2007). She also
              served as a Senior Scientific Officer at the Uttarakhand State
              Council for Science & Technology (2007-2009). Currently, she is a
              Professor at Doon University’s School of Environment & Natural
              Resources, where she has also held key administrative positions,
              including Dean Academics, Dean of the School, Director-IQAC, and
              Acting Vice Chancellor. Dr. Arunachalam has led major research
              projects on soil ecology, wetland conservation, and ecosystem
              dynamics, collaborating with indigenous communities like the Jad
              Bhutiya, Jaunsari, Apatani, and Nishi to validate their
              traditional knowledge. She has completed 15 R&D projects worth ₹10
              crores, funded by agencies like UGC, DST, CSIR, MoEF&CC, ICAR,
              GIZ, and MoES, and has contributed to national task forces on
              Himalayan sustainability. Recognized for her contributions, she
              received the National Young Woman Bioscientist Award (2005) and
              the BOYSCAST Fellowship (2002-03) for research in Germany. A
              Fellow of prestigious organizations like the International Society
              of Tropical Ecology and the National Environmental Science
              Academy, she has mentored numerous Master’s, Doctoral, and
              Post-Doctoral students. Through her multidisciplinary
              approach—integrating modern science with traditional ecological
              wisdom—she has significantly advanced ecological research,
              empowered indigenous communities, and promoted sustainable
              environmental practices.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="mentor-highlight">
        <div className="mentor-container">
          <div className="mentor-image">
            <img src="/assets/img/ujjawal.jpg" alt="Dr. Ujjwal Kumar" />
          </div>
          <div className="mentor-text">
            <h3>Dr. Ujjwal Kumar</h3>
            <h3>SENR, Doon University</h3>
            <p>
              Dr. Ujjwal Kumar has more than 18 years of research and teaching
              experience in the field of Atmospheric science/Environmental
              Science/Atmospheric-Environmental Modelling / Statistical-Time
              Series modelling / machine learning analysis of environmental
              data. He is currently serving at School of Envrionment & Natural
              Resources, Doon University, India. Prior to joining Doon
              University, he worked as Post Doc Researcher at KNMI-Royal
              Netherlands Meteorological Institute, Netherlands for three and
              half years mainly on operational air quality forecasting system
              using Chemical Transport Models with data assimilation of
              surface/satellite observations. Prior to this, he also worked for
              two years at VITO-Flemish Institute for Technological Research,
              Belgium on data assimilation of chemical transport model AURORA.
              He has more than 40 research publications to his credit in
              different high quality impact factor journals including Nature,
              Atmospheric Chemistry & Physics (ACP), and Atmospheric Environment
              among others. He has carried out several
              scientific/action-oriented projects as Principal Investigator (PI)
              sponsored by DST, SERB, Ministry of Environment Forest & Climate
              Change, UGC and has been a collaborator in several international
              projects such as MACC (a EU project), PASODOBLE (a EU project),
              SMOGPROG (Ministry of Environment, Netherlands). He has been a
              recipient of Young Scientist medal by Society for Science of
              Climate Change and Sustainable Environment for exemplary work in
              Environment & Sustainable Development (2023), Uttarakhand
              Governor’s Award for 2nd best Research Publications in Science
              (2015-16). He also serves as an editorial board member of the
              journal SN Applied Sciences, Discover Forests and Journal of
              Aritifical Intelligence.
            </p>
          </div>
        </div>
      </section>
      {/* Our Impact */}
      <section className="our-impact">
        <h2>
          Our <span className="highlight">Impact</span>
        </h2>
        <p className="description">
          Measurable change through dedicated environmental action and community
          engagement
        </p>
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
      <span className="pinBackground" ref={pinWrapRef}>
        <div className="headd">
          <h2>
            Our <span className="highlight">Achievements</span>
          </h2>
          <p className="description">
            Since our establishment, we have successfully organized and executed
            multiple initiatives focused on environmental conservation and
            community awareness.
          </p>
        </div>

        <div className="achievements-bg">
          <img src={g1} className="pinImage" alt="" />
        </div>
      </span>
      <section className="achievements-section" ref={sectionRef}>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-item left">
            <div className="timeline-card">
              <h4>Community Clean-up Drives</h4>
              <p>
                Organized multiple community-based environmental clean-up
                initiatives across regions.
              </p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-card">
              <h4>Nature Conservation Events</h4>
              <p>
                Nature walks, bird-watching events, and educational talks on
                biodiversity preservation.
              </p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-card">
              <h4>Tree Plantation Drives</h4>
              <p>
                Large-scale tree plantation initiatives to restore green cover
                and combat climate change.
              </p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-card">
              <h4>Educational Collaborations</h4>
              <p>
                Partnerships with local communities and schools for
                environmental education programs.
              </p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-card">
              <h4>Research Publications</h4>
              <p>
                Published research papers on critical environmental conservation
                topics and methodologies.
              </p>
            </div>
          </div>
          <div className="timeline-item right">
            <div className="timeline-card">
              <h4>Nature Conservation Events</h4>
              <p>
                Nature walks, bird-watching events, and educational talks on
                biodiversity preservation.
              </p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-card">
              <h4>Tree Plantation Drives</h4>
              <p>
                Large-scale tree plantation initiatives to restore green cover
                and combat climate change.
              </p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-card">
              <h4>Educational Collaborations</h4>
              <p>
                Partnerships with local communities and schools for
                environmental education programs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Future Vision */}
      <section className="future-vision">
        <h2>
          Future <span className="highlight">Vision</span>
        </h2>
        <p className="description">
          Our roadmap for expanding environmental impact and fostering
          sustainable community development across India
        </p>
        <div className="vision-flex">
          <div className="vision-list">
            <p>Strengthen Global Partnerships</p>
            <p>Large-scale Campaigns</p>
            <p>Research & Publications</p>
            <p>Educational Expansion</p>
            <p>National Outreach</p>
          </div>
          <div className="commitment-box">
            <h3>Our Unwavering Commitment</h3>
            <p>
              The journey and mission of the Bhomya Foundation continues with
              unwavering commitment to safeguarding the environment and
              fostering meaningful community involvement for a sustainable
              future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
