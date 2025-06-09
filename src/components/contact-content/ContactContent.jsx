import React, { useState } from "react";
import "./ContactContent.css";
import "./responsive_contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import emailjs from "@emailjs/browser";


const ContactContent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address.";

    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      setStatus("Please agree to the terms before submitting.");
      return;
    }
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("Please fix the errors above.");
      return;
    }

    setStatus("Sending...");

    const templateParams = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_kcndtib",
        "template_3in1qpp",
        templateParams,
        "T4LKGZaBd51g9xa63"
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
          });
          setErrors({});
          setAgreed(false);
        },
        (err) => {
          console.error("EmailJS error:", err);
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };
  return (
    <div className="contactpg">
      <div className="contact-header">
        <h2>Reach Out</h2>
        <h1>Contact Us</h1>
        <div className="line"></div>
        <p>
          Have questions or want to get involved? Reach out to us using the form
          below or contact us directly.
        </p>
      </div>

      <div className="contact-container">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">
                  First Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  aria-required="true"
                />
                <small className="error-message">{errors.firstName}</small>
              </div>

              <div className="form-group">
                <label htmlFor="lastName">
                  Last Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  aria-required="true"
                />
                <small className="error-message">{errors.lastName}</small>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                aria-required="true"
              />
              <small className="error-message">{errors.email}</small>
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                Subject <span>*</span>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                autoComplete="off"
                aria-required="true"
              />
              <small className="error-message">{errors.subject}</small>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message <span>*</span>
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"
                aria-required="true"
              ></textarea>
              <small className="error-message">{errors.message}</small>
            </div>
            <div className="form-group">
              <label
                htmlFor="agreement"
                style={{ display: "flex", alignItems: "center" }}
              >
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  aria-required="true"
                  style={{ marginRight: "8px" }}
                />
                I agree to the terms and conditions
              </label>
              {!agreed && status && (
                <small className="error-message" style={{ color: "red" }}>
                  You must agree before submitting.
                </small>
              )}
            </div>
            <button type="submit" className="send-btn">
              Send Message ✉️
            </button>
            {status && (
              <p
                style={{
                  marginTop: "1em",
                  color: status.includes("success") ? "green" : "red",
                }}
              >
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Right: Info + Map */}
        <div className="contact-info-box">
          <div className="info-section">
            <h3>Contact Information</h3>
            <p>
              <strong>Email:</strong> info@bhomyafoundation.org
            </p>
            <p>
              <strong>Phone:</strong> +91 73109 53284
            </p>
            <p>
              <strong>Address:</strong> Monal Enclave, Near Kargi Chowk,
              Dehradun, <br />
              Uttarakhand – 248001, India
            </p>
            <p>
              <strong>Working Hours:</strong>
              <br />
              Monday – Friday: 9:00 AM – 5:00 PM
            </p>
          </div>
          <div className="map-container">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.6935780523636!2d78.02321251114482!3d30.274310807538118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909295de5014f3f%3A0xb10d63ecc70303fc!2sMonal%20Enclave%2C%20Chandchak%2C%20Banjarawala%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1748171148866!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="follow-section">
        <h3 className="follow-title">Connect with Us Online</h3>
        <div className="linef"></div>

        <p>
          Stay connected with us on social media to update on our latest
          initiatives and events.
        </p>

        <div className="social-media-container">
          <ul className="social-media-list">
            <li>
              <a
                href="https://www.facebook.com/share/19FkrDEpZF/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MHV Education on Facebook"
              >
                <i className="fa-brands fa-facebook"></i>
                <span>Facebook</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/bhomya_foundation/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MHV Education on Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/bhomya-foundation/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MHV Education on LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@BhomyaFoundation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MHV Education on YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
                <span>YouTube</span>
              </a>
            </li>

            

            <li>
              <a
                href="mailto:support@bhomya.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email MHV Education"
              >
                <i className="fa-solid fa-envelope"></i>
                <span>Mail</span>
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/+917310953284"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Bhomya on WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
