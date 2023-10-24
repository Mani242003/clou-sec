import React,{useRef,useEffect} from "react";
import "./Problem.css";
import security from "../../assets/problemPage/security.svg";
import gear from "../../assets/problemPage/gear.svg"
import time from "../../assets/problemPage/time.svg"
import team from "../../assets/problemPage/team.svg"
import report from "../../assets/problemPage/report.svg"
import process from "../../assets/problemPage/process.svg"
import {motion,useInView,useAnimation} from "framer-motion";





const Problem = () => {
  
  const ref =useRef(null)
  const isView =useInView(ref,{once:false})
 const mainControls=useAnimation()
  useEffect(()=>{
    if(isView){
      mainControls.start('visible')
    }
  },[isView])
  return (
    <section className="problem-wrapper" id="problem" >
      <div className="problem-container" >
        <div className="problem-header-container">
          <span className="problem-header-titel">
            Cloud Security Challenges We Solve
          </span>
          <span className="problem-header-sub_titel">
          We address and mitigate cloud security challenges to ensure the safe and compliant operation of your cloud-based systems and data.          </span>
        </div>
        <div 
        ref={ref} 
           className="problem-main-content-container">
          <motion.div variants={{
            hidden:{opacity:0,y:-75},
            visible:{opacity:1,y:0}
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration:0.5 ,delay:0.25}} className="problem-main-content-row1">
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
                Fragmented security findings across an organization's infrastructure can lead to increased exposure to cyber threats.
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
                A lack of centralized visibility into an organization's IT infrastructure can result in blind spots, making it challenging to monitor and secure the entire environment effectively.
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
                Time-consuming analysis can delay critical decision-making, hinder productivity, and strain resources, particularly when dealing with vast datasets or complex problems.
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div  variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0}
          }}
          initial="hidden"
          animate={mainControls}
          transition={{duration:0.5 ,delay:0.25}} className="problem-main-content-row2">
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
                Limited collaboration and communication among team members often result in missed opportunities, reduced efficiency, and misunderstandings that can hinder project success.
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
                Inefficient reporting processes can lead to delays, errors, and missed insights, making it challenging for organizations to make data-driven decisions and respond effectively to emerging issues.
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
                Compliance and audit challenges can create legal and financial risks for organizations, requiring dedicated efforts to meet regulatory requirements and ensure transparency in their operations.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
