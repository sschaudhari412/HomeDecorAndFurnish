import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What is Furniverse?",
    answer:
      "Furniverse is your one-stop shop for premium home decor, furniture & lifestyle products."
  },
  {
    question: "Do you offer free delivery?",
    answer:
      "Yes! We provide free delivery on all orders above ₹999 across India."
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, Credit/Debit Cards, Net Banking, COD & Wallet payments."
  },
  {
    question: "Do you have a return policy?",
    answer:
      "Yes! You can return products within 7 days of delivery if eligible based on the return policy."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="faq-section container mb-5">
      <h2 className="section-title text-center mb-4">
        Frequently Asked  <span className="highlight">Questions ❓</span> 
      </h2>

      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <h5>{faq.question}</h5>
              <span className="faq-toggle">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
    
  );
}
