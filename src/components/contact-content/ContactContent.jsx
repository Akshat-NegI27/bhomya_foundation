import React from "react";
import "./ContactContent.css";

const ContactContent = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>"We're here to help and answer any question you might have."</p>
        <p><strong>Address:</strong> Bhomya Foundation, Green Street, Dehradun, India</p>
        <p><strong>Email:</strong> info@bhomya.org | <strong>Phone:</strong> +91 9876543210</p>
      </section>

      <section className="contact-body">
        <div className="contact-left">
          <h2>Reach Us</h2>
          <p>Bhomya Foundation is located in the heart of Dehradun. You’re always welcome!</p>
          <ul>
            <li>🌳 Green Street, Dehradun</li>
            <li>📧 info@bhomya.org</li>
            <li>📞 +91 9876543210</li>
          </ul>
        </div>

        <div className="contact-center">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-right">
          <iframe
            title="Map"
            src="https://www.google.com/maps?s=web&rlz=1C1ONGR_enIN1026IN1026&lqi=ClVBZGRyZXNzOiBNb25hbCBFbmNsYXZlLCBMYW5lLTdiLCBDaGFuZGNoYWssIEJhbmphcmF3YWxhLCBEZWhyYWR1biwgVXR0YXJha2hhbmQgMjQ4MDAxIgJIAUi7m--txreAgAhaaxAAEAEQAhADEAQQBRAGEAcQCBgAGAEYAhgEGAUYBhgHGAgiR21vbmFsIGVuY2xhdmUgbGFuZSA3YiBjaGFuZGNoYWsgYmFuamFyYXdhbGEgZGVocmFkdW4gdXR0YXJha2hhbmQgMjQ4MDAxkgETaG91c2luZ19kZXZlbG9wbWVudA&vet=12ahUKEwig-cysuLyNAxUc6zgGHfpCHMAQ1YkKegQIIBAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KYXcyXCaKQk5McCyhKWr46Hj&daddr=Chandchak,+Banjarawala,+Dehradun,+Uttarakhand+248001"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactContent;
