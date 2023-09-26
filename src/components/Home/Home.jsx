import React, { useState } from "react";
import "./Home.css";
import Lottie from "lottie-react";
import sjWLdPyCSD from "./sjWLdPyCSD.json";
import str from "./str.json";
import Logo from "./Logo.png";

import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

function Home() {
  return (
    <section className="home-wrapper" id="mainPage" >
      <div className="home-container" data-aos="fade-up"
    data-aos-anchor-placement="top-center"  data-aos-duration="1000" >
        <div className="home-left-container">
          <div className="home-title-container">
            <h1 className="home-title-text">
              Your Cloud,
              <br />
              <span className="hom-typeWriter-text">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 300,
                    strings: ["FORTIFIED", "STRENGTH"],
                  }}
                />
              </span>
            </h1>
          </div>
          <div className="home-des-container">
            <span className="home-des-text">
              Welcome to ClouSec, where we bring you a comprehensive solution
              for enhanced security, streamlined inventory management, and
              efficient suppress workflow handling. Our cutting-edge product
              empowers businesses to stay ahead in the ever-evolving landscape
              of security challenges and inventory control.
            </span>
          </div>
          <div className="home-rateUs-container">
            <div className="home-rateUs-top">
              <div className="home-start-lottie">
                <Lottie animationData={str} />
              </div>
              <div className="home-logo-conatiner">
                <img src={Logo} alt="" width={30} />
              </div>
              <span className="home-top-start-text">5.0</span>
            </div>
            <div className="home-rateUs-top">
              <span className="home-bottom-start-text">
                Based on 1000+ customer reviews
              </span>
            </div>
          </div>
          <div className="home-button-container">
            <Link 
            
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={600}
            style={{zIndex:50}}>
              <button className="home-button-left" style={{width:"100%"}} >Get started</button>
              </Link>
           
            <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={10}
            duration={100}>
            <button className="home-button-right">
              ABOUT US <span>&gt;</span>
            </button>
            </Link>
          </div>
        </div>
        <div className="home-right-container"  >
          <div className="lottie-container">
            <Lottie animationData={sjWLdPyCSD} />
          </div>
        </div>
      </div>
    </section>
  );
}


export default Home;
