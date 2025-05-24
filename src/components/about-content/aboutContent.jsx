import "./aboutContent.css";

const AboutContent = () => {
  return (
    <div className="aboutpg">
      <div className="animated-header">
        <div className="header-content">
          <h1>About Bhomya Foundation</h1>
          <p>
            Creating a greener tomorrow through community, sustainability, and
            action.
          </p>
        </div>
      </div>

      {/* You can insert rest of the about content here */}
      <div className="about-body">
        <div className="about-container">
          <h1 className="about-title">About Bhomya Foundation</h1>

          <section className="about-section">
            <h2 className="section-title">Who We Are</h2>
            <p>
              <strong>Bhomya Foundation</strong> is a committed non-profit
              organization working toward environmental conservation and
              sustainable community development. Our vision is to nurture an
              eco-conscious society that coexists harmoniously with nature by
              restoring ecosystems, protecting biodiversity, and encouraging
              sustainable living.
            </p>
          </section>

          <section className="about-section">
            <h2 className="section-title">Our Founder and Team</h2>
            <p>
              <strong>Founder:</strong> Himanshu Sahu
            </p>
            <p>
              <strong>Co-founder & Core Members:</strong>
            </p>
            <ul className="custom-list">
              <li>Arun Pratap Mishra</li>
              <li>Sipu Kumar</li>
              <li>Gautam Kumar</li>
              <li>Pooja</li>
              <li>Aditi Pant</li>
              <li>Samriddhi</li>
            </ul>

            <p>
              <strong>Experts and Associates:</strong>
            </p>
            <ul className="custom-list">
              <li>Shivam Kishwan (Field Research Expert)</li>
              <li>Vipin Rao (Senior Technical Associate)</li>
              <li>Sarabjeet Kaur (Subject Expert)</li>
              <li>Rounak Patra (Subject Expert)</li>
              <li>Jadamba Bhatt (Subject Expert)</li>
              <li>Naveen Chandra (Subject Expert)</li>
            </ul>

            <p>
              <strong>Regional Team Leads:</strong>
            </p>
            <ul className="custom-list">
              <li>Sonal Shukla (Uttar Pradesh - TL)</li>
              <li>Ashok (Jammu & Kashmir - TL)</li>
              <li>Gautam Kumar (Bihar - TL)</li>
              <li>Pratiksha Panwar (Uttarakhand - TL)</li>
            </ul>

            <p>
              Supported by our R&D Team, Planning Team, and 10+ active
              volunteers and environmental activists.
            </p>
          </section>

          <section className="about-section">
            <h2 className="section-title">Our Mission</h2>
            <p>
              Our mission is to foster a sustainable and nature-friendly
              society. We focus on protecting biodiversity, restoring
              ecosystems, and empowering communities to adopt eco-conscious
              lifestyles.
            </p>
          </section>

          <section className="about-section">
            <h2 className="section-title">Our Objectives</h2>
            <ul className="custom-list">
              <li>
                Conserve and protect natural resources through community-driven
                projects.
              </li>
              <li>
                Educate and engage schools, institutions, and communities in
                environmental action.
              </li>
              <li>
                Conduct research on biodiversity, soil health, sustainable
                agriculture, and disaster risk reduction.
              </li>
              <li>
                Raise awareness about pollution, deforestation, and climate
                change.
              </li>
              <li>
                Promote organic farming, eco-waste management, and reforestation
                practices.
              </li>
            </ul>
          </section>

          <section className="about-section">
            <h2 className="section-title">Where We Work</h2>
            <p>
              Our primary operations are in{" "}
              <strong>Dehradun, Uttarakhand</strong>, with active projects
              expanding into{" "}
              <strong>Bihar, Uttar Pradesh, and Jammu & Kashmir</strong>.
            </p>
          </section>
        </div>{" "}
      </div>
    </div>
  );
};

export default AboutContent;
