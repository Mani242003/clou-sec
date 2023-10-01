import React from "react";
import "./Problem.css";
import security from "../../assets/problemPage/security.svg";
import gear from "../../assets/problemPage/gear.svg"
import time from "../../assets/problemPage/time.svg"
import team from "../../assets/problemPage/team.svg"
import report from "../../assets/problemPage/report.svg"
import process from "../../assets/problemPage/process.svg"
import{motion} from "framer-motion"




const Problem = () => {
  return (
    <section className="problem-wrapper" >
      <div className="problem-container" >
        <div className="problem-header-container">
          <span className="problem-header-titel">
            Cloud Security Challenges We Solve
          </span>
          <span className="problem-header-sub_titel">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cum, vel provident aperiam.
          </span>
        </div>
        <div className="problem-main-content-container">
          <div className="problem-main-content-row1">
            <motion.div className="problem-content "
            
            
            >
              <div className="problem-content-left" >
                <div className="problem-left-img-container problem-content-1"  >
                  <img src={security} alt="" />
                </div>
              </div>
              <div className="problem-content-right" >
                <span className="problem-content-right-title">
                  Fragmented Security Findings
                </span>
                <span className="problem-content-right-des">
                  Web analytics is the measurement, collection, analysis and
                  reporting of web data for purposes of under standing and
                  optimizing web usage.
                </span>
              </div>
            </motion.div>
            <div className="problem-content " >
              <div className="problem-content-left">
                <div className="problem-left-img-container problem-content-2">
                  <img src={gear} alt="" />
                </div>
              </div>
              <div className="problem-content-right">
                <span className="problem-content-right-title">
                Lack of Centralized Visibility
                </span>
                <span className="problem-content-right-des">
                  Web analytics is the measurement, collection, analysis and
                  reporting of web data for purposes of under standing and
                  optimizing web usage.
                </span>
              </div>
            </div>
            <div className="problem-content ">
              <div className="problem-content-left">
                <div className="problem-left-img-container problem-content-3"   >
                  <img src={time} alt="" />
                </div>
              </div>
              <div className="problem-content-right">
                <span className="problem-content-right-title">
                Time-Consuming Analysis
                </span>
                <span className="problem-content-right-des">
                  Web analytics is the measurement, collection, analysis and
                  reporting of web data for purposes of under standing and
                  optimizing web usage.
                </span>
              </div>
            </div>
          </div>
          <div className="problem-main-content-row2">
            <div className="problem-content ">
              <div className="problem-content-left">
                <div className="problem-left-img-container problem-content-4"  >
                  <img src={team} alt="" />
                </div>
              </div>
              <div className="problem-content-right">
                <span className="problem-content-right-title">
                Limited Collaboration and Communication
                </span>
                <span className="problem-content-right-des">
                  Web analytics is the measurement, collection, analysis and
                  reporting of web data for purposes of under standing and
                  optimizing web usage.
                </span>
              </div>
            </div>
            <div className="problem-content ">
              <div className="problem-content-left">
                <div className="problem-left-img-container problem-content-5"  >
                  <img src={report} alt="" />
                </div>
              </div>
              <div className="problem-content-right">
                <span className="problem-content-right-title">
                Inefficient Reporting
                </span>
                <span className="problem-content-right-des">
                  Welcome to ClouSec, where we bring you a comprehensive
                  solution for enhanced security, streamlined inventory
                  management, and efficient suppress workflow handling.
                </span>
              </div>
            </div>
            <div className="problem-content ">
              <div className="problem-content-left">
                <div className="problem-left-img-container problem-content-6" >
                  <img src={process} alt="" />
                </div>
              </div>
              <div className="problem-content-right">
                <span className="problem-content-right-title">
                Compliance and Audit Challenges
                </span>
                <span className="problem-content-right-des">
                  Web analytics is the measurement, collection, analysis and
                  reporting of web data for purposes of under standing and
                  optimizing web usage.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
