import React, { useState } from "react";
import "./donateContent.css";

const DonateContent = () => {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [type, setType] = useState("one-time");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

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
      description: `${type === "monthly" ? "Monthly" : "One-time"} Donation`,
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
      <div className="donate-form">
        <div className="donate-left-panel">
          <h3 className="section-title">Choose Your Impact</h3>
          <div className="amount-grid">
            {[25, 50, 100, 250, 500].map((val) => (
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
            <button
              className={`impact-btn ${customAmount ? "selected" : ""}`}
              onClick={() => {
                setAmount(null);
                setCustomAmount("1");
              }}
            >
              Custom
            </button>
          </div>

          {customAmount && (
            <input
              type="number"
              placeholder="Enter custom amount"
              value={customAmount}
              className="custom-input"
              onChange={(e) => setCustomAmount(e.target.value)}
            />
          )}

          <h4 className="section-title">Donation Type</h4>
          <div className="donation-type-cards">
            <label className={`type-card ${type === "one-time" ? "active" : ""}`}>
              <input
                type="radio"
                name="donation-type"
                value="one-time"
                checked={type === "one-time"}
                onChange={() => setType("one-time")}
              />
              <div>
                <strong>One-time</strong>
                <p>Single contribution</p>
              </div>
            </label>

            <label className={`type-card ${type === "monthly" ? "active" : ""}`}>
              <input
                type="radio"
                name="donation-type"
                value="monthly"
                checked={type === "monthly"}
                onChange={() => setType("monthly")}
              />
              <div>
                <strong>Monthly</strong>
                <p>Recurring support</p>
              </div>
            </label>
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
              ₹{customAmount || amount} can help us plant trees and support conservation efforts.
            </p>
          </div>

          <button className="donate-btn" onClick={handlePayment}>
            ❤️ Donate ₹{customAmount || amount}
          </button>
          <small className="secure-text">
            Your donation is secure and encrypted.
          </small>
        </div>
      </div>
    </div>
  );
};

export default DonateContent;
