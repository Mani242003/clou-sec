import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import "./Contact.css";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import callLotiee from "../../assets/contact/callLotiee.json";

const Contact = () => {
  return (
    <section className="contact-wrapper" id="contact">
      <div className="contact-container">
        <div className="contact-top-container">
          <span className="contact-title">
            Obtaining further information by make a contact with our experienced
            IT staffs.
          </span>
          <span className="contact-left-bottom-text">
            We’re available for 8 hours a day! Contact to require <br/> a detailed
            analysis and assessment of your plan.
          </span>
        </div>
        <div className="contact-bottom-container">
          <Lottie
            animationData={callLotiee}
            style={{ width: "70px", height: "70px" }}
          />
          <span className="contact-bottom-number">+91 9790845787</span>
        </div>

        <div className="contact-button-container">
          <button className="contact-button-1">
            <a href="mailto:jerome.stigmata@gmail.com">Call Now !</a>
          </button>

          <button className="contact-button-2">
            <a href="mailto:jerome.stigmata@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
