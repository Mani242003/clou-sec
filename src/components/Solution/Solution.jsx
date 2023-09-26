import React from "react";
import "./Solution.css";
import Lottie from "lottie-react";
import solutionLotiee1 from "../../assets/solution/solutionLotiee1.json";
import lotiee4 from "../../assets/solution/lotiee4.json";
import soutionLotiee2 from "../../assets/solution/soutionLotiee-2.json";
import lotiee5 from "../../assets/solution/lotiee5.json";
import { Link } from "react-scroll";
import {AiOutlineArrowRight} from "react-icons/ai"

const Solution = () => {
  return (
    <section className="solution-wrapper" id="solution" >
      <div className="solution-container" >
        <div className="solution-header">
          <h1 className="solution-header-text">
          Why Choose Clousec for Unbeatable <br/> Cloud Security?
          </h1>
        </div>
        <div className="solution-main-content-container" >
          <div
            className="solution-main-content "
           
            style={{ background: "#E4F6EF" }}
           
            
            
          >
            <div className="solution-main-content-left "   >
              <span className="solution-left-content-text1" style={{ color: "#5AA8B2" }} data-aos="fade-down"
            data-aos-anchor-placement="top-center"  data-aos-duration="50">
                Centralized Security Findings Visibility
              </span>
              <span className="solution-left-content-text2" data-aos="fade-down"
            data-aos-anchor-placement="top-center"  data-aos-duration="100">
                Centralized Security Findings
                <br />
                Visibility
              </span>
              <span className="solution-left-content-text3" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                molestias error fugiat, rerum suscipit reprehenderit provident
                sit dolorum quisquam asperiores repellendus omnis repudiandae
                tempore quod! In dolore aperiam itaque consequuntur! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Repellat
                consectetur illo placeat! Dolorum in cupiditate.
              </span>
              <div className="solution-left-content-bottom">
             <Link>
             <span className="solution-left-content-text4">
                Learn more 
              </span>
             </Link>
             <AiOutlineArrowRight />

              </div>
             
            </div>
            <div className="solution-main-content-right"  >
              <div className="solution-lottie-container">
                <Lottie animationData={solutionLotiee1} />
              </div>
            </div>
          </div>
          <div
            className="solution-main-content"
            style={{ background: "#FEF6D6" }}
          >
            <div className="solution-main-content-left">
              <span className="solution-left-content-text1" style={{ color: "#A3894E" }}>
              Compliance and Audit Readiness

              </span>
              <span className="solution-left-content-text2" data-aos="fade-up"
            data-aos-anchor-placement="top-center"  data-aos-duration="100">
              Compliance and Audit <br/>Readiness
              </span>
              <span className="solution-left-content-text3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                molestias error fugiat, rerum suscipit reprehenderit provident
                sit dolorum quisquam asperiores repellendus omnis repudiandae
                tempore quod! In dolore aperiam itaque consequuntur! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Repellat
                consectetur illo placeat! Dolorum in cupiditate.
              </span>
              <div className="solution-left-content-bottom">
             <Link>
             <span className="solution-left-content-text4">
                Learn more 
              </span>
             </Link>
             <AiOutlineArrowRight />

              </div>
            </div>
            <div className="solution-main-content-right">
              <div className="solution-lottie-container solution-modified-lottie">
                <Lottie animationData={lotiee5} />
              </div>
            </div>
          </div>
          <div
            className="solution-main-content"
            style={{ background: "#E4F6EF" }}
          >
            <div className="solution-main-content-left">
              <span className="solution-left-content-text1" style={{ color: "#5AA8B2" }}>
              Effective Workflow for Suppressing
              <br/>Security Findings
              </span>
              <span className="solution-left-content-text2"data-aos="fade-down"
            data-aos-anchor-placement="top-center"  data-aos-duration="100">
              Effective Workflow for Suppressing
              <br/>Security Findings
              </span>
              <span className="solution-left-content-text3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                molestias error fugiat, rerum suscipit reprehenderit provident
                sit dolorum quisquam asperiores repellendus omnis repudiandae
                tempore quod! In dolore aperiam itaque consequuntur! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Repellat
                consectetur illo placeat! Dolorum in cupiditate.
              </span>
              <div className="solution-left-content-bottom">
             <Link>
             <span className="solution-left-content-text4">
                Learn more 
              </span>
             </Link>
             <AiOutlineArrowRight />

              </div>
            </div>
            <div className="solution-main-content-right">
              <div className="solution-lottie-container">
                <Lottie animationData={lotiee4} />
              </div>
            </div>
          </div>
          <div
            className="solution-main-content"
            style={{ background: "#F6FDD6" }}
          >
            <div className="solution-main-content-left">
              <span className="solution-left-content-text1" style={{ color: "#6F7730" }}>
              Improved Collaboration and Communication Flexibility
              </span>
              <span className="solution-left-content-text2" data-aos="fade-up"
            data-aos-anchor-placement="top-center"  data-aos-duration="100">
              Improved Collaboration and Communication Flexibility
              </span>
              <span className="solution-left-content-text3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                molestias error fugiat, rerum suscipit reprehenderit provident
                sit dolorum quisquam asperiores repellendus omnis repudiandae
                tempore quod! In dolore aperiam itaque consequuntur! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Repellat
                consectetur illo placeat! Dolorum in cupiditate.
              </span>
              <div className="solution-left-content-bottom">
             <Link>
             <span className="solution-left-content-text4">
                Learn more 
              </span>
             </Link>
             <AiOutlineArrowRight />

              </div>
            </div>
            <div className="solution-main-content-right">
              <div className="solution-lottie-container">
                <Lottie animationData={soutionLotiee2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
