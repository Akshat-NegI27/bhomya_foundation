import React from "react";
import Navbar from "../../hooks/navbar/Navbar";
import ContactContent from "../../components/contact-content/ContactContent";
import Footer from "../../hooks/footer/footer";
const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactContent />
      <Footer />
    </>
  );
};

export default Contact;
