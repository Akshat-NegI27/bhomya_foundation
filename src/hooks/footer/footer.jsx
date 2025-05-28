import "./footer.css";
import "boxicons";
import { Link } from "react-router-dom";
import logo from "/assets/img/logow.webp";

const Footer = () => {
  return (
    <footer>
      <div className="containerx">
        <div className="content_footer">
          <div className="profil">
            <div className="logo_area">
              <img src={logo} alt="MVM EDUCATION Logo" />
              {}
            </div>
            <div className="desc_area">
              <p>
                We are the Bhomya Foundation in Dehradun, offering strong
                values, impactful programs, and dedicated efforts for a better
                society.
              </p>
              <h2>Office Address:</h2>
              <p>
                Monal Enclave, Near Kargi Chowk, Dehradun, Uttarakhand – 248001,
                India
              </p>
            </div>
            <div className="social_media">
              <a href="https://www.facebook.com/mhveducation/">
                <box-icon type="logo" name="facebook" size="md"></box-icon>
              </a>
              <a href="https://www.instagram.com/mhveducation/">
                <box-icon type="logo" name="instagram" size="md"></box-icon>
              </a>
              <a href="https://www.linkedin.com/company/mhv-education/">
                <box-icon
                  type="logo"
                  name="linkedin-square"
                  size="md"
                ></box-icon>
              </a>
            </div>
          </div>
          <div className="service_area">
            <ul className="service_header">
              <ul className="service_header">
                <li className="service_name">GET INVOLVE</li>
                <li>
                  <a
                    href="/assets/courses/Beginner_Technical_Analysis_Course_Syllabus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Become a Member 
                  </a>
                </li>
                <li>
                  <a
                    href="/assets/courses/Advanced_Technical_Analysis_Course_Syllabus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Become a Volunteer
                  </a>
                </li>
                <li>
                  <a
                    href="/assets/courses/Intraday_Strategy_Course_Syllabus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join as Intern
                  </a>
                </li>
                <li>
                  <a
                    href="/assets/courses/Elliott_Wave_Program_Syllabus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Become a Mentor
                  </a>
                </li>
                <li>
                  <a
                    href="/assets/courses/Chartered_Market_Technician_CMT_Syllabus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Become a Partner
                  </a>
                </li>
              </ul>
            </ul>
            <ul className="service_header">
              <li className="service_name">Resources</li>
              <li>
                <a
                  href="https://medium.com/@mhveducation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Support</Link>
              </li>
            </ul>
            <ul className="service_header">
              <li className="service_name">Company</li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <hr></hr>
          <div className="below">
            <div className="copy_right">
              <box-icon name="copyright"></box-icon>
              <span>2025 BHOMYA FOUNDATION</span>
            </div>
            <div className="tou">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
