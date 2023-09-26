import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import "./Contact.css";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import callLotiee from "./callLotiee.json"


const Contact = () => {
  return (
    <section className="contact-wrapper" id="contact" >
      <div className="contact-container">
        <div className="contact-left-container"  data-aos="fade-down"
    data-aos-anchor-placement="top-center"  data-aos-duration="300" >
          <div className="contact-left-top">
            <span className="contact-left-title">
              Obtaining further information by make a contact with our
              experienced IT staffs.
            </span>
          </div>
          <div className="contact-left-bottom">
            <span className="contact-left-bottom-text">
              We’re available for 8 hours a day! Contact to require a detailed
              analysis and assessment of your plan.
            </span>
          </div>
        </div>
        <div className="contact-right-container"  data-aos="fade-up"
    data-aos-anchor-placement="top-center"  data-aos-duration="300" >
          {/* <LuPhoneCall size={65} color="white" style={{ opacity: 0.8 }} /> */}
          <Lottie animationData={callLotiee} style={{width:"100px",height:"100px"}}/>
          <span className="contact-right-text">REACH OUT NOW!</span>
          <span className="contact-right-number">+91 9790845787</span>

        <div className="contact-right-button-container">
        <button className="contact-left-button">
            <a href="# ">Call Now !</a>
          </button>

          <button className="contact-right-button">
            <a href="mailto:jerome.stigmata@gmail.com">Get Started</a>
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
