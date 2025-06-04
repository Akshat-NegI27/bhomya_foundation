import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./donateContent.css";

gsap.registerPlugin(ScrollTrigger);

const DonateContent = () => {
  const headingRef = useRef(null);
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const handlePayment = () => {
    const finalAmount = customAmount || amount;
    if (!form.name || !form.email || finalAmount < 1) {
      alert("Please complete all required fields.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", 
      amount: finalAmount * 100,
      currency: "INR",
      name: "Bhomya Foundation",
      description: `Donation by ${form.name}`,
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      handler: (response) => {
        alert("Payment Successful: " + response.razorpay_payment_id);
      },
      theme: {
        color: "#2d6c44",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="donate-wrapper">
      <div className="hero-donate">
        <div className="texta">
          <h1 ref={headingRef}>
            Make a <span className="highlight">Difference Today</span>
          </h1>
          <p className="intro">
            Your contribution empowers us to plant more trees, protect wildlife, and support sustainable communities.
            Every rupee you donate goes directly to real impact on the ground.
          </p>
        </div>
      </div>

      <div className="donate-form">
        <div className="donate-left-panel">
          <h3 className="section-title">Choose Your Impact</h3>
          <p>Select a contribution amount or enter a custom amount of your choice.</p>
          <div className="amount-grid">
            {[51, 101, 501, 1100, 1501].map((val) => (
              <button
                key={val}
                className={`impact-btn ${amount === val && !customAmount ? "selected" : ""}`}
                onClick={() => {
                  setAmount(val);
                  setCustomAmount("");
                }}
              >
                ₹{val}
              </button>
            ))}
            <input
              type="number"
              placeholder="Custom"
              className="custom-input-inline"
              value={customAmount}
              onChange={(e) => {
                setAmount(null);
                setCustomAmount(e.target.value);
              }}
            />
          </div>

          <h4 className="section-title">Leave a Message</h4>
          <textarea
            className="message-box"
            placeholder="Share a message with us (optional)"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <h4 className="section-title">Scan to Donate</h4>
<div className="qr-section">
  <img
    src="/assets/img/qr-code.png" 
    alt="QR Code for Donation"
    className="qr-code-img"
  />
  <p style={{ fontSize: "13px", marginTop: "8px" }}>Scan using any UPI app</p>
</div>

        </div>

        <div className="donate-right-panel">
          <h3 className="section-title">Your Information</h3>
          <input
            type="text"
            placeholder="Full Name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email Address *"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <div className="impact-box">
            <strong>Your Impact:</strong>
            <p>
              ₹{customAmount || amount} can help us plant trees and support conservation efforts,
              creating a greener future for generations to come.
            </p>
          </div>

          <button className="donate-btn" onClick={handlePayment}>
            ❤️ Donate ₹{customAmount || amount}
          </button>
          <small className="secure-text">
            Your donation is secure and encrypted. We never store your payment details.
          </small>
        </div>
      </div>
    </div>
  );
};

export default DonateContent;
