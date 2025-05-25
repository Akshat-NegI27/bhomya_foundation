import React from "react";
import "./ContactContent.css";

const ContactContent = () => {
  return (
    <div className="contact-container">
      <h5 className="badge">Reach Out</h5>
      <h1 className="title">Contact Us</h1>
      <p className="subtitle">Have questions or want to get involved? Reach out to us using the form below or contact us directly.</p>

      <div className="contact-wrapper">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>First Name *</label>
                <input type="text" placeholder="Enter your first name" required />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input type="text" placeholder="Enter your last name" required />
              </div>
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Subject *</label>
              <input type="text" placeholder="Enter subject" required />
            </div>
            <div className="form-group">
              <label>Message *</label>
              <textarea placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="send-btn">Send Message ✉️</button>
          </form>
          <p className="disclaimer">By submitting this form, you agree to our privacy policy and terms of service.</p>
        </div>

        {/* Right: Info + Map */}
        <div className="contact-info-box">
          <div className="info-section">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> info@bhomyafoundation.org</p>
            <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
            <p><strong>Address:</strong> Mangal Chowk, Near Kargi Chowk, Dehradun, Uttarakhand – 248001, India</p>
            <p><strong>Working Hours:</strong><br />Monday – Friday: 9:00 AM – 5:00 PM</p>
          </div>
          <div className="map-container">
            <iframe
              title="Map"
              src="https://www.google.com/maps?s=web&rlz=1C1ONGR_enIN1026IN1026&lqi=ClVBZGRyZXNzOiBNb25hbCBFbmNsYXZlLCBMYW5lLTdiLCBDaGFuZGNoYWssIEJhbmphcmF3YWxhLCBEZWhyYWR1biwgVXR0YXJha2hhbmQgMjQ4MDAxIgJIAUi7m--txreAgAhaaxAAEAEQAhADEAQQBRAGEAcQCBgAGAEYAhgEGAUYBhgHGAgiR21vbmFsIGVuY2xhdmUgbGFuZSA3YiBjaGFuZGNoYWsgYmFuamFyYXdhbGEgZGVocmFkdW4gdXR0YXJha2hhbmQgMjQ4MDAxkgETaG91c2luZ19kZXZlbG9wbWVudA&vet=12ahUKEwig-cysuLyNAxUc6zgGHfpCHMAQ1YkKegQIIBAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KYXcyXCaKQk5McCyhKWr46Hj&daddr=Chandchak,+Banjarawala,+Dehradun,+Uttarakhand+248001"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="follow-section">
        <h4>Follow Us</h4>
        <p>Stay connected with us on social media to update on our latest initiatives and events.</p>
        <div className="social-icons">
          {/* Add social icons if needed */}
        </div>
      </div>
    </div>
  );
};

export default ContactContent;